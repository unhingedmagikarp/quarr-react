import React from "react";
import { Link } from "react-router-dom";

const ArtworkCard = props => {
  return (
    <Link
      className="col-sm-6 col-lg-4 fadeCard"
      to={`/product/${props.artwork.slug}`}
      style={{ textDecoration: "none", color: "#212529" }}
    >
      <div className="card clean-card text-center artistCard">
        <img
          alt={props.artwork.name}
          className="card-img-top w-100 d-block artist"
          src={props.artwork.picture}
          style={{ pointerEvents: "none" }}
        />
        <div className="card-body info">
          <h4 className="card-title">{props.artwork.name}</h4>
          <p className="card-text">{props.artwork.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArtworkCard;
