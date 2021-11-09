import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import BlogDescription from "./pages/Blog/BlogDescription";
import BlogList from "./pages/Blog/BlogList";
import CreateBlog from "./pages/Blog/CreateBlog";
import CreateUser from "./pages/User/Create.user";
import EditBlog from "./pages/Blog/EditBlog";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/blog/:id" element={<BlogDescription />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/edit/:id" element={<EditBlog />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
