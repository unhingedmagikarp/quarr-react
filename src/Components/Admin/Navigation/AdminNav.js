import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import { Link } from "react-router-dom";
import NewArtwork from "./NewArtwork";

// import NewArt from "../Artwork/NewArt";
import "./Navigation.css";

class Navigation extends Component {
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
      <React.Fragment>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/admin/artists">Admin Panel</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/admin/artists">
                    Artists
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/admin/collections">
                    Collections
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/admin/contacts">
                    Contacts
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/admin/artists">
                    Users
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NewArtwork />
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Navigation;
