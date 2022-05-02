import TiffinReviewItem from "./TiffinReviewItem";

import classes from "./TiffinReviewList.module.css";

const TiffinReviewList = (props) => {
  return (
    <ul className={classes["tiffin-reviews"]}>
      {props.tiffinReviews.map((tiffinReview) => (
        <TiffinReviewItem key={tiffinReview.id} tiffinReview={tiffinReview} />
      ))}
    </ul>
  );
};

export default TiffinReviewList;
