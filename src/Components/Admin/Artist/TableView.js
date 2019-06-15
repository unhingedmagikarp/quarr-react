import React, { Component } from "react";
import Ionicon from "react-ionicons";
import { Table, Button } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ArtistPanel.css";

class TableView extends Component {
  state = {
    artists: this.props.artists
  };

  // componentDidMount() {
  //   this.getArtists();
  // }

  // getArtists = () => {
  //   axios
  //     .get("http://localhost:5000/api/artists")
  //     .then(response => {
  //       this.setState({ artists: response.data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  deleteArtist = e => {
    // const artists = [...this.state.artists];
    // artists.splice(e.target.name - 1, 1);
    // this.setState({ artists: artists });
    axios
      .delete(`/api/delete-artist/${e.target.value}`)
      .then(response => {
        console.log("deleted");
      })
      .catch(err => {
        console.log(err);
      });
  };

  displayCopy = item => {
    return item ? (
      <Ionicon icon="md-checkmark-circle" className="icon" color="#55B354" />
    ) : (
      <Ionicon icon="md-close-circle" className="icon" color="#D44F49" />
    );
  };

  render() {
    if (this.state.artists) {
      return (
        <div>
          <div>
            <h2 className="text-center">Artists</h2>
          </div>
          <p>Number of artists: {this.state.artists.length}</p>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>
                  <Ionicon icon="ios-lock" className="icon" color="black" />
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.artists.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{(index += 1)}</th>
                    <th>
                      <img
                        src={item.picture}
                        alt={item.name}
                        width="64px"
                        height="64px"
                      />
                    </th>
                    <th className="fontColor">
                      <Link to={`/admin/artists/${item.slug}`}>
                        {item.name}
                      </Link>
                    </th>
                    <th>{item.description}</th>

                    <th>{this.displayCopy(item.copyright)}</th>
                    <th>
                      <Button
                        style={{ marginLeft: "10px", marginBottom: "5px" }}
                        color="danger"
                        value={item._id}
                        name={index}
                        onClick={this.deleteArtist}
                      >
                        Delete
                      </Button>

                      <Button
                        style={{
                          marginLeft: "10px",
                          width: "70px",
                          marginBottom: "5px"
                        }}
                        color="success"
                        value={item._id}
                        name={index}
                      >
                        Edit
                      </Button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
}

export default TableView;
