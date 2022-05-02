import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../images/logo_new.png";

import classes from "./Profile.module.css";

function UpdateUserHeader() {
  return (
    <>
      <div className={classes["btn-div"]}>
        <div>
          <img src={logo} style={{ height: "100px" }} />
        </div>
      </div>
      <h1 className={classes["heading-addr"]}>Add new Address</h1>
    </>
  );
}
export default UpdateUserHeader;
