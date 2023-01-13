import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import techBlog from "../images/techBlog.png";
import CardMedia from "@mui/material/CardMedia";
import MyDiyblog from "../images/MyDiyblog.png";
import penBrush from "../images/penBrush.png";
import blogMemories from "../images/blogMemories.png";
import blogMemoriesDoodle from "../images/blogMemoriesDoodle.png";
import MemoriesDoodle from "../images/Memoriesdoodle.png";
import { useSelector } from "react-redux";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div
      style={{
        background: "#4583aa",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Roboto sans-serif",
      }}
    >
      <Container sx={{ textAlign: "center", padding: "140px" }}>
        <Typography display="flex" justifyContent={"center"} variant="h4">
          Publish your passions, your way
        </Typography>
        <Typography
          display="flex"
          justifyContent={"center"}
          sx={{ marginTop: 2 }}
          variant="h6"
        >
          Create a unique and beautiful blog easily
        </Typography>
        {!isLoggedIn && (
          <Button
            LinkComponent={Link}
            to="/auth"
            variant="contained"
            sx={{
              background: "#ff8000",
              marginTop: "35px",
              padding: "20px",
              width: "30%",
            }}
            display="flex"
            alignItem="center"
          >
            CREATE YOUR BLOG
          </Button>
        )}
        <CardMedia
          component="img"
          height="auto"
          image={techBlog}
          alt="Tech blog"
        />
      </Container>

      <Container
        sx={{
          background: "#ff8000",
          padding: "100px",
          minWidth: "100%",
          overflow: "hidden",
          maxHeight: "40rem",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          maxWidth={"36%"}
          marginLeft={"150px"}
          alignItems={"flexStart"}
          marginTop={"150px"}
        >
          <Typography sx={{ fontSize: "2.75rem", lineHeight: "1.1rem" }}>
            Choose the prefect design
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "1.125rem",
              lineHeight: "2rem",
              marginTop: "4.5rem",
            }}
          >
            Create a beautiful blog that fits your style.Choose from a selection
            of easy-to-use-templates- all with flexible layouts and hundreds of
            background images - or design something new
          </Typography>
        </Box>
        <CardMedia
          sx={{
            width: "59%",
            left: "48rem",
            bottom: "25rem",
            overflow: "hidden",
            position: "relative",
          }}
          component="img"
          height="auto"
          maxWidth="56.24rem"
          image={MyDiyblog}
          alt="Tech blog"
        />
        <CardMedia
          sx={{
            width: "30%",
            left: "45rem",
            bottom: "65rem",
            overflow: "hidden",
            position: "relative",
          }}
          component="img"
          height="auto"
          maxWidth="56.24rem"
          image={penBrush}
          alt="Tech blog"
        />
      </Container>

      <Container
        sx={{
          background: "#bc382e",
          padding: "100px",
          minWidth: "100%",
          overflow: "hidden",
          maxHeight: "31rem",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          maxWidth={"36%"}
          marginLeft={"150px"}
          alignItems={"flexStart"}
          marginTop={"100px"}
        >
          <Typography sx={{ fontSize: "2.75rem", lineHeight: "1.1rem" }}>
            Hang onto your memories
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "1.125rem",
              lineHeight: "2rem",
              marginTop: "4.5rem",
            }}
          >
            Save the moments that matter. Blogger lets you safely store
            thousands of posts,photos and more with Google.
          </Typography>
        </Box>{" "}
        <CardMedia
          sx={{
            width: "17%",
            left: "76rem",
            bottom: "15rem",
            overflow: "hidden",
            position: "relative",
          }}
          component="img"
          height="auto"
          maxWidth="56.24rem"
          image={blogMemories}
          alt="Tech blog"
        />
        <CardMedia
          sx={{
            width: "23%",
            left: "60rem",
            bottom: "33rem",
            overflow: "hidden",
            position: "relative",
          }}
          component="img"
          height="auto"
          maxWidth="56.24rem"
          image={blogMemoriesDoodle}
          alt="Tech blog"
        />
        <CardMedia
          sx={{
            width: "20%",
            left: "52rem",
            bottom: "45rem",
            overflow: "hidden",
            position: "relative",
          }}
          component="img"
          height="auto"
          maxWidth="56.24rem"
          image={MemoriesDoodle}
          alt="Tech blog"
        />
      </Container>
    </div>
  );
};

export default Home;
