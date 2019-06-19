import React, { Component } from "react";
import {
  CardElement,
  injectStripe,
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement
} from "react-stripe-elements";
import axios from "axios";

const handleBlur = () => {
  console.log("[blur]");
};
const handleChange = change => {
  console.log("[change]", change);
};
const handleClick = () => {
  console.log("[click]");
};
const handleFocus = () => {
  console.log("[focus]");
};
const handleReady = () => {
  console.log("[ready]");
};

const createOptions = (fontSize: string, padding: ?string) => {
  return {
    style: {
      base: {
        border: "1px solid grey",
        display: "block",
        width: "100%",
        minWidth: "150px",
        fontSize,
        color: "#424770",
        letterSpacing: "0.025em",
        fontFamily: "Source Code Pro, monospace",
        "::placeholder": {
          color: "#aab7c4"
        },
        ...(padding ? { padding } : {})
      },
      invalid: {
        border: "1px solid grey",
        color: "#9e2146",
        width: "100%",
        minWidth: "150px"
      }
    }
  };
};

class _CardForm extends React.Component {
  handleSubmit = async e => {
    e.preventDefault();

    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await axios.post("http://localhost:5000/api/payment", {
      token: token.id
    });

    if (response.ok) console.log("Purchase Complete!");
  };
  render() {
    return (
      <main className="page payment-page">
        <section className="clean-block payment-form dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Payment</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="products">
                <h3 className="title">Checkout</h3>
                <div className="item">
                  <span className="price">$200</span>
                  <p className="item-name">Product 1</p>
                  <p className="item-description">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="item">
                  <span className="price">$120</span>
                  <p className="item-name">Product 2</p>
                  <p className="item-description">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="total">
                  <span>Total</span>
                  <span className="price">$320</span>
                </div>
              </div>
              <div className="card-details">
                <h3 className="title">Credit Card Details</h3>
                <div className="form-row">
                  <div className="col-sm-7">
                    <div className="form-group">
                      <label style={{ width: "200px" }}>
                        Card number
                        <CardNumberElement
                          style={{ width: "200px", border: "1px solid grey" }}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onReady={handleReady}
                          {...createOptions(this.props.fontSize)}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="form-group">
                      <label>
                        Expiration date
                        <CardExpiryElement
                          onBlur={handleBlur}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onReady={handleReady}
                          {...createOptions(this.props.fontSize)}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>
                        CVC
                        <CardCVCElement
                          onBlur={handleBlur}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onReady={handleReady}
                          {...createOptions(this.props.fontSize)}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Proceed
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    );
  }
}
const CardForm = injectStripe(_CardForm);

class Checkout extends React.Component {
  render() {
    return (
      <div classNameName="container">
        <h1>Available Elements</h1>
        <Elements>
          <CardForm />
        </Elements>
      </div>
    );
  }
}

export default Checkout;
