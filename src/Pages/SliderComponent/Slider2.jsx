import React from "react";

const Slider2 = () => {
  return (
    <section id="slider-block2">
      <article>
        <div className="sliderLeft2">
          <h4>#SPOTIFYWRAPPED</h4>
          <h1>
            2021 Wrapped is
            <br /> ready.
          </h1>
          <p className="download">
            But it’s only available in the Spotify app.
            <br /> Download it now to discover more.
          </p>
          {/* <button>GET 3 MONTHS FREE</button> */}
          <figure className="figures">
            <img
              src="	https://www-growth.scdn.co/static/badges/svgs/apple/badge-en.svg"
              alt="appleimg"
            />
            <img
              src="https://www-growth.scdn.co/static/badges/svgs/google/badge-en.svg"
              alt="googleimg"
              style={{ width: "155px", height: "60px" }}
            />
          </figure>
          <p className="listen">
            <a href="">Listen to 2021 highlights here.</a>
          </p>
        </div>
        <div className="sliderRight2">
          <figure>{/* <img src="slider1.png" alt="image" /> */}</figure>
        </div>
      </article>
    </section>
  );
};

export default Slider2;
