import React, { Component } from "react";
import axios from "axios";
import TableComponent from "./TableComponent";

class Artist extends Component {
  state = {};

  componentDidMount() {
    axios
      .get(
        `http://localhost:5000/api/artistslug/${this.props.match.params.name}`
      )
      .then(response => {
        this.setState({ artist: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.artist ? (
          <TableComponent item={this.state.artist} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default Artist;
