import React from "react";
import LandingPicture from "./LandingPicture";
import AboutUs from "./AboutUs";
import Slider from "./SliderComponent";
import MetaTags from "react-meta-tags";
import MetaImage from "../../Assets/img/ls.jpg";

const LandingPage = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Home - Quarr Gallery</title>
        <meta
          name="description"
          content="QUARR Gallery shows work by a number of artists and photographers based in and around Swanage in Dorset."
        />
        <meta property="og:title" content="Quarr Gallery in Swanage, Dorset" />
        <meta property="og:image" content={MetaImage} />
        <meta property="og:site_name" content="Quarr Gallery" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.quarrgallery.com/" />
      </MetaTags>
      <LandingPicture />
      <AboutUs />
      <Slider />
    </React.Fragment>
  );
};

export default LandingPage;
