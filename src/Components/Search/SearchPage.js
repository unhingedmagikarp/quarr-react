import React, { Component } from "react";
import TestImage from "../../Assets/img/tech/image2.jpg";
import axios from "axios";
import SearchItem from "./SearchItem";

class SearchPage extends Component {
  state = {};

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/search/${this.props.match.params.term}`)
      .then(res => this.setState({ results: { ...res.data } }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <section className="clean-block clean-catalog dark">
        <div className="container">
          <div className="block-heading" style={{ marginTop: "80px" }}>
            <h2 className="text-info">Content Page</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <div className="content container">
            <div className="row">
              {/* <div className="col-md-3">
                <div className="d-none d-md-block">
                  <div className="filters">
                    <div className="filter-item">
                      <h3>Categories</h3>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="formCheck-1"
                        >
                          Paintings
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="formCheck-1"
                        >
                          Paintings
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="formCheck-1"
                        >
                          Paintings
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="formCheck-1"
                        >
                          Paintings
                        </label>
                      </div>
                    </div>
                    <div className="filter-item">
                      <h3>Artist</h3>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="formCheck-1"
                        >
                          Paintings
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="formCheck-1"
                        >
                          Paintings
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="formCheck-1"
                        >
                          Paintings
                        </label>
                      </div>
                    </div>
                    <div className="filter-item">
                      <h3>Price</h3>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="formCheck-1"
                        >
                          Paintings
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="formCheck-1"
                        >
                          Paintings
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-md-12">
                <div className="products">
                  <h3 className="text-center">Artists</h3>
                  <div className="row no-gutters">
                    {this.state.results &&
                      this.state.results.artists.map(item => {
                        return <SearchItem item={item} role="artists" />;
                      })}
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="products">
                  <h3 className="text-center">Collections</h3>
                  <div className="row no-gutters">
                    {this.state.results &&
                      this.state.results.collections.map(item => {
                        return <SearchItem item={item} role="collections" />;
                      })}
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="products">
                  <h3 className="text-center">Products</h3>
                  <div className="row no-gutters">
                    {this.state.results &&
                      this.state.results.artworks.map(item => {
                        return <SearchItem item={item} role="product" />;
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchPage;
