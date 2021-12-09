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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

`;

export default function SinglePizzaPage({data}) {
  return (
    <PizzaGrid>

      <div>
        <h2 className="mark">🦈: {data.markdownRemark.frontmatter.title}</h2>
        <div      dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </PizzaGrid>
  )
};

export const query = graphql`
query MyQuery($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        city
        country
        endDate(formatString: "MMMM DD, YYYY")
        path
        startDate(formatString: "MMMM DD, YYYY")
        tags
        title
        url
      }
    }
}
`;