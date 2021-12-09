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

const App = () => {
  let state = useContext(AuthContextApi);
  // let IsAnonymousTemplate = () => {
  return (
    <section id="SpotifyMainBlock">
      <article>
        <Router>
          {/* {auth === true ? (
            <header>
              <Navbar />
            </header>
          ) : (
            ""
          )} */}
          <header>{state ? <Navbar /> : ""}</header>
          <ToastContainer />
          <main>
            {/* dynamic routing starts here */}

            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/login">
                <Login />
              </Route>

              <Route path="/signup">
                <Signup />
              </Route>

              {/* user routing satrt here */}
              <Route path="/UserHome">
                <UserHome />
              </Route>

              <Route path="/">
                <PageNotFound />
              </Route>
            </Switch>

            {/* dynamic routing ends here */}
          </main>
        </Router>
      </article>
    </section>
  );
  // };

  // let IsAuthenticatedTemplate = () => {
  //   return <UserHome />;
  // };
  // return (
  //   <Fragment>
  //     {state === null ? <IsAnonymousTemplate /> : <IsAuthenticatedTemplate />}
  //   </Fragment>
  // );
};

export default App;
