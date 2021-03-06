import React from "react";
import { Formik } from "formik";
import { blogAxios } from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { signupSchema } from "../../utils/validationSchema";
import { useDispatch } from "react-redux";
import { fetchUserDetails } from "../../store/actions/user/user.action";
function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function handleSubmit(data) {
    const response = await blogAxios.post("/users/", data);
    localStorage.setItem("token", response.data?.Token);
    dispatch(fetchUserDetails());
    navigate({
      pathname: "/blog",
    });
  }
  return (
    <div>
      <Formik
        initialValues={{
          user: {
            username: "",
            password: "",
          },
          first_name: "",
          last_name: "",
          state: "",
          city: "",
          country: "",
          phone: "",
          user_type: "",
        }}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleSubmit, handleChange, touched, errors }) => {
          console.log(errors)
          return (
            (
              <form onSubmit={handleSubmit}>
                <div className="d-flex">
                  <div className="form-group">
                    <label htmlFor="">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      name="user.username"
                      onChange={handleChange}
                      values={values.user.username}
                    />
                    {touched?.user?.username && errors?.user?.username && (
                      <div className="error">{errors?.user?.username}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="user.password"
                      onChange={handleChange}
                      values={values.user.password}
                    />
                    {touched?.user?.username && errors?.user?.username && (
                      <div className="error">{errors?.user?.username}</div>
                    )}
                  </div>
                </div>
                <div className="d-flex">
                  <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="first_name"
                      onChange={handleChange}
                      values={values.first_name}
                    />
                    {touched.first_name && errors.first_name && (
                      <div className="error">{errors.first_name}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="last_name"
                      onChange={handleChange}
                      values={values.last_name}
                    />
                    {touched.last_name && errors.last_name && (
                      <div className="error">{errors.last_name}</div>
                    )}
                  </div>
                </div>
                <div className="d-flex">
                  <div className="form-group">
                    <label htmlFor="">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                      name="phone"
                      onChange={handleChange}
                      values={values.phone}
                    />
                    {touched.phone && errors.phone && (
                      <div className="error">{errors.phone}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="">City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      name="city"
                      onChange={handleChange}
                      values={values.city}
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="form-group">
                    <label htmlFor="">User Type</label>
                    <select
                      id=""
                      className="form-control"
                      name="user_type"
                      onChange={handleChange}
                      values={values.user_type}
                    >
                      <option value="" disabled selected="selected">
                        Select
                      </option>
                      <option value="normal_user">Normal</option>
                      <option value="admin_user">Admin</option>
                    </select>
                    {touched.user_type && errors.user_type && (
                      <div className="error">{errors.user_type}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="">State</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State"
                      name="state"
                      onChange={handleChange}
                      values={values.state}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    name="country"
                    onChange={handleChange}
                    values={values.country}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Sing Up
                </button>
              </form>
            )
          );
        }}
      </Formik>
    </div>
  );
}

export default SignUp;
