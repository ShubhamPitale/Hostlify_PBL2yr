import classes from "./HeroSection.module.css";
import Button from "../../UI/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllHostelReviews } from "../../lib/api";
import { useEffect } from "react";

const HeroSection = (props) => {
  const params = useParams();
  const { hostelId } = params;

  const {
    sendRequest,
    status,
    data: loadedHostelReviews,
  } = useHttp(getAllHostelReviews);

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

  let fullStars = [];
  let emptyStars = [];

  for (var i = 1; i <= rating; i++) {
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

  console.log(props.hostel);

  return (
    <section className={classes["hero-section"]}>
      <div className={classes.image}>
        <img src={props.hostel.imageUrl} />
      </div>

      <div className={classes.info}>
        <h2>
          <b>{props.hostel.title}</b>
        </h2>
        <div className={classes["info-item"]}>
          <div className={classes.icon}>
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <p>
            {props.hostel.addressLine}, {props.hostel.city}
          </p>
        </div>
        <div className={classes["info-item"]}>
          <div className={classes.icon}>
            <FontAwesomeIcon icon={faIndianRupee} />
          </div>
          <p>
            <b>{props.hostel.price}/month</b>
          </p>
        </div>
        <div className={(classes["info-item"], classes.stars)}>{stars1}</div>
        <div className={classes["info-item"]}>
          <div className={classes.icon}>
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <p>{props.hostel.mobile}</p>
        </div>
        <div className={classes["info-item"]}>
          <div className={classes.icon}>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <p>{props.hostel.email}</p>
        </div>
        {/* <Button>
          <FontAwesomeIcon icon={faHeart} />
          <span className={classes["button-text"]}>Save to favourites</span>
        </Button> */}
      </div>
    </section>
  );
};

export default HeroSection;
