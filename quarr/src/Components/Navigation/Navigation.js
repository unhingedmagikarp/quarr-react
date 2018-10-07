import React, { Component } from "react";
import NavButton from "./NavButton";
import { NavbarToggler, Collapse } from "reactstrap";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div className="container">
          <a className="navbar-brand logo" href="/">
            Quarr Gallery
          </a>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <ul className="nav navbar-nav ml-auto">
              <NavButton route={"/"} action={"Home"} key={"Home"} />
              <NavButton
                route={"/artists"}
                action={"Artists"}
                key={"Artists"}
              />
              <NavButton route={"/blog"} action={"Blog"} key={"Blog"} />
              <NavButton
                route={"/contact-us"}
                action={"Contact us"}
                key={"Contact"}
              />
            </ul>
          </Collapse>
        </div>
      </nav>
    );
  }
}

export default AppNavbar;
