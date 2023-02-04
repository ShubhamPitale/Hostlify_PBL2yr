import { Fragment } from 'react';
import classes from './ForgotPassword.module.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const ForgotPassword = () => {
  const emailInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const emailInputValue = emailInput.current.value;

    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCQyBHMDKHugAxAiBY63up6mW8_x1QO9C4';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: emailInputValue,
        requestType: 'PASSWORD_RESET',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        alert('Password reset link sent successfully to email id');
      })
      .catch((err) => {
        let errMsg = 'Password Reset Failed!';
        alert(errMsg);
      });
  };

  return (
    <div className={classes.main}>
      <form onSubmit={submitHandler} className={classes.form}>
        <h2>Reset Password</h2>

        <div className={classes.formEmailInput}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            ref={emailInput}
            autoComplete="off"
          ></input>
        </div>

        <div className={classes.formActions}>
          <button>Reset</button>
          <Link to="/authenticate" className={classes.loginLink}>
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
};
export default ForgotPassword;
