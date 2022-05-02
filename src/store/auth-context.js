import { createContext, useCallback, useEffect, useState } from "react";

let logTimer;

const AuthContext = createContext({
  loggedIn: "",
  tokenId: "",
  userId: "",
  email: "",
  login: (token) => {},
  logout: () => {},
  getUserId:()=>{},
  getEmail:()=>{}
});
const calculate = (expirationTime) => {
  const currentTime = new Date().getTime();
  const futureTime = new Date(expirationTime);
  const remainingTime = futureTime - currentTime;
  return remainingTime;
};

const retrieveData = () => {
  const expirationTime = localStorage.getItem("expirationTime");
  const tokenId = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const email=localStorage.getItem("email");
  const remainingTime = calculate(expirationTime);
  if (remainingTime < 60000) {
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    return null;
  }
  return {
    tokenId,
    userId,
    email,
    duration: remainingTime,
  };
};

export const AuthProvider = (props) => {
  const tokenData = retrieveData();
  let initialToken = null;
  if (tokenData) {
    initialToken = tokenData.tokenId;
  }
  let initialEmail=null;
  if(tokenData){
    initialEmail=tokenData.email;
  }
  let initialUserId = null;
  if (tokenData) {
    initialUserId = tokenData.userId;
  }
  const [token, setToken] = useState(initialToken);
  const [userId, setUserId] = useState(initialUserId);
  const [emailId,setEmailId]=useState(initialEmail);
  const userLoggedIn = !!token;

  const getEmailHandler = (email) => {
    setEmailId(email);
    localStorage.setItem("email",email);
  };

  const getUserIdHandler = (id) => {
    setUserId(id);
    localStorage.setItem("userId", userId);
  };

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("email");
    if (logTimer) {
      clearTimeout(logTimer);
    }
  });

  const loginHandler = (token, expirationTime,email) => {
    setToken(token);
    setEmailId(email);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    localStorage.setItem("email",email);
    const remainingTime = calculate(expirationTime);
    logTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const context = {
    loggedIn: userLoggedIn,
    tokenId: token,
    userId: userId,
    email:emailId,
    login: loginHandler,
    logout: logoutHandler,
    getUserId: getUserIdHandler,
    getEmail:getEmailHandler,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
