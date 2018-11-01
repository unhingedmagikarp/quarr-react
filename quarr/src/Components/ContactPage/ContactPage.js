import React from "react";
import Contact from "./Contact";
import MetaTags from "react-meta-tags";
import MetaImage from "../../Assets/img/ls.jpg";

const ContactPage = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Contact us - Quarr Gallery</title>
        <meta
          name="description"
          content="QUARR Gallery shows work by a number of artists and photographers based in and around Swanage in Dorset."
        />
        <meta property="og:title" content="Quarr Gallery in Swanage, Dorset" />
        <meta property="og:image" content={MetaImage} />
        <meta property="og:site_name" content="Quarr Gallery" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="http://www.quarrgallery.com/contact-us"
        />
      </MetaTags>
      <Contact />
    </React.Fragment>
  );
};

export default ContactPage;
