import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import withAuth from "../../hoc/withAuth";
import { blogAxios, blogAxiosProtected } from "../../utils/axios";
import { useLocation } from "react-router-dom";

function EditBlog() {
  const [tags, setTags] = useState([]);
  const location = useLocation();
  const [blog, setBlog] = useState({});
  const [isLoading, setLoading] = useState(true);

  const listArray = location.pathname.split("/");
  const id = listArray[listArray.length - 1];

  useEffect(() => {
    blogAxios.get("/tags/").then((response) => {
      setTags(response.data);
    });
  }, []);

  useEffect(() => {
    blogAxios.get("/post/" + id).then((response) => {
      const data = {
        ...response.data,
        tags: response.data.tags.map((item) => String(item.id)),
      };
      setBlog(data);
      setLoading(false);
    });
  }, [id]);

  async function handleSubmit(data) {
    var response = await blogAxiosProtected.patch("/post/" + id, data);
    console.log(response.data);
  }

  if (isLoading) return null;

  const initState = {
    title: blog.title,
    body_text: blog.body_text,
    tags: blog.tags,
  };
  return (
    <div className="mt-4 p-3">
      <h4>Edit Blog</h4>
      <Formik initialValues={initState} onSubmit={handleSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Title</label>
              <input
                className="form-control"
                type="text"
                placeholder="Title"
                name="title"
                value={values.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Description</label>
              <textarea
                name="body_text"
                className="form-control"
                id=""
                cols="30"
                rows="10"
                value={values.body_text}
                onChange={handleChange}
              ></textarea>
            </div>
            {tags.map((tag) => (
              <div className="form-group">
                <input
                  value={tag.id}
                  type="checkbox"
                  className="mr-2"
                  name="tags"
                  onChange={handleChange}
                />
                <label htmlFor="">{tag.name}</label>
              </div>
            ))}
            <button className="btn btn-primary">Create</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default withAuth(EditBlog);
