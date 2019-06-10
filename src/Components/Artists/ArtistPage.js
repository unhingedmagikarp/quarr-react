import React, { Component } from "react";
import axios from "axios";
import ArtistCard from "./ArtistCard";
import "./Artists.css";

class ArtistPage extends Component {
  state = {
    artists: null
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/artists")
      .then(response => {
        this.setState({ artists: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.artists ? (
          <section
            className="clean-block about-us"
            style={{ backgroundColor: "#F6F6F6" }}
          >
            <div className="container">
              <div className="block-heading" style={{ marginTop: "80px" }}>
                <h2 className="text-info">Artists</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  quam urna, dignissim nec auctor in, mattis vitae leo.
                </p>
              </div>
              <div className="row justify-content-center">
                {this.state.artists.map(item => {
                  return <ArtistCard key={item._id} artist={item} />;
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

export default ArtistPage;
