import React from "react";

const ArtistCard = props => {
  return (
    <a
      className="col-sm-6 col-lg-4 fadeCard"
      href={`artists/${props.artistUrl}`}
      style={{ textDecoration: "none", color: "#212529" }}
    >
      <div className="card clean-card text-center artistCard">
        <img
          alt={props.name}
          className="card-img-top w-100 d-block artist"
          src={props.picture}
          style={{ pointerEvents: "none" }}
        />
        <div className="copyright waterMark">Quarr Gallery</div>
        <div className="card-body info">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-text">{props.desc}</p>
        </div>
      </div>
    </a>
  );
};

export default ArtistCard;
