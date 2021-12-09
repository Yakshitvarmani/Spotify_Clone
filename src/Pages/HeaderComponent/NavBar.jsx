import React from "react";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import "./HeaderComponent.css";
const Navbar = () => {
  return (
    <header id="spotify-headerBlock">
      <nav>
        <div className="spotifyLogo">
          <Logo />
        </div>
        <div className="spotifyMenu">
          <HeaderMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
