import React, { Component } from "react";
import Collections from "./Collections";
import CollectionModal from "./CollectionModal";

class CollectionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploaded: false
    };

    this.handler = this.handler.bind(this);
  }

  handler(e) {
    this.setState({
      uploaded: !this.state.uploaded
    });
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "100px" }}>
        <CollectionModal handler={this.handler} />
        <Collections items={this.state.uploaded} />
      </div>
    );
  }
}

export default CollectionForm;
