import React from "react";
import axios from "axios";
import RelevantProduct from "./RelevantProduct";

class Product extends React.Component {
  state = {
    artworks: null,
    selected: null
  };

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = () => {
    axios
      .get(
        `http://localhost:5000/api/artworkslug/${this.props.match.params.slug}`
      )
      .then(res => {
        this.setState({
          artworks: res.data.allArtworks.artworks,
          selected: res.data.selected
        });
      });
  };

  addToBasket = () => {
    localStorage.getItem("testObject")
      ? localStorage.setItem(
          "testObject",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("testObject")),
            this.state.selected
          ])
        )
      : localStorage.setItem(
          "testObject",
          `[${JSON.stringify(this.state.selected)}]`
        );
    this.props.getBasketContent();
  };

  render() {
    return (
      <React.Fragment>
        {this.state.selected ? (
          <main className="page product-page">
            <section className="clean-block clean-product dark">
              <div className="container">
                <div className="block-heading">
                  <h2 className="text-info">{this.state.selected.name}</h2>
                </div>
                <div className="block-content">
                  <div className="product-info">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="gallery">
                          <div className="">
                            <img
                              className="img-fluid d-block mx-auto"
                              src={this.state.selected.picture}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="info">
                          <h3>{this.state.selected.name}</h3>
                          {/* <div className="rating"><img src="assets/img/star.svg"><img src="assets/img/star.svg"><img src="assets/img/star.svg"><img src="assets/img/star-half-empty.svg"><img src="assets/img/star-empty.svg"></div> */}
                          <div className="price">
                            <h3>£{this.state.selected.price[0]}</h3>
                          </div>
                          <button
                            className="btn btn-primary"
                            type="button"
                            onClick={this.addToBasket}
                          >
                            <i className="icon-basket" />
                            Add to Cart
                          </button>
                          <div className="summary">
                            <p>{this.state.selected.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="clean-related-items">
                    <h3>Related Products</h3>
                    <div className="items">
                      <div className="row justify-content-center">
                        {this.state.artworks.reverse().map(item => {
                          return (
                            <RelevantProduct key={item._id} product={item} />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Product;
