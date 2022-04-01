// src/pages/ola-tube/{youTube.id}.js
import React from "react";
import { graphql } from "gatsby";
import VideoLayout from "../../components/video-layout-youtube";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, Container, Typography } from "@mui/material";

export default function EmbedOneVideoPage({ data }) {
  return (
    <>
      <div className="container">
        <main>
          <Box sx={{ pt: 12 }}>
            <Container maxWidth="content">
              <GatsbyImage
                image={
                  data.youTubeEmbed.thumbnail.childImageSharp.gatsbyImageData
                }
                alt="pizza.name"
              />
            </Container>
          </Box>
        </main>
      </div>
      <VideoLayout {...data.youTubeEmbed.oEmbed} />;
    </>
  );
}

//              S. Sing $id:String
export const query = graphql`
  query ($id: String) {
    youTubeEmbed: youTube(id: { eq: $id }) {
      id
      oEmbed {
        html
        url
        title
      }
    }
  }
`;
