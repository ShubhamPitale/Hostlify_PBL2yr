import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../UI/Card";

import classes from "./HostelReviewItem.module.css";

const HostelReviewItem = (props) => {
  let fullStars = [];
  let emptyStars = [];

  for (var i = 1; i <= props.hostelReview.rating; i++) {
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
        {/* <h4 className={classes.icon}>
          <FontAwesomeIcon icon={faUser} className={classes.icon} />
          {props.review.username}
        </h4> */}
        <span >{stars1}</span>
        <p className={classes.text}>{props.hostelReview.text}</p>
      </Card>
    </li>
  );
};

export default HostelReviewItem;
