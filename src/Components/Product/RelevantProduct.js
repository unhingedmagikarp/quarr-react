import React from "react";
import { Link } from "react-router-dom";

const RelevantProduct = props => {
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="clean-related-item">
        <div className="image">
          <img
            className="img-fluid d-block mx-auto"
            src={props.product.picture}
          />
        </div>
        <div className="related-name">
          <Link to={`/product/${props.product.slug}`}>
            {props.product.name}
          </Link>
          <h4>£{props.product.price[0]}</h4>
        </div>
      </div>
    </div>
  );
};

export default RelevantProduct;
