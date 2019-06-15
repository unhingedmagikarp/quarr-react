import React, { Component } from "react";
import axios from "axios";
import TableView from "./TableView";
import "./ArtistPanel.css";
import ArtistModal from "./ArtistModal";

class ArtistPanel extends Component {
  state = {
    artists: null
  };

  componentDidMount() {
    this.getArtists();
  }

  getArtists = () => {
    axios
      .get("http://localhost:5000/api/artists")
      .then(
        response => {
          this.setState({ artists: response.data });
        },
        () => console.log(this.state.artists)
      )
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "100px" }}>
        <ArtistModal getArtists={this.getArtists} />
        {this.state.artists && <TableView artists={this.state.artists} />}
      </div>
    );
  }
}

export default ArtistPanel;
