import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import slugify from "@sindresorhus/slugify";

const Videos = () => {
  const data = useStaticQuery(graphql`
    {
      allYouTubeEmbed {
        nodes {
          id
          title
        }
      }
    }
  `);

  return (
    <>
        <ul>
        {data.allYouTubeEmbed.nodes.map((video) => {
            return (
            <li key={video.id}>
                <Link to={`/yt/${slugify(video.id)}/`}>{video.title}</Link>
            </li>
            );
        })}
        </ul>
    </>
  );
};

export default Videos;
