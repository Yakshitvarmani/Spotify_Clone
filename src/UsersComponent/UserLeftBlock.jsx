import React from "react";
import Logo from "../Pages/HeaderComponent/Logo";
import { Link } from "react-router-dom";

const UserLeftBlock = () => {
  return (
    <div className="userLeftBlock">
      {/* <Logo /> */}
      <div className="userli">
        <ul>
          <li>
            <Link to="/userHome/music-home">
              <i class="fal fa-home-alt"></i>Home
            </Link>
          </li>
          <li>
            <a href="">
              <i class="fal fa-search"></i>Search
            </a>
          </li>
          <li>
            <a href="">
              <i class="fal fa-books"></i>Your Library
            </a>
          </li>
        </ul>
      </div>
      <div className="userli2">
        <ul>
          <li>
            <Link to="/userHome/create-play-list">
              <i class="fal fa-plus-square"></i>Create Playlist
            </Link>
          </li>
          <li>
            <a href="">
              <i class="fas fa-heart-square"></i>Liked Songs
            </a>
          </li>
        </ul>
        <p></p>
      </div>
      <div className="myplay">
        <p>My Playlist #1</p>
      </div>
      <div className="install">
        <p>
          <i class="fal fa-arrow-circle-down"></i>Install App
        </p>
      </div>
    </div>
  );
};

export default UserLeftBlock;
