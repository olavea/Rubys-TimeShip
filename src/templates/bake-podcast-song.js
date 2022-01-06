import { graphql } from "gatsby";
import React from "react";

import styled from "styled-components";

const PizzaGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

`;



export default function SinglePizzaPage({data}) {

  return (
    <>
      <div>

        <div dangerouslySetInnerHTML={{ __html: data.supplies.html }}></div>


      </div>
    </>
  )
};


export const query = graphql`
  query MarkdownQuery($catsbySlug: String!) {
    supplies: markdownRemark(
      frontmatter: {
          path: {
              eq: $catsbySlug
          }
        }
    ) {
      frontmatter {
        title
      }
      html
    }
  }
`;