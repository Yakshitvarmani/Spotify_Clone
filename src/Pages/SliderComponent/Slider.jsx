import React from "react";
import "./SliderComp.css";
const Slider = () => {
  return (
    <section id="slider-block">
      <article>
        <div className="sliderLeft">
          <h4>SPOTIFY PREMIUM</h4>
          <h1>Get 3 months of Premium for free</h1>
          <p className="enjoy">
            Enjoy ad-free music listening, offline playback, and more.
            <br /> Cancel anytime.
          </p>
          <button>GET 3 MONTHS FREE</button>
          <p className="copyWrite">
            Individual plan only. $9.99/month after. Terms and conditions apply.
            Open only to users who haven't already tried Premium. Offer ends 31
            December 2021.
          </p>
        </div>
        <div className="sliderRight">
          <figure>
            <img src="slider1.png" alt="image"/>
          </figure>
        </div>
      </article>
    </section>
  );
};

export default Slider;
