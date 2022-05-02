import { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import useHttp from "../../hooks/use-http";
import { addHostelReview } from "../../lib/api";

import Button from "../../UI/Button";
import LoadingSpinner from "../../UI/LoadingSpinner";

import classes from "./NewHostelReviewForm.module.css";

const NewHostelReviewForm = (props) => {
  const { sendRequest, status, error } = useHttp(addHostelReview);

  const { onAddedHostelReview } = props;

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedHostelReview();
    }
  }, [status, error]);

  const hostelReviewTextRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    setRating(0);

    const enteredHostelReview = hostelReviewTextRef.current.value;

    sendRequest({
      reviewData: { text: enteredHostelReview, rating: rating },
      hostelId: props.hostelId,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <div>
          <p>Your Rating</p>
          <div className={classes.stars}>
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={
                    index <= (hover || rating) ? classes.on : classes.off
                  }
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                >
                  <FontAwesomeIcon icon={faStar} />
                </button>
              );
            })}
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="review">Your Review</label>
          <textarea id="review" rows="5" ref={hostelReviewTextRef}></textarea>
        </div>
      </div>
      <div className={classes.actions}>
        <Button onClick={props.stopAddHostelReviewHandler}>Cancel</Button>
        <Button>Add Review</Button>
      </div>
    </form>
  );
};

export default NewHostelReviewForm;
