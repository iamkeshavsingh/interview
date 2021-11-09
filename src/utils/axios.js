import axios from "axios";

export const blogAxios = axios.create({
  baseURL: "http://rohanpahwa71.pythonanywhere.com/blog",
});

export const blogAxiosProtected = axios.create({
  baseURL: "http://rohanpahwa71.pythonanywhere.com/blog",
});

blogAxiosProtected.interceptors.request.use((request) => {
  var token = localStorage.getItem("token");
  request.headers["Authorization"] = "token " + token;
  return request;
});
