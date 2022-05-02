import AuthForm from "./AuthForm";
import classes from "./AuthContainer.module.css";
import logo from "./../../images/logo_new.png";
const AuthConatiner = () => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={logo}></img>
        </div>
        <div className={classes.design}>
          <div className={classes.slogan}>
            <h3>
              Hostelite ?<br></br>We've got your back !
            </h3>
          </div>
        </div>
        <AuthForm></AuthForm>
      </div>
    </div>
  );
};
export default AuthConatiner;
