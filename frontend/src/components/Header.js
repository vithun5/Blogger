import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Box,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import blogLogo from "../images/blogLogo.png";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import { useStyles } from "./utils";
import "./navbar.css";

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispath = useDispatch();
  const [navbar, setNavbar] = useState(false);
  const [value, setValue] = useState();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  // navbar ? "navbarAfterScroll" : "navbarBeforescroll"
  return (
    <div>
      <AppBar
        className={navbar ? "navbarAfterScroll" : "navbarBeforescroll"}
       
      >
        <Toolbar>
          <CardMedia
            onClick={(e) => navigate("/")}
            sx={{ width: 30 }}
            className="imageLogo"
            component="img"
            height="30 !important"
            image={blogLogo}
            alt="blog logo"
          />
          <Typography
            sx={{ marginLeft: 4, fontFamily: "Roboto sans-serif " }}
            className={classes.font}
            onClick={(e) => navigate("/")}
            variant="h6"
          >
            Blogger
          </Typography>
          {isLoggedIn && (
            <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab
                  className={classes.font}
                  LinkComponent={Link}
                  to="/blogs"
                  label="All Blogs"
                />
                <Tab
                  className={classes.font}
                  LinkComponent={Link}
                  to="/myBlogs"
                  label="My Blogs"
                />
                <Tab
                  className={classes.font}
                  LinkComponent={Link}
                  to="/blogs/add"
                  label="Add Blog"
                />
              </Tabs>
            </Box>
          )}
          <Box display="flex" marginLeft="auto">
            {!isLoggedIn && (
              <>
                {" "}
                <Button
                  LinkComponent={Link}
                  to="/auth"
                  variant="contained"
                  sx={{ margin: 1, borderRadius: 10 }}
                  color="warning"
                >
                  Login
                </Button>
              </>
            )}
            {isLoggedIn && (
              <Button
                onClick={() => dispath(authActions.logout())}
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
