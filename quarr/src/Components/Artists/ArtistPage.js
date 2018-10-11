import React, { Component } from "react";
import axios from "axios";
import ArtistCard from "./ArtistCard";

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
      return <p>Loading...</p>;
    }

    if (this.state.artists) {
      return (
        <section className="clean-block about-us">
          <div className="container">
            <div className="block-heading">
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
                    artistUrl={item.artistUrl}
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
