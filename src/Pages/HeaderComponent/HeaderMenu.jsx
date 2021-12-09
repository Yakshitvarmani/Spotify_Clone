import React, { Fragment } from "react";
import { Link, link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to="">Premium</Link>
          </li>
          <li>
            <Link to="">Support</Link>
          </li>
          <li>
            <Link to="">Download</Link>
          </li>
          <li className="bar">
            <a href=""></a>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default HeaderMenu;
