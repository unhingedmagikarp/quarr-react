import React from "react";
import "../SuccessPage/SuccessPage.css";

const SuccessPage = () => {
  return (
    <section className="clean-block about-us">
      <div className="container">
        <div className="block-heading">
          <p className="header-text">404</p>
          <p>The page not found</p>
          <hr style={{ marginTop: "40px" }} />

          <a href="/">
            <button
              className="btn btn-lg btn-outline-primary"
              style={{ marginTop: "40px", marginBottom: "40px" }}
            >
              Continue to homepage
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
