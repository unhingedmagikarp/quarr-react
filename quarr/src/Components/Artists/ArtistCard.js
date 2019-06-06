import React from "react";

const ArtistCard = props => {
  return (
    <a
      className="col-sm-6 col-lg-4 fadeCard"
      href={`artists/${props.artist.slug}`}
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
    </a>
  );
};

export default ArtistCard;
