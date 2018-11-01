import React from "react";
import backgroundPic from "../../Assets/img/tech/image4.jpeg";
import "./LandingPage.css";

const LandingPicture = () => {
  const scrollButton = () => {
    window.scrollBy({ top: 600, left: 0, behavior: "smooth" });
  };

  return (
    <section
      className="clean-block clean-hero smallView"
      style={{
        backgroundImage: `url(${backgroundPic})`,
        backgroundRepeat: "no-repeat",
        color: "rgba(0, 0, 0, 0.35)"
      }}
    >
      <div className="text">
        <h2>Paintings, photographs and other artwork in Swanage, Dorset</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
          urna, dignissim nec auctor in, mattis vitae leo.
        </p>
        <button className="btn btn-outline-light btn-lg" onClick={scrollButton}>
          Learn More
        </button>
      </div>
    </section>
  );
};

export default LandingPicture;
