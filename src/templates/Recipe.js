import { graphql } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

//<p> 🦈: {data.file.name}  🔽 GatsbyImage 🔽 / 🔼 img 🔼</p>
//          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
// <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt= {data.file.name} />
//       <img
// src= {data.file.publicURL}
// alt= {data.file.name}
// />

const PizzaGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

`;

export default function SinglePizzaPage({data}) {
  return (
    <PizzaGrid>
      <div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt= {data.file.name} />
        <h2 className="mark">🦈: {data.file.name}</h2>
      </div>
    </PizzaGrid>
  )
};

export const query = graphql`
  query MyQuery($id: String!) {
    file(id: {eq: $id}) {
      name
      id
      childImageSharp {
        gatsbyImageData(width: 1333, placeholder: BLURRED, formats: AUTO)
      }
    }
  }
`;