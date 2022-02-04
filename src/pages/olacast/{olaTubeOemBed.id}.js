// src/pages/olacast/{olaTubeOemBed.id}.js
import React from "react";
import { graphql } from "gatsby";
import VideoLayout from "../../components/video-layout";

//              E. EmbedOneVideoPage
export default function EmbedOneVideoPage({ data }) {
  return <VideoLayout {...data.youTubeEmbed.data} />;
};

//              S. Sing $id:String
export const query = graphql`
  query($id: String) {
    youTubeEmbed: olaTubeOemBed(id: { eq: $id }) {
      data {
        title
        html
      }
    }
  }
`;
