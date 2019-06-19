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
import ArtistSite from "./Components/Artists/ArtistSite";
import SearchPage from "./Components/Search/SearchPage";
import SingleArtistSite from "./Components/SingleArtist/SingleArtistSite";
import CollectionsWrapper from "./Components/Collections/CollectionsWrapper";
import Product from "./Components/Product/Product";
import Cart from "./Components/Checkout/Cart";
import CheckoutForm from "./Components/Checkout/Checkout";

// Admin pages
import Navigation from "./Components/Admin/Navigation/AdminNav";
import AdminContacts from "./Components/Admin/Contacts/Contacts";
import ArtistPanel from "./Components/Admin/Artist/ArtistPanel";
import Collections from "./Components/Admin/Collections/Collections";
import Artist from "./Components/Admin/Artist/DetailedArtist/Artist";

class App extends Component {
  state = {
    basket: null
  };

  componentDidMount() {
    this.getBasketContent();
  }

  getBasketContent = () => {
    this.setState({
      basket: JSON.parse(localStorage.getItem("testObject"))
    });
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          {this.props.location.pathname.includes("admin") ? (
            <Navigation />
          ) : (
            <AppNavbar
              getBasketContent={this.getBasketContent}
              basketContent={this.state.basket ? this.state.basket : null}
            />
          )}
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/artists" component={ArtistSite} exact />
            <Route path="/artists/:slug/" component={SingleArtistSite} exact />
            <Route
              path="/artists/:slug/:collection"
              component={CollectionsWrapper}
            />
            <Route
              path="/product/:slug"
              render={props => (
                <Product {...props} getBasketContent={this.getBasketContent} />
              )}
              exact
            />
            <Route path="/blog" component={BlogPage} exact />
            <Route path="/contact-us" component={ContactPage} exact />
            <Route path="/success" component={SuccessPage} exact />
            <Route path="/privacy" component={Privacy} exact />
            <Route
              path="/search/:term"
              render={props => <SearchPage {...props} />}
            />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={CheckoutForm} exact />

            {/* <Route path="/" component={Users} exact /> */}
            <Route path="/admin/artists" component={ArtistPanel} exact />
            <Route path="/admin/artists/:name" component={Artist} />
            <Route path="/admin/collections" component={Collections} exact />
            {/* <Route path="/admin/collections/:id" component={Collection} />  */}
            <Route path="/admin/contacts" component={AdminContacts} exact />
            {/* <Route path="/admin-login" component={AdminLogin} exact /> */}
            <Route path="*" component={ErrorPage} />
          </Switch>
          {this.props.location.pathname.includes("admin") ? null : <Footer />}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
