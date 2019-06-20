import React, { Component } from "react";
import axios from "axios";
import TableComponent from "../TableComponent";

class Collection extends Component {
  state = {};

  componentWillMount() {
    const urlPath = window.location.pathname.split("/")[2];
    axios
      .get(`http://localhost:5000/api/collections/${urlPath}`)
      .then(response => {
        this.setState({ collection: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.collection) {
      return <TableComponent item={this.state.collection} />;
    } else {
      return <p>Loading...</p>;
    }
  }
}

export default Collection;
