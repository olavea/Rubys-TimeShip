// src/pages/ola-tube/{youTube.id}.js
import React from "react";
import { graphql } from "gatsby";
import VideoLayout from "../../components/video-layout-youtube";
import { GatsbyImage } from "gatsby-plugin-image";

//              E. EmbedOneVideoPage
export default function EmbedOneVideoPage({ data }) {
  return (
    <>
      <GatsbyImage
        image={data.youTubeEmbed.thumbnail.childImageSharp.gatsbyImageData}
        alt="pizza.name"
      />
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
        title
      }
      fields {
        thumbnailFileId
      }
      thumbnail {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;
