import React, { Component } from "react";
import "./Assets/bootstrap/css/bootstrap.min.css";
import AppNavbar from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppNavbar />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
