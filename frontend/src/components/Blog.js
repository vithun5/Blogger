import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStyles } from "./utils";

const Blog = ({ title, description, imageURL, userName, isUser, id }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleEdit = (e) => {
    navigate(`/myBlogs/${id}`);
  };

  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:5000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = (e) => {
    deleteRequest().then((data) => console.log(data));
  };
  return (
    <div>
      <Card
        sx={{
          margin: "auto",
          width: "40%",
          mt: 16,
          marginBottom: "40px",
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover:": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        {isUser && (
          <Box display="flex">
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <EditIcon color="warning" />{" "}
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon color="error" />
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar
              className={classes.font}
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
            >
              {userName.charAt(0)}
            </Avatar>
          }
          title={title}
        />
        <CardMedia component="img" height="194" image={imageURL} alt={title} />

        <CardContent>
          <hr />
          <br />
          <Typography
            className={classes.font}
            variant="body2"
            color="text.secondary"
            fontSize="1.4rem"
            lineHeight="1.5rem"
            // fontWeight="300px !important"
          >
            <b>{userName}</b> {":- "}
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Blog;
