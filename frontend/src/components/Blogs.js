import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "../components/Blog";
import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/api/blog")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);

  return (
    <div>
      {blogs &&
        blogs.map((blog, index) => (
          <Blog
            id={blog._id}
            key={index}
            isUser={localStorage.getItem("userId") === blog.user._id}
            title={blog.title}
            description={blog.description}
            imageURL={blog.image}
            userName={blog.user.name}
          />
        ))}
      {blogs && blogs.length <= 0 && (
        <Container
          style={{
            background: "#4583aa",
            minHeight: "100vh",
            maxWidth: "100%",
          }}
        >
          {" "}
          <Box
            style={{
              paddingTop: "20%",
              textAlign: "center",
            }}
          >
            <Typography variant="h3">No Blogs to Show</Typography>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Button
              variant="contained"
              style={{ padding: "15px", width: "30%" }}
              LinkComponent={Link}
              to="/blogs/add"
            >
              Create Your blogs
            </Button>
          </Box>
        </Container>
      )}
    </div>
  );
};

export default Blogs;
