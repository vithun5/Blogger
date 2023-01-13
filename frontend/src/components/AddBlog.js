import { InputLabel, TextField, Typography, Box, Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./utils";

const labelStyle = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const AddBlog = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setInputs((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/blog/add", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: localStorage.getItem("userId"),
      })
      .catch((err) => console.log(err));
    console.log("rsessss", res);
    const data = await res.data;
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendRequest()
      .then((data) => console.log(data))
      .then(navigate("/myBlogs"));
  };
  return (
    <div>
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
            className={classes.font}
            fontWeight={"bold"}
            padding={3}
            color="grey"
            variant="h2"
          >
            Post Your Blog
          </Typography>
          <InputLabel className={classes.font} sx={labelStyle}>
            Title
          </InputLabel>

          <TextField
            className={classes.font}
            value={inputs.title}
            name="title"
            onChange={handleChange}
            margin="auto"
            variant="outlined"
          />
          <InputLabel className={classes.font} sx={labelStyle}>
            Description
          </InputLabel>

          <TextField
            className={classes.font}
            value={inputs.description}
            name="description"
            onChange={handleChange}
            margin="auto"
            variant="outlined"
          />
          <InputLabel className={classes.font} sx={labelStyle}>
            ImageURL
          </InputLabel>

          <TextField
            className={classes.font}
            value={inputs.image}
            name="image"
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
    </div>
  );
};

export default AddBlog;
