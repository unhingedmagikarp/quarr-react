const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  date: {
    type: String,
    required: [true, "Expected format: 27 June, 2018"]
  },
  picture: {
    type: String,
    required: [true, "Minimum size: 400x400px"]
  },
  blogPreview: {
    type: String,
    required: [true, "Few sentence about the article"]
  },
  blogContent: {
    type: String,
    required: [true, "Content of blog required"]
  },
  published: {
    type: Boolean,
    required: [true, "Define the status of the post"]
  }
});

const BlogPost = mongoose.model("BlogPost", blogSchema);

module.exports = BlogPost;
