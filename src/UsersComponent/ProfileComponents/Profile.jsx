import React, { useContext } from "react";
import "./profile.css";
import { AuthContextApi } from "./../../Apis/AuthContext";
const Profile = () => {
  let { displayName, photoURL } = useContext(AuthContextApi);
  return (
    <section id="profileBlock">
      <article>
        <header>
          <figure>
            <span className="_editIcon">
              <i className="fa fa-pencil" aria-hidden="true" />
              choose photo
            </span>
            <img src={photoURL} alt={displayName} />
          </figure>
          <aside>
            <h5>Profile</h5>
            <h1>{displayName}</h1>
          </aside>
        </header>
        <main></main>
        <footer></footer>
      </article>
    </section>
  );
};

export default Profile;
