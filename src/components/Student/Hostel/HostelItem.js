import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import { getAllHostelReviews } from "../../../lib/api";
import Card from "../../../UI/Card";
import classes from "./HostelItem.module.css";

const HostelItem = (props) => {
  const hostelId = props.hostel.id;

  const { sendRequest, data: loadedHostelReviews } =
    useHttp(getAllHostelReviews);

  useEffect(() => {
    sendRequest(hostelId);
  }, [sendRequest, hostelId]);

  let rating = 0;
  if (loadedHostelReviews && loadedHostelReviews.length > 0) {
    for (const review of loadedHostelReviews) {
      rating += review.rating;
    }
    rating /= loadedHostelReviews.length;
  }

  return (
    <Card>
      <div className={classes["tiffin-card"]}>
        <Link to={`/hostelStudent/${props.hostel.id}`}>
          <div>
            <img src={props.hostel.imageUrl} />
            {/* <FontAwesomeIcon className={classes.favourite} icon={faHeart} /> */}
          </div>
          <div className={classes.info}>
            <h2>{props.hostel.title}</h2>
            <div className={classes.reviews}>
              {loadedHostelReviews && loadedHostelReviews.length > 0 && (
                <div className={classes.rating}>
                  {rating.toFixed(1)} <FontAwesomeIcon icon={faStar} />
                </div>
              )}
              {!loadedHostelReviews ||
                (loadedHostelReviews.length === 0 && <p>No Reviews</p>)}
              {loadedHostelReviews && loadedHostelReviews.length > 0 && (
                <p>
                  ({loadedHostelReviews.length}{" "}
                  {loadedHostelReviews.length === 1 ? "review" : "reviews"})
                </p>
              )}
            </div>
            <div>
              <p>{props.hostel.addressLine}</p>
              <div className={classes.type}>
                <p>
                  <b>{props.hostel.places.value}</b>
                </p>
              </div>
            </div>
            <p className={classes.price}>
              RS. <b>{props.hostel.price}</b>/month
            </p>
          </div>
        </Link>
      </div>
    </Card>
  );
};

export default HostelItem;
