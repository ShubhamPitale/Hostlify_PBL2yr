import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import logo from "./../../images/logo_new.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faE, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [date, setDate] = useState();
  const emailRef = useRef();
  const messageRef = useRef();
  useEffect(() => {
    let year = new Date().getFullYear();
    setDate(year);
  }, []);
  const sendFeedback = async (feedbackData) => {
    const response = await fetch(
      "https://hostlify2-default-rtdb.firebaseio.com/feedback.json",
      {
        method: "POST",
        body: JSON.stringify(feedbackData),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    if (!response.ok) alert("Something went wrong!");
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const feedback = {
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    sendFeedback(feedback);
    emailRef.current.value = "";
    messageRef.current.value = "";
  };
  return (
    //   Main footer
    <div className={classes.footer}>
      {/*
     Footer container  
     */}
      <div className={classes.footerContainer}>
        {/* 
          Contact Form
          */}
        <div className={classes.contact}>
          <div className={classes.contact__text}>
            <h3>Contact Us</h3>
            <p>Send us a message</p>
          </div>
          <form className={classes.contact__form} onSubmit={submitHandler}>
            <input
              type="email"
              placeholder="Email"
              ref={emailRef}
              required
            ></input>
            <textarea
              placeholder="Message"
              rows="5"
              cols="25"
              ref={messageRef}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        {/* 
        Site Map
        */}
        <div className={classes.sitemap}>
          <div className={classes.sitemap__text}>
            <h3>Site Map</h3>
            <p>All our pages</p>
          </div>
          <ul className={classes.sitemap__list}>
            <li>
              <Link to="/home" className={classes.list__item}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/hostelStudent" className={classes.list__item}>
                Student - Hostels
              </Link>
            </li>
            <li>
              <Link to="/foodStudent" className={classes.list__item}>
                Student - Food Services
              </Link>
            </li>
            <li>
              <Link to="/hostelHost" className={classes.list__item}>
                Host -Hostels
              </Link>
            </li>
            <li>
              <Link to="/foodHost" className={classes.list__item}>
                Host - Food Services
              </Link>
            </li>
            <li>
              <Link to="/profile" className={classes.list__item}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/ourteam" className={classes.list__item}>
                Our Team
              </Link>
            </li>
          </ul>
        </div>
        {/* 
        Details
        */}
        <div className={classes.details}>
          <div className={classes.logo}>
            <img src={logo}></img>
          </div>
          <div className={classes.container}>
            <div className={classes.phone}>
              <p>
                <FontAwesomeIcon
                  icon={faPhone}
                  className={classes.icon}
                ></FontAwesomeIcon>
                9999999999
              </p>
            </div>
            <div className={classes.email}>
              <p>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={classes.icon}
                ></FontAwesomeIcon>
                email@email.com
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 
      Copyright container
      */}
      <div className={classes.copyright}>
        <p>
          Copyright &copy; <span>{`${date}`}</span> All Rights Reserved Hostlify
        </p>
      </div>
    </div>
  );
};
export default Footer;
