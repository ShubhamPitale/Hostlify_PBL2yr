import { Link } from "react-router-dom";

import Card from "../../../UI/Card";

import classes from "./TiffinItem.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import useHttp from "../../../hooks/use-http";
import { getAllTiffinReviews } from "../../../lib/api";
import { useEffect } from "react";

const TiffinItem = (props) => {
  const foodId = props.tiffin.id;

  let veg = props.tiffin.veg.value;
  console.log(veg);
  const style = {};
  if (veg === "Veg") {
    style.backgroundColor = "green";
  } else if (veg === "Non-Veg") {
    style.backgroundColor = "red";
  } else {
    style.backgroundColor = "rgb(247, 157, 101)";
  }

  const { sendRequest, data: loadedTiffinReviews } =
    useHttp(getAllTiffinReviews);

  useEffect(() => {
    sendRequest(foodId);
  }, [sendRequest, foodId]);

  let rating = 0;
  if (loadedTiffinReviews && loadedTiffinReviews.length > 0) {
    for (const review of loadedTiffinReviews) {
      rating += review.rating;
    }
    rating /= loadedTiffinReviews.length;
  }

  return (
    <Card>
      <div className={classes["tiffin-card"]}>
        <Link to={`/foodStudent/${props.tiffin.id}`}>
          <div>
            <img src={props.tiffin.imageUrl} />
            {/* <FontAwesomeIcon className={classes.favourite} icon={faHeart} /> */}
          </div>
          <div className={classes.info}>
            <h2>{props.tiffin.title}</h2>
            <div className={classes.reviews}>
              {loadedTiffinReviews && loadedTiffinReviews.length > 0 && (
                <div className={classes.rating}>
                  {rating.toFixed(1)} <FontAwesomeIcon icon={faStar} />
                </div>
              )}
              {!loadedTiffinReviews ||
                (loadedTiffinReviews.length === 0 && <p>No Reviews</p>)}
              {loadedTiffinReviews && loadedTiffinReviews.length > 0 && (
                <p>({loadedTiffinReviews.length} reviews)</p>
              )}
            </div>
            <div>
              <p>{props.tiffin.addressLine}</p>
              <div className="flex">
                <div className={classes.cuisine}>
                  <p>
                    <b>{props.tiffin.places.value}</b>
                  </p>
                </div>
                <div className={classes.veg} style={style}>
                  <p>
                    <b>{props.tiffin.veg.value}</b>
                  </p>
                </div>
              </div>
            </div>
            <p className={classes.price}>
              RS. <b>{props.tiffin.price}</b>/month
            </p>
          </div>
        </Link>
      </div>
    </Card>
  );
};
export default TiffinItem;
