import React, { Component } from "react";
import "./Assets/bootstrap/css/bootstrap.min.css";
import AppNavbar from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import LandingPicture from "./Components/LandingPage/LandingPicture";
import AboutUs from "./Components/LandingPage/AboutUs";
import Slider from "./Components/LandingPage/SliderComponent";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppNavbar />
        <LandingPicture />
        <AboutUs />
        <Slider />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
