import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import UserLeftBlock from "./UserLeftBlock";
import UserRightBlock from "./UserRightBlock";
import "./userBlock.css";
const UserHome = () => {
  let { path, url } = useRouteMatch();
  return (
    <section id="userBlock">
      <article>
        <UserLeftBlock />

        <Switch>
          {/* <Route exact path={path}>
            <h3>Please select a topic</h3>
          </Route> */}
          <Route path={`${path}/:id`}>
            <UserRightBlock />
          </Route>
        </Switch>
      </article>
    </section>
  );
};

export default UserHome;
