import React from "react";

const CollectionCard = props => {
  return (
    <a
      className="col-sm-6 col-lg-4 fadeCard"
      href={`/collections/`}
      style={{ textDecoration: "none", color: "#212529" }}
    >
      <div className="card clean-card text-center artistCard">
        <img
          //   alt={props.artist.name}
          className="card-img-top w-100 d-block artist"
          src={props.collection.picture}
          style={{ pointerEvents: "none" }}
        />
        <div className="card-body info">
          <h4 className="card-title">asd</h4>
          <p className="card-text">afadf</p>
        </div>
      </div>
    </a>
  );
};

export default CollectionCard;
