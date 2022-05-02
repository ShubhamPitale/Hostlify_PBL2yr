import { useCallback, useEffect, useState } from "react";

import useHttp from "../../hooks/use-http";
import { getAllHostelReviews } from "../../lib/api";

import HostelReviewsList from "./HostelReviewsList";
import NewHostelReviewForm from "./NewHostelReviewForm";

import LoadingSpinner from "../../UI/LoadingSpinner";
import Button from "../../UI/Button";

import classes from "./HostelReviews.module.css";

const HostelReviews = (props) => {
  const [isAddingHostelReview, setIsAddingHostelReview] = useState(false);

  const { hostelId } = props;

  const {
    sendRequest,
    status,
    data: loadedHostelReviews,
  } = useHttp(getAllHostelReviews);

  useEffect(() => {
    sendRequest(hostelId);
  }, [sendRequest, hostelId]);

  const startAddHostelReviewHandler = () => {
    setIsAddingHostelReview(true);
  };

  const stopAddHostelReviewHandler = () => {
    setIsAddingHostelReview(false);
  };

  const addedHostelReviewHandler = useCallback(() => {
    sendRequest(hostelId);
  }, [sendRequest, hostelId]);

  let hostelReviews;

  if (status === "pending") {
    hostelReviews = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (
    status === "completed" &&
    (!loadedHostelReviews || loadedHostelReviews.length === 0)
  ) {
    hostelReviews = <p className="centered">No Reviews were added yet</p>;
  }

  if (
    status === "completed" &&
    loadedHostelReviews &&
    loadedHostelReviews.length > 0
  ) {
    hostelReviews = <HostelReviewsList hostelReviews={loadedHostelReviews} />;
  }

  return (
    <div className={classes["hostel-reviews"]}>
      <h2>User Reviews</h2>
      {!isAddingHostelReview && (
        <Button onClick={startAddHostelReviewHandler}>Add a review</Button>
      )}
      {isAddingHostelReview && (
        <NewHostelReviewForm
          hostelId={hostelId}
          onAddedHostelReview={addedHostelReviewHandler}
          stopAddHostelReviewHandler={stopAddHostelReviewHandler}
        />
      )}
      <div>{hostelReviews}</div>
    </div>
  );
};

export default HostelReviews;
