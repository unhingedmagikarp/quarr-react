import React from "react";
import BlogArticle from "./BlogArticle";

const BlogPage = () => {
  return (
    <section className="clean-block clean-blog-list dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info" style={{ marginTop: "80px" }}>
            Blog
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
            urna, dignissim nec auctor in, mattis vitae leo.
          </p>
        </div>
        <div className="block-content">
          <BlogArticle />
          <BlogArticle />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
