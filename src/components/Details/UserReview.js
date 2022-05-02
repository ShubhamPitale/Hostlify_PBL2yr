import React from "react";

import Card from "../../UI/Card";
import classes from "./UserReview.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

const UserReview = (props) => {
  let fullStars = [];
  let emptyStars = [];

  for (var i = 1; i <= props.review.rating; i++) {
    fullStars.push(i);
  }

  for (var i = 1; i <= 5 - fullStars.length; i++) {
    emptyStars.push(i);
  }

  const stars1 = fullStars.map((id) => (
    <FontAwesomeIcon key={id} icon={faStar} className={classes.icon} />
  ));

  const stars2 = emptyStars.map((id) => (
    <FontAwesomeIcon key={id} icon={faStarEmpty} className={classes.icon} />
  ));

  stars1.push.apply(stars1, stars2);

  return (
    <div className={classes["user-review"]}>
      <Card>
        <h4 className={classes.icon}>
          <FontAwesomeIcon icon={faUser} className={classes.icon} />
          {props.review.username}
        </h4>
        <span>{stars1}</span>
        <p>{props.review.text}</p>
      </Card>
    </div>
  );
};

export default UserReview;
