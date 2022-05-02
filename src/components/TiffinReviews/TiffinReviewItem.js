import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../UI/Card";

import classes from "./TiffinReviewItem.module.css";

const TiffinReviewItem = (props) => {
  let fullStars = [];
  let emptyStars = [];

  for (var i = 1; i <= props.tiffinReview.rating; i++) {
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
    <li className={classes["user-review"]}>
      <Card>
        <span>{stars1}</span>
        <p className={classes.text}>{props.tiffinReview.text}</p>
      </Card>
    </li>
  );
};

export default TiffinReviewItem;
