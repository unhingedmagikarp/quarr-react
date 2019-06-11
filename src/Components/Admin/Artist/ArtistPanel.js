import React, { Component } from "react";
// import axios from "axios";
import TableView from "./TableView";
import "./ArtistPanel.css";
import ArtistModal from "./ArtistModal";

class ArtistPanel extends Component {
  state = { uploaded: false };

  handler = e => {
    this.setState({
      uploaded: !this.state.uploaded
    });
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "100px" }}>
        <ArtistModal handler={this.handler} />
        <TableView items={this.state.uploaded} />
      </div>
    );
  }
}

export default ArtistPanel;
