import React from "react";

const CartItem = props => {
  return (
    <div class="product">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-3">
          <div class="product-image">
            <img
              class="img-fluid d-block mx-auto image"
              src="assets/img/tech/image2.jpg"
            />
          </div>
        </div>
        <div class="col-md-5 product-info">
          <a class="product-name" href="#">
            Lorem Ipsum dolor
          </a>
          <div class="product-specs">
            <div>
              <span>Display:&nbsp;</span>
              <span class="value">5 inch</span>
            </div>
            <div>
              <span>RAM:&nbsp;</span>
              <span class="value">4GB</span>
            </div>
            <div>
              <span>Memory:&nbsp;</span>
              <span class="value">32GB</span>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-2 quantity">
          <label class="d-none d-md-block" for="quantity">
            Quantity
          </label>
          <input
            type="number"
            id="number"
            class="form-control quantity-input"
            value="1"
          />
        </div>
        <div class="col-6 col-md-2 price">
          <span>$120</span>
        </div>
      </div>
    </div>
  );
};
