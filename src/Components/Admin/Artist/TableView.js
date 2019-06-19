import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Ionicon from "react-ionicons";
import "./ArtistPanel.css";
import EditArtist from "./EditArtist";

class TableView extends Component {
  render() {
    if (this.props.artists) {
      return (
        <div>
          <div>
            <h2 className="text-center">Artists</h2>
          </div>
          <p>Number of artists: {this.props.artists.length}</p>
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
              {this.props.artists.map((item, index) => {
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

                    <th>{this.props.displayCopy(item.copyright)}</th>
                    <th>
                      <Button
                        style={{ marginLeft: "10px", marginBottom: "5px" }}
                        color="danger"
                        value={item._id}
                        name={index}
                        onClick={() => this.props.deleteArtist(item)}
                      >
                        Delete
                      </Button>
                      <EditArtist
                        artist={item}
                        getArtists={this.props.getArtists}
                      />
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
