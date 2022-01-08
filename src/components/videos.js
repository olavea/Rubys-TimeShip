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
          thumbnail_url
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
                <Link to={`/olacast/${slugify(video.id)}/`}>{video.title}</Link>
            </li>
            );
        })}
        </ul>
    </>
  );
};

export default Videos;
