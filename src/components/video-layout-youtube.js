import { Box, Container, Typography } from "@mui/material";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Videos from "./videos";
// import { Link } from "gatsby";
// <header>
// <Link to="/">
//   <span role="img" aria-label="Navigate home">
//     📺
//   </span>
// </Link>
// </header>

const VideoLayout = ({ title, html }) => {
  return (
    <>
      <div className="container">
        <main>
          <Box sx={{ pt: 12 }}>
            <Container maxWidth="content">
              <Typography variant="overline" component="h1">
                <h1>{title}</h1>
              </Typography>
              <br />
              <br />
              <div
                className="video-container"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </Container>
          </Box>
          <div>
            <Videos />
          </div>
        </main>
      </div>
    </>
  );
};

export default VideoLayout;
