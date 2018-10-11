import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import img1 from "../../Assets/img/scenery/image1.jpg";
import img2 from "../../Assets/img/scenery/image4.jpg";
import img3 from "../../Assets/img/scenery/image6.jpg";

const items = [
  {
    src: img1,
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header"
  },
  {
    src: img2,
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header"
  },
  {
    src: img3,
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header"
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;
