import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import useBlogById from "../../hooks/useBlogById";
import useUsers from "../../hooks/useUsers";
import { increaseViewOfPost } from "../../store/actions/blogs/blogs.action";
import { markPostAsViwed } from "../../store/actions/user/user.action";
import { userType } from "../../utils/enum";

function BlogDescription() {

  const location = useLocation();
  const postViewedByUser = useSelector(({ user }) => user.postViewed);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { type, users } = useUsers();

  const listArray = location.pathname.split("/");
  const id = listArray[listArray.length - 1];
  const blog = useBlogById(id);

  useEffect(() => {
    if (blog && !postViewedByUser.includes(id)) {
      dispatch(markPostAsViwed(id))
      dispatch(increaseViewOfPost(id));
    }
  }, [id, blog]);


  return (
    <div className="m-4">
      <h4>{blog?.title}</h4>
      <div className="jumbotron">
        {blog?.body_text}
      </div>
      <div className="w-12 d-flex justify-content-center align-items-center">
        <p className="mr-5">View: {blog?.number_of_views}</p>
        {(type === userType.admin || users[0]?.id === blog?.author) && (
          <button
            className="btn btn-primary mx-1"
            onClick={() =>
              navigate({
                pathname: "/edit/" + id,
              })
            }
          >
            Edit
          </button>
        )}
        <button
          className="btn btn-primary mx-1"
          onClick={() =>
            navigate({
              pathname: "/blog",
            })
          }
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default BlogDescription;
