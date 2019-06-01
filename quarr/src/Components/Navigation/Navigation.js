import React, { Component } from "react";
import { NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";
import "./Navigation.css";
import SearchButton from "./SearchButton";
import { Link } from "react-router-dom";

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
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar smallNav">
        <div className="container">
          <a className="navbar-brand logo" href="/">
            Quarr Gallery
          </a>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="nav navbar-nav ml-auto" navbar>
              <NavItem>
                <SearchButton />
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/artists">
                  Artists
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/blog">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact-us">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </nav>
    );
  }
}

export default AppNavbar;
