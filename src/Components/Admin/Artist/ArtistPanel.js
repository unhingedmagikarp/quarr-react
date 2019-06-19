import React, { Component } from "react";
import axios from "axios";
import TableView from "./TableView";
import "./ArtistPanel.css";
import ArtistModal from "./ArtistModal";
import Ionicon from "react-ionicons";

class ArtistPanel extends Component {
  state = {
    artists: null
  };

  componentDidMount() {
    this.getArtists();
  }

  getArtists = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/artists");
      this.setState({ artists: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  deleteArtist = async artist => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/artists/${artist._id}`
      );
      this.getArtists();
    } catch (err) {
      console.log(err);
    }
  };

  displayCopy = item => {
    return item ? (
      <Ionicon icon="md-checkmark-circle" className="icon" color="#55B354" />
    ) : (
      <Ionicon icon="md-close-circle" className="icon" color="#D44F49" />
    );
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "100px" }}>
        <ArtistModal getArtists={this.getArtists} />
        {this.state.artists && (
          <TableView
            artists={this.state.artists}
            deleteArtist={this.deleteArtist}
            displayCopy={this.displayCopy}
          />
        )}
      </div>
    );
  }
}

export default ArtistPanel;
