import classes from "./Profile.module.css";

import { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import useHttp from "../../hooks/use-http";
import { getUserData } from "../../lib/api";
import LoadingSpinner from "../../UI/LoadingSpinner";
import { useParams } from "react-router-dom";

function ProfileForm() {
  const [inputs, setInputs] = useState({});

  const authCtx = useContext(AuthContext);
  const params = useParams();
  const {userId} = params;
  const { sendRequest, status, data: userData, error } = useHttp(getUserData);

  useEffect(() => {
    sendRequest(authCtx.userId);
  }, [sendRequest, authCtx.userId]);

  if (status === "pending") {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!userData) {
    return <p>No Data Found</p>;
  }

  const user = userData[userId];

  const user1 = user[Object.keys(user)[0]];

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };
  return (
    // <div></div>
    <div className={classes["user-details"]}>
      <div className={classes["info-para"]}>
        <h2>Full Name</h2>
        <p>{user1.name}</p>
      </div>
      <div className={classes["info-para"]}>
        <h2>Address</h2>
        <p>{user1.address}</p>
      </div>
      <div className={classes["info-para"]}>
        <h2>Contact</h2>
        <p>{user1.phone}</p>
      </div>
    </div>
  );
}

export default ProfileForm;
