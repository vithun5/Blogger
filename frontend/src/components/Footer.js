import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const textStyles = {
  fontWeight: "500",
  color: "#fff",
  display: "block",
  fontSize: "1.17em",
  marginBlockStart: "1em",
  marginBlockEnd: "1em",
  marginInlineEnd: "0px",
  marginInlineStart: "0px",
};

const Footer = () => {
  return (
    <div>
      <Container
        sx={{
          background: "#1d2b34",
          maxWidth: "100% !important",
          
          bottom: "0",
          right: "0",
          left: "0",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          padding={"50px"}
          justifyContent={"flex-start"}
          maxWidth={"80%"}
          style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
        >
          <ul
            style={{ width: "20%", display: "inline-block", listStyle: "none" }}
          >
            <li>
              <h3>
                <Typography sx={textStyles}>Help</Typography>
              </h3>
            </li>
            <li>
              <Typography
                sx={{
                  color: "#cbd1d3",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                }}
              >
                Help Center
              </Typography>
            </li>
            <li>
              <Typography
                sx={{
                  color: "#cbd1d3",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                }}
              >
                Help Forum
              </Typography>
            </li>
            <li>
              <Typography
                sx={{
                  color: "#cbd1d3",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                }}
              >
                Video Tutorials
              </Typography>
            </li>
          </ul>
          <ul style={{ width: "20%", listStyle: "none" }}>
            <li>
              <h3>
                <Typography sx={textStyles}>Community</Typography>
              </h3>
            </li>
            <li>
              <Typography
                sx={{
                  color: "#cbd1d3",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                }}
              >
                Blogger Buzz
              </Typography>
            </li>
          </ul>
          <ul style={{ width: "20%", listStyle: "none" }}>
            <li>
              <h3>
                <Typography sx={textStyles}>Developers</Typography>
              </h3>
            </li>
            <li>
              <Typography
                sx={{
                  color: "#cbd1d3",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                }}
              >
                Blogger API
              </Typography>
            </li>
            <li>
              <Typography
                sx={{
                  color: "#cbd1d3",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                }}
              >
                Developer Forum
              </Typography>
            </li>
          </ul>
        </Box>
        <hr style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }} />
        <br />

        <Box padding={"50px"} maxWidth={"80%"}>
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              listStyle: "none",
              color: "#fff",
            }}
          >
            <li>
              {" "}
              <Typography>Terms of Service</Typography>
            </li>
            <li>
              <Typography sx={{ padding: "0 1.25rem" }}>Privacy</Typography>
            </li>
            <li>
              {" "}
              <Typography sx={{ padding: "0 1.25rem" }}>
                Content Policy
              </Typography>
            </li>
          </ul>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
