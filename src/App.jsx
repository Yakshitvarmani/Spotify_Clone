import React, { useContext } from "react";
import { AuthContextApi } from "./Apis/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./Component/AuthComponent/Login";
import SignUp from "./Component/AuthComponent/SignUp";
import NavBar from "./Pages/HeaderComponent/NavBar";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
// import { Fragment } from "react/cjs/react.production.min";
import UserHome from "./UserComponents/UserHome";

const App = () => {
  let USER = useContext(AuthContextApi);
  return (
    <section id="spotifyMainBlock">
      <article>
        <Router>
          <header>{!USER ? <NavBar /> : ""}</header>
          <ToastContainer />
          <main>
            {/* Dynamic Starts Here */}
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/signup" exact>
                <SignUp />
              </Route>
              <Route path="/userHome">
                <UserHome />
              </Route>

              <Route path="/login" exact>
                <Login />
              </Route>

              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
            {/* Dynamic Ends Here */}
          </main>
        </Router>
      </article>
    </section>
  );
};

export default App;
