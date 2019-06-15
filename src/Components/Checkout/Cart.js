import React, { Component } from "react";

class Cart extends Component {
  state = {
    basket: null
  };

  componentDidMount() {
    this.setState(
      {
        basket: JSON.parse(localStorage.getItem("testObject"))
      },
      () => this.getSummary()
    );
    // this.getSummary();
  }

  getSummary = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    this.setState({
      finalPrice: this.state.basket
        .map(item => parseInt(item.price[0]))
        .reduce(reducer)
    });
  };

  render() {
    return (
      <main className="page shopping-cart-page">
        <section className="clean-block clean-cart dark">
          {this.state.basket ? (
            <div className="container">
              <div className="block-heading">
                <h2 className="text-info">Shopping Cart</h2>
                <p>General text about how much we value your purchase</p>
              </div>
              <div className="content">
                <div className="row no-gutters">
                  <div className="col-md-12 col-lg-8">
                    <div className="items">
                      {this.state.basket.map((item, index) => {
                        return (
                          <div className="product" key={`${item.id}-${index}`}>
                            <div className="row justify-content-center align-items-center">
                              <div className="col-md-3">
                                <div className="product-image">
                                  <img
                                    className="img-fluid d-block mx-auto image"
                                    src={item.picture}
                                    alt={item.name}
                                  />
                                </div>
                              </div>
                              <div className="col-md-5 product-info">
                                <a className="product-name" href="#">
                                  {item.name}
                                </a>
                                <div className="product-specs">
                                  <div>
                                    <span>Description:&nbsp;</span>
                                    <span className="value">
                                      {item.description}
                                    </span>
                                  </div>
                                  <div>
                                    <span>Collection:&nbsp;</span>
                                    <span className="value">
                                      {item.categoryType}
                                    </span>
                                  </div>

                                  <div>
                                    <span>Size:&nbsp;</span>
                                    <span className="value">
                                      {item.size[0]}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 col-md-2 quantity">
                                <label
                                  className="d-none d-md-block"
                                  htmlFor="quantity"
                                >
                                  Quantity
                                </label>
                                1
                                {/* <input
                                  type="number"
                                  id="number"
                                  className="form-control quantity-input"
                                  value="1"
                                /> */}
                              </div>
                              <div className="col-6 col-md-2 price">
                                <span>£{item.price[0]}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                    <div className="summary">
                      <h3>Summary</h3>
                      <h4>
                        <span className="text">Subtotal</span>
                        <span className="price">
                          £{`${this.state.finalPrice}`}
                        </span>
                      </h4>
                      <h4>
                        <span className="text">Discount</span>
                        <span className="price">£0</span>
                      </h4>
                      <h4>
                        <span className="text">Shipping</span>
                        <span className="price">£0</span>
                      </h4>
                      <h4>
                        <span className="text">Total</span>
                        <span className="price">
                          £{`${this.state.finalPrice}`}
                        </span>
                      </h4>
                      <button
                        className="btn btn-primary btn-block btn-lg"
                        type="button"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </section>
      </main>
    );
  }
}

export default Cart;
