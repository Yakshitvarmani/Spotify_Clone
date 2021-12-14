import React, { Fragment, useContext } from "react";
import Navbar from "./Pages/HeaderComponent/Navbar";
// import Slider from "./Pages/SliderComponent/Slider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/AuthComponent/Login";
import Signup from "./Components/AuthComponent/Signup";
import PageNotFound from "./Pages/PageNotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContextApi } from "./Apis/AuthContext";
import UserHome from "./UsersComponent/UserHome";
import Spinner from "./Pages/Spinner/Spinner";
import ProtectedRoute from "./Helpers/ProtectedRoute";
import PublicRoute from "./Helpers/PublicRoute";
import PasswordReset from "./Components/AuthComponent/PasswordReset";
import PhoneAuth from "./Components/AuthComponent/PhoneAuth";
import CreatePlayList from "./Components/AudioComponent/CreatePlayList";

const App = () => {
  let state = useContext(AuthContextApi);
  // let IsAnonymousTemplate = () => {
  return (
    <section id="SpotifyMainBlock">
      <article>
        <Router>
          <header>
            <Navbar />
          </header>
          <ToastContainer />
          <main>
            {/* dynamic routing starts here */}

            <Switch>
              <PublicRoute path="/" exact>
                <Home />
              </PublicRoute>

              <PublicRoute path="/login">
                <Login />
              </PublicRoute>

              <PublicRoute path="/signup">
                <Signup />
              </PublicRoute>

              <PublicRoute path="/password-reset">
                <PasswordReset />
              </PublicRoute>

              <PublicRoute path="/phone-auth">
                <PhoneAuth />
              </PublicRoute>

              <ProtectedRoute path="/UserHome">
                <UserHome />
              </ProtectedRoute>

              {/* <ProtectedRoute path="/create-play-list">
                <CreatePlayList />
              </ProtectedRoute> */}

              {/* user routing starts here */}
              {/* {state === null ? (
                <Spinner />
              ) : (
                <ProtectedRoute path="/UserHome">
                  <UserHome />
                </ProtectedRoute> 
              )} */}

              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>

            {/* dynamic routing ends here */}
          </main>
        </Router>
      </article>
    </section>
  );
};

export default App;
