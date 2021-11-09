import React from "react";
import { Formik } from "formik";
import { blogAxios } from "../../utils/axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  async function handleSubmit(data) {
    const userDetails = await blogAxios.post("/api-token-auth/", data);
    localStorage.setItem("token", userDetails.data.token);
    navigate({
      pathname: "/blog",
    });
  }

  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                onChange={handleChange}
                value={values.username}
                name="username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={handleChange}
                value={values.password}
                name="password"
              />
            </div>
            <button className="btn btn-primary">Login</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default SignIn;
