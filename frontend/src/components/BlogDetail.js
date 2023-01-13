import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InputLabel, TextField, Typography, Box, Button } from "@mui/material";
const labelStyle = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const BlogDetail = () => {
  const navigate = useNavigate();
  //states
  const [blog, setBlog] = useState();
  const [inputs, setInputs] = useState({});

  //handle inputbox changes
  const handleChange = (e) => {
    setInputs((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  //getting user id
  const id = useParams().id;

  //fetching user blog with id
  const fetchDetails = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  //calling fetchDetails
  useEffect(() => {
    fetchDetails().then((data) => {
      setBlog(data.blog);
      setInputs({
        title: data.blog.title,
        description: data.blog.description,
        imageURL: data.blog.image,
      });
    });
  }, [id]);

  //sending request to the backend
  const sendRequest = async () => {
    const res = await axios
      .put(`http://localhost:5000/api/blog/update/${id}`, {
        title: inputs.title,
        description: inputs.description,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then((data) => console.log(data)).then(()=>navigate("/myBlogs"));
  };

  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            border={3}
            borderColor="linear-gradient(90deg, rgba(0,10,36,1) 0%, rgba(80,9,121,1) 35%, rgba(255,0,83,1) 100%);"
            borderRadius={10}
            boxShadow="10px 10px 20px #ccc"
            padding={3}
            margin={"auto"}
            display="flex "
            flexDirection={"column"}
            width={"80%"}
            marginTop={15}
          >
            <Typography
              fontWeight={"bold"}
              padding={3}
              color="grey"
              variant="h2"
            >
              Post Your Blog
            </Typography>
            <InputLabel sx={labelStyle}>Title</InputLabel>
            <TextField
              value={inputs.title}
              name="title"
              onChange={handleChange}
              margin="auto"
              variant="outlined"
            />
            <InputLabel sx={labelStyle}>Description</InputLabel>
            <TextField
              value={inputs.description}
              name="description"
              onChange={handleChange}
              margin="auto"
              variant="outlined"
            />

            <Button
              variant="contained"
              sx={{ marginTop: 3, borderRadius: 4 }}
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BlogDetail;
