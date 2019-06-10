import React, { Component } from "react";
import axios from "axios";

import TableComponent from "./TableComponent";

class AdminCollections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: null
    };
    this.deleteCollection = this.deleteCollection.bind(this);
  }

  componentDidMount() {
    this.getCollections();
  }

  componentWillReceiveProps(props) {
    if (props.items) {
      this.getCollections();
    }
  }

  getCollections = () => {
    axios
      .get("http://localhost:5000/api/collections")
      .then(response => {
        this.setState({ collections: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteCollection = e => {
    const collection = [...this.state.collections];
    collection.splice(e.target.name - 1, 1);
    this.setState({ collections: collection });
    axios
      .delete(`/api/delete-collection/${e.target.value}`)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (this.state.collections) {
      return (
        <div>
          <div>
            <h2 className="text-center">Collections</h2>
          </div>
          <p>Number of collections: {this.state.collections.length}</p>
          <TableComponent
            item={this.state.collections}
            handler={this.deleteCollection}
          />
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
}

export default AdminCollections;
