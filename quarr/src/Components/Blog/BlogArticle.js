import React from "react";
import Picture from "../../Assets/img/scenery/image1.jpg";

const BlogArticle = props => {
  return (
    <div className="row" style={{ marginBottom: "70px" }}>
      <div className="col-lg-5">
        <img className="rounded img-fluid" src={Picture} />
      </div>
      <div className="col-lg-7">
        <h3>Hardcoded blogpost</h3>
        <div className="info">
          <span className="text-muted">27 May, 2018</span>
        </div>
        <p>Short version for Preview</p>
        <a href="/blog">
          <button className="btn btn-outline-primary btn-sm">Read more</button>
        </a>
      </div>
    </div>
  );
};

export default BlogArticle;
