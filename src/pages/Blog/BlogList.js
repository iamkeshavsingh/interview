import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Blog from "../../components/Blog/Blog";
import { fetchBlogs } from "../../store/actions/blogs/blogs.action";

function BlogList() {

  const blogs = useSelector(({ blogs }) => blogs.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!blogs)
      dispatch(fetchBlogs());
  }, []);


  return (
    <div className="d-flex mt-5" style={{ flexWrap: "wrap" }}>
      {blogs?.map((blog) => (
        <Blog {...blog} />
      ))}
    </div>
  );
}

export default BlogList;
