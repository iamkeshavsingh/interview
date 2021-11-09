import React from "react";
import { Formik } from "formik";
import { blogAxios } from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { signinSchema } from "../../utils/validationSchema";
import { useDispatch } from "react-redux";
import { fetchUserDetails } from "../../store/actions/user/user.action";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleSubmit(data) {
    const response = await blogAxios.post("/api-token-auth/", data);
    localStorage.setItem("token", response.data.token);
    dispatch(fetchUserDetails());
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
        validationSchema={signinSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, values, handleSubmit, errors, touched }) => (
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
              {touched.username && errors.username && (
                <div className="error">{errors.username}</div>
              )}
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
              {touched.password && errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
            <button className="btn btn-primary">Login</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default SignIn;
