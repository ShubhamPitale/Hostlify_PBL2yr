import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
import { Fragment } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const emailInput = useRef();
  const passwordInput = useRef();
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const changeAuthStatusHandler = () => {
    setIsLogin((prevState) => {
      setIsLogin(!prevState);
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const emailInputValue = emailInput.current.value;
    const passwordInputValue = passwordInput.current.value;

    let url = isLogin
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCQyBHMDKHugAxAiBY63up6mW8_x1QO9C4"
      : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCQyBHMDKHugAxAiBY63up6mW8_x1QO9C4";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailInputValue,
        password: passwordInputValue,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
      
        const expirationTime = new Date(
          new Date().getTime() + data.expiresIn * 1000
        );
        authCtx.getUserId(data.localId);
        authCtx.getEmail(data.email);

        authCtx.login(data.idToken, expirationTime.toISOString(),data.email);
        history.replace("/home");
      })
      .catch((err) => {
        let errMsg = "Authentication failed!";
        alert(errMsg);
      });
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.head_text}>
          <h2>{isLogin ? "Log In" : "Sign Up"}</h2>
          <span>
            {isLogin ? "Don't have an account ?" : "Already have an account ?"}
          </span>
          <a onClick={changeAuthStatusHandler}>
            {isLogin ? "Sign up" : "Log in"}
          </a>
        </div>
        <div className={classes.formEmailInput}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            ref={emailInput}
            autoComplete="off"
          ></input>
        </div>
        <div className={classes.formPassInput}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordInput}></input>
        </div>
        <div className={classes.formActions}>
          <Link className={classes.forgotLink} to="/forgot">
            Forgot Password ?
          </Link>
          <button>{isLogin ? "Log In" : "Register"}</button>
        </div>
      </form>
    </Fragment>
  );
};
export default AuthForm;
