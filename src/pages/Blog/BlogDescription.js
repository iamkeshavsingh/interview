import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import { markPostAsViwed } from "../../store/actions/user/user.action";
import { blogAxios } from "../../utils/axios";
import { userType } from "../../utils/enum";

function BlogDescription() {
  const [blog, setBlog] = useState({});
  const location = useLocation();
  const postViewedByUser = useSelector(({ user }) => user.postViewed);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { type, users } = useUsers();

  const listArray = location.pathname.split("/");
  const id = listArray[listArray.length - 1];

  useEffect(() => {
    blogAxios.get("/post/" + id).then((response) => {
      setBlog(() => response.data);
    });
  }, [id]);

  const isViwed = useMemo(() => {
    if (postViewedByUser.find((post) => post.id === id)) return true;
    dispatch(markPostAsViwed(id));
    return false;
  }, [id]);

  if (isViwed) {
    return navigate({
      pathname: "/blog",
    });
  }

  return (
    <div>
      View:{blog?.number_of_views}
      {(type === userType.admin || users?.id === blog?.author) && (
        <button
          className="btn btn-primary"
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
        className="btn btn-primary"
        onClick={() =>
          navigate({
            pathname: "/blog",
          })
        }
      >
        Back
      </button>
    </div>
  );
}

export default BlogDescription;
