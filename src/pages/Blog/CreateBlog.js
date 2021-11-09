import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import withAuth from "../../hoc/withAuth";
import { blogAxios, blogAxiosProtected } from "../../utils/axios";

function CreateBlog() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    blogAxios.get("/tags/").then((response) => {
      setTags(response.data);
    });
  }, []);

  async function handleSubmit(data) {
    var response = await blogAxiosProtected.post("/post/", data);
    console.log(response.data);
  }

  return (
    <div className="mt-4 p-3">
      <h4>Create Blog</h4>
      <Formik
        initialValues={{
          title: "",
          body_text: "",
          tags: [],
        }}
        onSubmit={handleSubmit}
      >
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
                  checked={values.tags.includes(String(tag.id)) && 'checked'}
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

export default withAuth(CreateBlog);
