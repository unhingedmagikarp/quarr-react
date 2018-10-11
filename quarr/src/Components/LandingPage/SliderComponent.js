import React from "react";
import Carousel from "./ImageSlider";

const Slider = () => {
  return (
    <section
      className="clean-block slider dark"
      style={{ backgroundColor: "white" }}
    >
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">A few of what we offer</h2>
        </div>
        <Carousel />
      </div>
    </section>
  );
};

export default Slider;
