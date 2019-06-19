import React, { Component } from "react";
import Ionicon from "react-ionicons";
import { Input } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";

class SearchButton extends Component {
  state = {
    searchInfo: ""
  };

  handleChange = event => {
    this.setState({ searchInfo: event.target.value });
  };

  showSome = () => {
    axios.get(`/api/search/${this.state.searchInfo}`).then(response => {
      console.log(response.data);
    });
  };

  render() {
    return (
      <div className="buttonParent">
        <Input style={{ border: "none" }} onChange={this.handleChange} />
        <Link to={`/search/${this.state.searchInfo}`}>
          <div className="searchDiv" onClick={this.showSome}>
            <button className="searchButton" style={{ visibility: "hidden" }}>
              <Ionicon
                icon="md-search"
                className="icon searchIcon"
                style={{ marginTop: "6px" }}
              />
            </button>
          </div>
        </Link>
      </div>
    );
  }
}

export default SearchButton;
