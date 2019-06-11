import React, { Component } from "react";
import axios from "axios";
import "./Collections.css";
import ArtworkCard from "./ArtworkCard";

class CollectionsPage extends Component {
  state = {
    collection: null
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:5000/api/collectionslug/${
          this.props.match.params.collection
        }`
      )
      .then(response => {
        this.setState({ collection: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.collection);
    return (
      <React.Fragment>
        {this.state.collection ? (
          <section
            className="clean-block about-us"
            style={{ backgroundColor: "#F6F6F6" }}
          >
            <div className="container">
              <div className="block-heading" style={{ marginTop: "80px" }}>
                <h2 className="text-info">{this.state.collection.name}</h2>
                <p>{this.state.collection.description}</p>
              </div>
              <div className="row justify-content-center">
                {this.state.collection.artworks.map(
                  item => {
                    return <ArtworkCard artwork={item} key={item._id} />;
                  }

                  //   return <ArtistCard key={item._id} artist={item} />;
                )}
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

export default CollectionsPage;
