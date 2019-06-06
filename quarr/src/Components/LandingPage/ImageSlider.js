import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import axios from "axios";
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

class Carousel extends React.Component {
  state = {
    images: []
  };

  componentDidMount() {
    this.fetchPaintings();
  }

  convertImages = image => {
    console.log(image);
    this.setState({
      images: [
        ...this.state.images,
        {
          src: image.picture,
          altText: image.description,
          caption: image.description,
          header: image.name
        }
      ]
    });
  };

  fetchPaintings = () => {
    axios
      .get("http://localhost:5000/api/artworks-slider")
      .then(res => {
        return res.data.map(image => this.convertImages(image));
        // this.setState({ images: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.images ? (
          <UncontrolledCarousel items={this.state.images} />
        ) : (
          <UncontrolledCarousel items={items} />
        )}
      </div>
    );
  }
}

export default Carousel;
