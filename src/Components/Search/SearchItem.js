import React from "react";
import { Link } from "react-router-dom";

const SearchItem = props => {
  return (
    <div key={props.item._id} className="col-12 col-md-6 col-lg-4">
      <div className="clean-product-item">
        <div className="image">
          <Link to={`/${props.role}/${props.item.slug}`}>
            <img
              className="img-fluid d-block mx-auto"
              src={props.item.picture}
              alt="Test"
            />
          </Link>
        </div>
        <div className="product-name">
          <a href="/">{props.item.name}</a>
        </div>
        <div className="about">
          <div className="price">
            <h3>
              {props.item.price ? props.item.price : props.item.description}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
