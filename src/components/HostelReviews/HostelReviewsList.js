import HostelReviewItem from "./HostelReviewItem";

import classes from "./HostelReviewsList.module.css";

const HostelReviewsList = (props) => {
  return (
    <ul className={classes["hostel-reviews"]}>
      {props.hostelReviews.map((hostelReview) => (
        <HostelReviewItem key={hostelReview.id} hostelReview={hostelReview} />
      ))}
    </ul>
  );
};

export default HostelReviewsList;
