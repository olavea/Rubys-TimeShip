// src/pages/yt/[youTubeId].js

import React from "react";

import { fetchEmbed } from "../../services/oembed";
import VideoLayout from "../../components/video-layout";
import NotFoundPage from "../404";

const SSRVideoPage = ({ serverData }) => {
  if (serverData) {
    return <VideoLayout {...serverData} />;
  } else {
    return <NotFoundPage />;
  }
};

export default SSRVideoPage;

export async function getServerData({ params }) {
  console.log("SERVER SIDE RENDERING Page for ", params.youTubeId);

  const embedData = await fetchEmbed(params.youTubeId, console);

  return {
    props: embedData
  };
}