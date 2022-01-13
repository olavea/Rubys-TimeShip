// src/pages/olacast/{youTubeEmbed.id}.js
import React from "react";
import { graphql } from "gatsby";
import VideoLayout from "../../components/video-layout";

//              E. EmbedOneVideoPage
export default function EmbedOneVideoPage({ data }) {
  return <VideoLayout {...data.youTubeEmbed} />;
};

//              S. Sing $id:String
export const query = graphql`
  query($id: String) {
    youTubeEmbed(id: { eq: $id }) {
      title
      html
    }
  }
`;
