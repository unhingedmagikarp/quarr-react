import React, { Component } from "react";
import { Route, Switch, withRouter, BrowserRouter } from "react-router-dom";

import "./Assets/bootstrap/css/bootstrap.min.css";

import AppNavbar from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage/LandingPage";
import BlogPage from "./Components/Blog/BlogPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import SuccessPage from "./Components/SuccessPage/SuccessPage";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Privacy from "./Components/Privacy/Privacy";
import AdminLogin from "./Components/Admin/AdminLogin/Login";
import ArtistSite from "./Components/Artists/ArtistSite";
import SearchPage from "./Components/Search/SearchPage";
import SingleArtistSite from "./Components/SingleArtist/SingleArtistSite";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AppNavbar />
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/artists" component={ArtistSite} exact />
            <Route path="/artists/:slug" component={SingleArtistSite} />
            {/* <Route path="/artists/:slug" component={props => {
            const id = props.match.params.id
            const painting = this.state.paintings.find(painting => painting.id === id)
            if (this.state.paintings.length === 0) return <h1>Loading...</h1>
            if (this.state.paintings.length > 0 && painting === undefined) return <h1>Painting Not Found</h1>
            return <PaintingDetails painting={painting} {...props} /> */}
            <Route path="/blog" component={BlogPage} exact />
            <Route
              path="/contact-us"
              component={props => <ContactPage {...this.props} />}
              exact
            />
            <Route path="/success" component={SuccessPage} exact />
            <Route path="/privacy" component={Privacy} exact />
            <Route path="/search" component={SearchPage} />
            <Route path="/admin-login" component={AdminLogin} exact />
            <Route path="*" component={ErrorPage} />
          </Switch>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);