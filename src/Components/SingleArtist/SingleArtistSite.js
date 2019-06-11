import MetaTags from "react-meta-tags";
import MetaImage from "../../Assets/img/ls.jpg";
import React from "react";
import SingleArtistPage from "./SingleArtistPage";
import axios from "axios";

class SingleArtistSite extends React.Component {
  state = {};

  componentDidMount() {
    this.fetchArtist();
  }

  fetchArtist = slug => {
    axios
      .get(
        `http://localhost:5000/api/artistslug/${this.props.match.params.slug}`
      )
      .then(artist => this.setState({ artist: artist.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div style={{ minHeight: "45rem" }}>
        <MetaTags>
          <title>
            {this.state.artist ? this.state.artist.name : "Artist"} - Quarr
            Gallery
          </title>
          <meta
            name="description"
            content={
              this.state.artist
                ? this.state.artist.description
                : "We sell on behalf of the artists who remain the owners until their work is purchased. This means you are buying from the artist at the price they have set. We do not buy art and resell it. "
            }
          />
          <meta
            property="og:title"
            content={
              this.state.artist
                ? this.state.artist.name
                : "Quarr Gallery in Swanage, Dorset"
            }
          />
          <meta
            property="og:image"
            content={this.state.artist ? this.state.artist.picture : MetaImage}
          />
          <meta
            property="og:site_name"
            content={
              this.state.artist
                ? `${this.state.artist.name} - Quarr Gallery`
                : "Quarr Gallery"
            }
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={window.location.href} />
        </MetaTags>
        {this.state.artist && <SingleArtistPage artist={this.state.artist} />}
      </div>
    );
  }
}

export default SingleArtistSite;
