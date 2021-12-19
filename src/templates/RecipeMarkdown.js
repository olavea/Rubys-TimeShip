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
// <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt= {data.file.name} />
// <h2 className="mark">🦈: {data.file.name}</h2>



const PizzaGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

`;

export default function SinglePizzaPage({data}) {
  return (
    <PizzaGrid>
      <div>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
        <p>{data.markdownRemark.frontmatter.title}</p>
      </div>
    </PizzaGrid>
  )
};

export const query = graphql`
  query MdQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
        frontmatter {
            title
        }
        html
    }
  }
`;