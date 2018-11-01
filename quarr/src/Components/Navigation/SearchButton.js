import React, { Component } from "react";
import Ionicon from "react-ionicons";
import { Input } from "reactstrap";

class SearchButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          border: "1px solid black",
          marginRight: "32px",
          maxWidth: "200px"
        }}
      >
        <Input style={{ border: "none" }} />
        <button style={{ visibility: "hidden" }} onClick={this.showSome}>
          <Ionicon
            icon="md-search"
            className="icon"
            style={{ visibility: "visible" }}
          />
        </button>
      </div>
    );
  }
}

export default SearchButton;
