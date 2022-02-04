import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import slugify from "@sindresorhus/slugify";

const Olacast = () => {
  const data = useStaticQuery(graphql`
{
    allYouTubeEmbed: allOlaTubeOemBed {
      nodes {
        id
        data {
          title
          html
          thumbnail_url
        }
      }
    }
  }
  `);

  return (
    <>
        <h2 className="mark">OlaCast</h2>
        <ul>
        {data.allYouTubeEmbed.nodes.map((video) => {
            return (
            <li key={video.id}>
                <Link to={`/olacast/${slugify(video.id)}/`}>{video.data.title}</Link>
            </li>
            );
        })}
        </ul>
    </>
  );
};

export default Olacast;
