import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { addUser } from "../../lib/api";
import classes from "./Profile.module.css";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

function ProfileUpdateForm() {
  const { sendRequest, status } = useHttp(addUser);
  const authCtx = useContext(AuthContext);
  console.log(authCtx.userId);

  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/profile");
    }
  }, [status]);

  const addUserHandler = (userData) => {
    sendRequest(userData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addUserHandler({
      userId: authCtx.userId,
      name: inputNameRef.current.value,
      phone: inputPhoneRef.current.value,
      address: inputAddressRef.current.value,
      cirt: inputCityRef.current.value,
      state: inputStateRef.current.value,
    });
  };

  const inputNameRef = useRef();
  const inputPhoneRef = useRef();
  const inputCityRef = useRef();
  const inputStateRef = useRef();
  const inputAddressRef = useRef();

  return (
    <form className={classes["frm-details"]} onSubmit={handleSubmit}>
      <div className={classes["label-wrapper"]}>
        <label className={classes["input-label"]}>Full name</label>
        <input
          required
          className={classes["input-box"]}
          type="text"
          name="username"
          ref={inputNameRef}
        />
      </div>
      <br />
      <br />
      <div className={classes["label-wrapper"]}>
        <label className={classes["input-label"]}>Phone</label>
        <input
          required
          className={classes["input-box"]}
          type="text"
          name="contactno"
          ref={inputPhoneRef}
        />
      </div>
      <br />
      <br />
      <div className={classes["label-wrapper"]}>
        <label className={classes["input-label"]}>Address</label>
        <input
          required
          className={classes["input-box"]}
          type="text"
          name="useraddr"
          ref={inputAddressRef}
        />
      </div>
      <br />
      <br />
      <div className={classes["label-wrapper"]}>
        <label className={classes["input-label"]}>State</label>
        <input
          required
          className={classes["input-box"]}
          type="text"
          name="userstate"
          ref={inputStateRef}
        />
      </div>
      <br />
      <br />
      <div className={classes["label-wrapper"]}>
        <label className={classes["input-label"]}>City</label>
        <input
          required
          className={classes["input-box"]}
          type="text"
          name="usercity"
          ref={inputCityRef}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className={classes["save-btn-div"]}>
        <button className={classes["save-btn"]}>Save</button>
      </div>
    </form>
  );
}

export default ProfileUpdateForm;
