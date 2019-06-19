import React, { Component } from "react";
import {
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import "./Navigation.scss";
import SearchButton from "./SearchButton";
import { Link } from "react-router-dom";
import Basket from "./Basket";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  componentDidMount() {
    this.props.getBasketContent();
  }

  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar smallNav">
        <Container>
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
            <Basket
              getBasketContent={this.props.getBasketContent}
              basketContent={this.props.basketContent}
            />
          </Collapse>
        </Container>
      </nav>
    );
  }
}

export default AppNavbar;
