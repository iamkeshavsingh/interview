import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import BlogDescription from "./pages/Blog/BlogDescription";
import BlogList from "./pages/Blog/BlogList";
import CreateBlog from "./pages/Blog/CreateBlog";
import EditBlog from "./pages/Blog/EditBlog";
import { fetchUserDetails } from "./store/actions/user/user.action";

function AppRoutes() {

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) dispatch(fetchUserDetails());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDescription />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/edit/:id" element={<EditBlog />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
