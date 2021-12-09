import React from "react";

const Slider2 = () => {
  return (
    <section id="stnblk">
      <article>
        <div className="leftttt">
          <h4>#SPOTIFYWRAPPED</h4>
          <h1>2021 Wrapped is ready.</h1>
          <p className="available">
            But it’s only available in the Spotify app. Download it now to
            discover more.
          </p>

          <figure className="store">
            <img
              src="./applestore.svg"
              alt="App Store"
              className="storeapple"
            ></img>
            <img
              src="./appstore.svg"
              alt="Google Play"
              className="storeapple"
            ></img>
          </figure>

          <p>
            <a href="#">Listen to 2021 highlights here.</a>
          </p>
        </div>
        <div className="Slider2Right"></div>
      </article>
    </section>
  );
};
export default Slider2;
