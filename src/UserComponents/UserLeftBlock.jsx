import React from "react";
import Logo from "../Pages/HeaderComponent/Logo";

const UserLeftBlock = () => {
  return (
    <section className="userleftBlock">
      <article>
        <Logo />
        <div className="leftMenu">
          <ul>
            <li>
              <a href="">
                <i class="fas fa-home"></i>Home
              </a>
            </li>
            <li>
              <a href="">
                <i class="fas fa-search"></i>Search
              </a>
            </li>
            <li>
              <a href="">
                <i class="fas fa-book"></i>Your Library
              </a>
            </li>
            <li id="create">
              <a href="">
                <i class="far fa-plus-square"></i>Create Playlist
              </a>
            </li>
            <li>
              <a href="" className="likess">
                <i class="far fa-heart"></i>Liked Songs
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h5 id="install">
            <i class="fas fa-arrow-circle-down"></i>
            <a href="">Install App</a>
          </h5>
        </div>
      </article>
    </section>
  );
};

export default UserLeftBlock;
