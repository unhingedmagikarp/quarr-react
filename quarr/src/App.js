import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./Assets/bootstrap/css/bootstrap.min.css";

import AppNavbar from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage/LandingPage";
import ArtistPage from "./Components/Artists/ArtistPage";
import BlogPage from "./Components/Blog/BlogPage";
import Contact from "./Components/ContactPage/Contact";
import SuccessPage from "./Components/SuccessPage/SuccessPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AppNavbar />

          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/artists" component={ArtistPage} exact />
            <Route path="/blog" component={BlogPage} exact />
            <Route path="/contact-us" component={Contact} exact />
            <Route path="/success" component={SuccessPage} />
          </Switch>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
