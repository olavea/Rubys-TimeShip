// src/pages/olacast/{youTubeEmbed.id}.js

import React from "react";
import { graphql } from "gatsby";

import VideoLayout from "../../components/video-layout";

const SSGVideoPage = ({ data }) => {
  return <VideoLayout {...data.youTubeEmbed} />;
};

export default SSGVideoPage;

export const query = graphql`
  query($id: String) {
    youTubeEmbed(id: { eq: $id }) {
      title
      html
    }
  }
`;
