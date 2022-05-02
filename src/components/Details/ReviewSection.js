import React, { useState } from "react";

import Button from "../../UI/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import UserReview from "./UserReview";
import classes from "./ReviewSection.module.css";

const ReviewSection = (props) => {
  const [textAreaIsShown, setTextAreaIsShown] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const showTextarea = () => {
    setTextAreaIsShown((prevState) => !prevState);
  };
  const submitHandler = () => {
    setTextAreaIsShown(false);
    setRating(0);
  };

  let reviews = [];
  if (showAllReviews) {
    reviews = props.hostel.reviews;
  } else {
    reviews.push(props.hostel.reviews[0]);
    reviews.push(props.hostel.reviews[1]);
  }

  const reviewsElement = reviews.map((review) => (
    <UserReview review={review} />
  ));

  return (
    <section className={classes["review-section"]}>
      <div>
        <h2 className={classes.heading}>Reviews</h2>
      </div>
      <div className={classes.reviews}>{reviewsElement}</div>
      <div>
        {!textAreaIsShown && (
          <Button
            onClick={() => {
              setTextAreaIsShown(true);
            }}
          >
            <FontAwesomeIcon icon={faPlusCircle} className={classes.icon} />
            Add Review
          </Button>
        )}
        <Button onClick={() => setShowAllReviews((prevState) => !prevState)}>
          {!showAllReviews ? "Show All Reviews" : "Show Top Reviews"}
        </Button>
        {textAreaIsShown && (
          <div className={classes["add-review"]}>
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
            <textarea
              className={classes.textarea}
              rows={4}
              cols={50}
              placeholder="Add your review here..."
            ></textarea>
            <div>
              <Button
                onClick={() => {
                  setRating(0);
                  setTextAreaIsShown(false);
                }}
              >
                Cancel
              </Button>
              <Button onClick={submitHandler}>Submit</Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewSection;
