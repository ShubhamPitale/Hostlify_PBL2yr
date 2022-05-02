import classes from "./Profile.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faRightFromBracket,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../images/logo_new.png";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

function UserProfile() {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  let email=authCtx.email;
  let name="";
  for(let i=0;i<email.length;i++){
    if(email[i]=='@') break;
    name+=email[i];
    
  }

  return (
    <div>
      <div className={classes["user-div"]}>
        <div className={classes["img-div"]}>
          <FontAwesomeIcon
            icon={faUserCircle}
            style={{ height: "90px", color: "" }}
          />
        </div>
        <div className={classes["uname-div"]}>
          <h3 className={classes.username}>{name}</h3>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
