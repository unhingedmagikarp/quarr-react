import React, { Component } from "react";
import Ionicon from "react-ionicons";
import { Input } from "reactstrap";
import axios from "axios";

class SearchButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
        <div className="searchDiv" onClick={this.showSome}>
          <button className="searchButton" style={{ visibility: "hidden" }}>
            <Ionicon icon="md-search" className="icon searchIcon" />
          </button>
        </div>
      </div>
    );
  }
}

export default SearchButton;
