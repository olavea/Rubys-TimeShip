import { graphql } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const PizzaGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

`;

export default function SinglePizzaPage({data}) {
  return (
    <PizzaGrid>
      <div>
        <div dangerouslySetInnerHTML={{ __html: data.supplies.html }}></div>
        <p>{data.supplies.frontmatter.title}</p>
      </div>
    </PizzaGrid>
  )
};

export const query = graphql`
  query MdQuery($catsby: String!) {
    supplies: markdownRemark(id: {eq: $catsby}) {
        frontmatter {
            title
        }
        html
    }
  }
`;