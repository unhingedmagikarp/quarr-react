import React, { Component } from "react";
import axios from "axios";
import ArtistCard from "./ArtistCard";
import "./Artists.css";

class ArtistPage extends Component {
  state = {
    artists: null
  };

  componentWillMount() {
    axios
      .get("/api/artists")
      .then(response => {
        this.setState({ artists: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (!this.state.artists) {
      return (
        <div style={{ minHeight: "1000px", backgroundColor: "#F6F6F6" }} />
      );
    }

    if (this.state.artists) {
      return (
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
              {this.state.artists.map((item, index) => {
                return (
                  <ArtistCard
                    key={index}
                    name={item.name}
                    desc={item.description}
                    picture={item.picture}
                    slug={item.slug}
                  />
                );
              })}
            </div>
          </div>
        </section>
      );
    }
  }
}

export default ArtistPage;
