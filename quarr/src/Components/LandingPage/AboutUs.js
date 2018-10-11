import React from "react";
import ThumbNail from "../../Assets/img/scenery/image5.jpg";

const AboutUs = () => {
  return (
    <section className="clean-block clean-info dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">About us</h2>
          <p style={{ maxWidth: "600px" }}>
            QUARR Gallery shows work by a number of artists and photographers
            based in and around Swanage in Dorset.{" "}
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img className="img-thumbnail" src={ThumbNail} />
          </div>
          <div className="col-md-6">
            <h3>Lorem ipsum dolor sit amet</h3>
            <div className="getting-started-info">
              <p>
                We are situated on the World Heritage Jurrasic Coast and this is
                the inspiration for many of the paintings and photographs we
                show.
              </p>
            </div>
            <a href="/contact-us">
              <button className="btn btn-outline-primary btn-lg">
                Contact us
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
