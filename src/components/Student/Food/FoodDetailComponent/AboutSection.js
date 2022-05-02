import classes from "./AboutSection.module.css";

const AboutSection = (props) => {
  return (
    <section className={classes["about-section"]}>
      <h2 className={classes.heading}>About</h2>
      <div className={classes.info}>
        <div className={classes.description}>
          <div className={classes["description-text"]}>
            <p>{props.tiffin.about.value}</p>
          </div>
        </div>
        <div className={classes.lists}>
          <div className={classes.amenities}>
            <h3>Service Features</h3>
            <ul className={classes.list}>
              <li className={classes["list-item"]}>{props.tiffin.propAmen1}</li>
              <li className={classes["list-item"]}>{props.tiffin.propAmen2}</li>
              <li className={classes["list-item"]}>{props.tiffin.propAmen3}</li>
              <li className={classes["list-item"]}>{props.tiffin.propAmen4}</li>
            </ul>
          </div>
          <div className={classes.features}>
            <h3>Food Features</h3>
            <ul className={classes.list}>
              <li className={classes["list-item"]}>{props.tiffin.roomFt1}</li>
              <li className={classes["list-item"]}>{props.tiffin.roomFt2}</li>
              <li className={classes["list-item"]}>{props.tiffin.roomFt3}</li>
              <li className={classes["list-item"]}>{props.tiffin.roomFt4}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
