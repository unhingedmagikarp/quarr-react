import React, { Component } from "react";
import axios from "axios";
import CollectionCard from "./CollectionCard";
// import ArtistCard from "./ArtistCard";
// import "./Artists.css";

class SingleArtistPage extends Component {
  state = {
    // artists: null
  };

  render() {
    console.log(this.props.artist);
    return (
      <React.Fragment>
        {this.props.artist ? (
          <section
            className="clean-block about-us"
            style={{ backgroundColor: "#F6F6F6", minHeight: "500px" }}
          >
            <div className="container">
              <div className="block-heading" style={{ marginTop: "80px" }}>
                <h2 className="text-info">{this.props.artist.name}</h2>
                <p>{this.props.artist.description}</p>
              </div>
              <div className="row justify-content-center">
                {this.props.artist.collections.map(item => {
                  return <CollectionCard key={item._id} collection={item} />;
                })}
              </div>
            </div>
          </section>
        ) : (
          <div style={{ minHeight: "1000px", backgroundColor: "#F6F6F6" }} />
        )}
      </React.Fragment>
    );
  }
}

export default SingleArtistPage;
