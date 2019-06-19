import React, { Component } from "react";
import {
  CardElement,
  injectStripe,
  Elements,
  StripeProvider
} from "react-stripe-elements";
import Checkout from "./Card";

class CheckoutForm extends Component {
  render() {
    return (
      <div style={{ minHeight: "1000px", marginTop: "200px" }}>
        <StripeProvider apiKey="pk_test_190L6KrXElytNqbrE2fUh8Hh00HdIcbkU2">
          <Checkout />
        </StripeProvider>
      </div>
    );
  }
}

export default CheckoutForm;
