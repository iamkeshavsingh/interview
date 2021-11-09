import React from "react";
import { Link } from "react-router-dom";

function Blog({ title, body_text, number_of_likes, id }) {
  return (
    <div className="card mr-2 mb-5" style={{ width: "300px" }}>
      <div className="card-header">
        <Link to={`/blog/${id}`}>{title}</Link>
      </div>
      <div className="card-body">{body_text}</div>
      <div className="card-footer">Likes: {number_of_likes}</div>
    </div>
  );
}

export default Blog;
