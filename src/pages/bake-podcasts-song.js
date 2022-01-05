// pages / pizzaTags.js
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

import TagList from "../components/TagList";
// import ToppingsFilter from "../components/ToppingsFilter";
// <ToppingsFilter activeTopping={pageContext.topping} />
//         <TagList bakingTreasure={bakingTreasure} />
export default function bakePodcastsSong({ data, pageContext }) {
//   console.log(data)
//   const bakingTreasure = data.supplies.nodes;
  return (
    <>
      <div className="center">
        <GatsbyImage image={data.pirates.image.asset.gatsbyImageData} />
        <h2>
          <span className="mark">{data.pirates.name}</span>
        </h2>
        <p>{data.pirates.description}</p>


      </div>
    </>
  );
}

export const query = graphql`
  query ($catsby: String!) {
    pirates: sanityPerson(slug: {current: {eq: $catsby}}) {
      name
      id
      description
      image {
        asset {
          gatsbyImageData(width: 800, placeholder: BLURRED, formats: AUTO)
        }
      }
    }
  }
`;