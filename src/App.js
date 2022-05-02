import { useContext } from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import "./App.css";

import ForgotPassword from "./components/Auth/ForgotPassword";
import Profile from "./components/Profile/Profile";
import FoodHost from "./components/Host/FoodHost";
import FoodStudent from "./components/Student/Food/FoodStudent";
import HostelHost from "./components/Host/HostelHost";
import HostelStudent from "./components/Student/Hostel/HostelStudent";
import FoodDetail from "./components/Student/Food/FoodDetail";
import HostelDetail from "./components/Student/Hostel/HostelDetail";
import OurTeam from "./components/OurTeam/OurTeam";
import Authenticate from "./pages/Authenticate";
import HomePage from "./pages/HomePage";
import Notfound from "./pages/Notfound";
import AuthContext from "./store/auth-context";
import UpdateProfile from "./components/Profile/UpdateProfile";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/authenticate"></Redirect>
        </Route>
        <Route path="/authenticate">
          {!authCtx.loggedIn && <Authenticate></Authenticate>}
        </Route>
        <Route path="/forgot">
          {!authCtx.loggedIn && <ForgotPassword></ForgotPassword>}
        </Route>
        <Route path="/home">
          {authCtx.loggedIn && <HomePage></HomePage>}
          {!authCtx.loggedIn && <Redirect to="/authenticate"></Redirect>}
        </Route>
        {/* Hostel */}
        <Route path="/hostelStudent" exact>
          {authCtx.loggedIn && <HostelStudent />}
        </Route>
        <Route path="/hostelStudent/:hostelId">
          {authCtx.loggedIn && <HostelDetail />}
        </Route>
        <Route path="/hostelHost">{authCtx.loggedIn && <HostelHost />}</Route>
        {/* Food */}
        <Route path="/foodStudent" exact>
          {authCtx.loggedIn && <FoodStudent />}
        </Route>
        <Route path="/foodStudent/:foodId">
          {authCtx.loggedIn && <FoodDetail />}
        </Route>
        <Route path="/foodHost">{authCtx.loggedIn && <FoodHost />}</Route>

        <Route path="/ourteam">{authCtx.loggedIn && <OurTeam />}</Route>
        <Route path="/profile" exact>
          {authCtx.loggedIn && <Profile />}
        </Route>
        <Route path="*">
          <Notfound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
