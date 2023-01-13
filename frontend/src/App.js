import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import { authActions } from "./store";
import { useDispatch, useSelector } from "react-redux";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { appBarClasses } from "@mui/material";
import './'
function App() {
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispath(authActions.login());
    }
  }, [dispath]);
  return (
    <div>
      <React.Fragment>
        <header>
          <Header />
        </header>
        <main style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {!isLoggedIn ? (
              <Route path="/auth" element={<Auth />} />
            ) : (
              <>
                <Route path="/Blogs" element={<Blogs />} />
                <Route path="/myBlogs" element={<UserBlogs />} />
                <Route path="/myBlogs/:id" element={<BlogDetail />} />
                <Route path="/blogs/add" element={<AddBlog />} />
              </>
            )}
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    </div>
  );
}

export default App;
