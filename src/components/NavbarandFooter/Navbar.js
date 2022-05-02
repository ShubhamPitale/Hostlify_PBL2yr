import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import logo from "./../../images/logo_new.png";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AuthContext from "../../store/auth-context";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [displayOptStu, SetDisplayOptStu] = useState(false);
  const [displayOptHo, SetDisplayOptHo] = useState(false);
  const [displayDropDown, setDisplayDropDown] = useState(false);
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/authenticate");
  };

  const displayOptionStuHanlder = () => {
    SetDisplayOptHo(false);
    SetDisplayOptStu((prevState) => {
      SetDisplayOptStu(!prevState);
    });
  };

  const displayOptionHoHanlder = () => {
    SetDisplayOptStu(false);
    SetDisplayOptHo((prevState) => {
      SetDisplayOptHo(!prevState);
    });
  };

  const displayDropDownHandler = () => {
    setDisplayDropDown((prevState) => {
      setDisplayDropDown(!prevState);
    });
  };

  return (
    <nav>
      {/* Our logo */}
      <div
        className={classes.logo}
        style={displayDropDown ? { display: "none" } : { display: "block" }}
      >
        <img src={logo}></img>
      </div>
      {/* All the items in the navbar */}

      <ul
        className={`${displayDropDown ? classes.extra : classes.items}`}
        // style={displayDropDown ? { display: "none" } : { display: "flex" }}
      >
        {/* Home */}

        <li className={classes.item}>
          <Link className={classes.link} to="/home">
            Home
          </Link>
        </li>
        {/* Student */}
        <li className={`${classes.item} ${classes.special}`}>
          {/* Option container to choose food services or hostel services */}
          <div className={classes.options_container}>
            <a className={`${classes.link} ${classes.noclick}`}>Student</a>
            <button onClick={displayOptionStuHanlder} className={classes.down}>
              <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon>
            </button>
          </div>
          {displayOptStu && (
            <ul className={` ${classes.student}`}>
              <li className={classes.option}>
                <Link className={classes.optlink} to="/hostelStudent">
                  Hostel Services
                </Link>
              </li>
              <li className={classes.option}>
                <Link className={classes.optlink} to="/foodStudent">
                  Food Services
                </Link>
              </li>
            </ul>
          )}
        </li>
        {/* Host */}
        <li className={`${classes.item} ${classes.special}`}>
          {/* Option container to choose food services or hostel services */}
          <div className={classes.options_container}>
            <a className={`${classes.link} ${classes.noclick}`}>Host</a>
            <button onClick={displayOptionHoHanlder} className={classes.down}>
              <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon>
            </button>
          </div>
          {displayOptHo && (
            <ul className={` ${classes.host}`}>
              <li className={classes.option}>
                <Link className={classes.optlink} to="/hostelHost">
                  Hostel Services
                </Link>
              </li>
              <li className={classes.option}>
                <Link className={classes.optlink} to="/foodHost">
                  Food Services
                </Link>
              </li>
            </ul>
          )}
        </li>
        {/* Logout */}
        <li className={classes.item}>
          <button onClick={logoutHandler} className={classes.logout}>
            Logout
          </button>
        </li>
        {/* Profile symbol to navigate to profile page */}
        <li className={classes.item}>
          <div className={classes.profile}>
            <Link to="/profile" className={classes.link}>
              <FontAwesomeIcon
                icon={faUserCircle}
                size="2x"
                className={classes.profilelogo}
              />
            </Link>
          </div>
        </li>
      </ul>
      <button
        onClick={displayDropDownHandler}
        className={classes.closeBtn}
        style={!displayDropDown ? { display: "none" } : { display: "flex" }}
      >
        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
      </button>
      <div className={classes.hamBtn}>
        <button
          onClick={displayDropDownHandler}
          style={displayDropDown ? { display: "none" } : { display: "block" }}
        >
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
