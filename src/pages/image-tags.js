// pages / image-tags.js
import { graphql } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
// import styled from "styled-components";

// const PizzaGrid = styled.div`
//   display: grid;
//   grid-gap: 2rem;
//   grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

// `;

export default function ImageTagPage({ data, pageContext }) {
  // const bakingTreasure = data.supplies;
  //  console.log(bakingTreasure)

  return (
    <>
      <div>
        <h2 className="mark"> {data.supplies.name}</h2>
        <GatsbyImage
          image={data.supplies.childImageSharp.gatsbyImageData}
          alt={data.supplies.name}
        />
      </div>
    </>
  );
}
// TODO remove childImageSharp
export const query = graphql`
  query ImageTagQuery($id: String) {
    supplies: file(id: { eq: $id }) {
      childImageSharp {
        gatsbyImageData(width: 1333, placeholder: BLURRED, formats: AUTO)
      }
      name
      id
    }
  }
`;
