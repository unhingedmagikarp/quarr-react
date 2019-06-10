import React from "react";
import { Link } from "react-router-dom";

const ArtistCard = props => {
  return (
    <Link
      className="col-sm-6 col-lg-4 fadeCard"
      to={`artists/${props.artist.slug}`}
      style={{ textDecoration: "none", color: "#212529" }}
    >
      <div className="card clean-card text-center artistCard">
        <img
          alt={props.artist.name}
          className="card-img-top w-100 d-block artist"
          src={props.artist.picture}
          style={{ pointerEvents: "none" }}
        />
        {props.artist.copyright && (
          <div className="copyright waterMark">Quarr Gallery</div>
        )}
        <div className="card-body info">
          <h4 className="card-title">{props.artist.name}</h4>
          <p className="card-text">{props.artist.desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArtistCard;
