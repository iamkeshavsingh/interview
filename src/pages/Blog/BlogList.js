import React, { useEffect, useState } from "react";
import Blog from "../../components/Blog/Blog";
import { fetchBlogsApi } from "../../utils/apis";
import { blogAxios } from "../../utils/axios";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    blogAxios.get(fetchBlogsApi).then((response) => {
      setBlogs(response.data);
    });
  }, []);

  return (
    <div className="d-flex mt-5" style={{ flexWrap: "wrap" }}>
      {blogs.map((blog) => (
        <Blog {...blog} />
      ))}
    </div>
  );
}

export default BlogList;
