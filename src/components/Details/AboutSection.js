import React from "react";

import classes from "./AboutSection.module.css";

const AboutSection = (props) => {
  return (
    <section className={classes["about-section"]}>
      <h2 className={classes.heading}>About</h2>
      <div className={classes.info}>
        <div className={classes.description}>
          <div className={classes["description-text"]}>
            <p>{props.hostel.about.value}</p>
          </div>
        </div>
        <div className={classes.lists}>
          <div className={classes.amenities}>
            <h3>Property Amenities</h3>
            <ul className={classes.list}>
              <li className={classes["list-item"]}>{props.hostel.propAmen1}</li>
              <li className={classes["list-item"]}>{props.hostel.propAmen2}</li>
              <li className={classes["list-item"]}>{props.hostel.propAmen3}</li>
              <li className={classes["list-item"]}>{props.hostel.propAmen4}</li>
            </ul>
          </div>
          <div className={classes.features}>
            <h3>Room Features</h3>
            <ul className={classes.list}>
              <li className={classes["list-item"]}>{props.hostel.roomFt1}</li>
              <li className={classes["list-item"]}>{props.hostel.roomFt2}</li>
              <li className={classes["list-item"]}>
                {props.hostel.roomFt3Ref}
              </li>
              <li className={classes["list-item"]}>
                {props.hostel.roomFt4Ref}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
