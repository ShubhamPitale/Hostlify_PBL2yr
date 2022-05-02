import { useState, useEffect, useCallback } from "react";

import useHttp from "../../hooks/use-http";
import { getAllTiffinReviews } from "../../lib/api";

import TiffinReviewList from "./TiffinReviewList";
import NewTiffinReviewForm from "./NewTiffinReviewForm";

import LoadingSpinner from "../../UI/LoadingSpinner";
import Button from "../../UI/Button";

import classes from "./TiffinReviews.module.css";

const TiffinReviews = (props) => {
  const [isAddingTiffinReview, setIsAddingTiffinReview] = useState(false);

  const { foodId } = props;

  const {
    sendRequest,
    status,
    data: loadedTiffinReviews,
  } = useHttp(getAllTiffinReviews);

  useEffect(() => {
    sendRequest(foodId);
  }, [sendRequest, foodId]);

  const startAddTiffinReviewHandler = () => {
    setIsAddingTiffinReview(true);
  };

  const stopAddTiffinReviewHandler = () => {
    setIsAddingTiffinReview(false);
  };

  const addTiffinReviewHandler = useCallback(() => {
    sendRequest(foodId);
  }, [sendRequest, foodId]);

  let tiffinReviews;

  if (status === "pending") {
    tiffinReviews = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (
    status === "completed" &&
    (!loadedTiffinReviews || loadedTiffinReviews.length === 0)
  ) {
    tiffinReviews = <p className="centered">No Reviews were added yet</p>;
  }

  if (
    status === "completed" &&
    loadedTiffinReviews &&
    loadedTiffinReviews.length > 0
  ) {
    tiffinReviews = <TiffinReviewList tiffinReviews={loadedTiffinReviews} />;
  }

  return (
    <div className={classes["tiffin-reviews"]}>
      <h2>User Reviews</h2>
      {!isAddingTiffinReview && (
        <Button onClick={startAddTiffinReviewHandler}>Add a Review</Button>
      )}
      {isAddingTiffinReview && (
        <NewTiffinReviewForm
          foodId={foodId}
          onAddedTiffinReview={addTiffinReviewHandler}
          stopAddTiffinReviewHandler={stopAddTiffinReviewHandler}
        />
      )}
      <div>{tiffinReviews}</div>
    </div>
  );
};

export default TiffinReviews;
