import React from "react";
import { Link } from "gatsby";

const VideoLayout = ({ title, html }) => {
  return (
    <>
      <header>
        <Link to="/">
          <span role="img" aria-label="Navigate home">
            📺
          </span>
        </Link>
      </header>
      <article>
        <h1 className="mark">{title}</h1>
        <div
          className="video-container"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </>
  );
};

export default VideoLayout;
