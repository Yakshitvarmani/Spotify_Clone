import React, { useContext, Fragment } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import { AuthContextApi } from "./../../Apis/AuthContext";
import Spinner from "../../Pages/Spinner/Spinner";

const Profile = () => {
  let USER = useContext(AuthContextApi);
  // let { displayName, photoURL } = useContext(AuthContextApi);
  return (
    <section id="profileBlock">
      <article>
        <header>
          {USER === null ? (
            <Spinner />
          ) : (
            <Fragment>
              <figure>
                <Link to="/userhome/upload_photo">
                  <span className="_editIcon">
                    <i className="fa fa-pencil" aria-hidden="true" />
                    choose photo
                  </span>
                  <img src={USER.photoURL} alt={USER.displayName} />
                </Link>
              </figure>
              <aside>
                <h5>Profile</h5>
                <h1>{USER.displayName}</h1>
              </aside>
            </Fragment>
          )}
        </header>
        <main></main>
        <footer></footer>
      </article>
    </section>
  );
};

export default Profile;
