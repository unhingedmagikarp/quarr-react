import React, { Component } from "react";
import axios from "axios";

import TableComponent from "./TableComponent";
import CollectionModal from "./CollectionModal";

class AdminCollections extends Component {
  state = {
    collections: null
  };

  componentDidMount() {
    this.getCollections();
  }

  getCollections = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/collections");
      this.setState({ collections: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  deleteCollection = async item => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/collections/${item._id}`
      );
      this.getCollections();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "100px" }}>
        <h2 className="text-center">Collections</h2>

        <CollectionModal getCollections={this.getCollections} />
        {this.state.collections && (
          <React.Fragment>
            <p>Number of collections: {this.state.collections.length}</p>
            <TableComponent
              item={this.state.collections}
              deleteCollection={this.deleteCollection}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default AdminCollections;
