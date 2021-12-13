// pages / pizzaTags.js
import { graphql } from "gatsby";
import React from "react";

import TagList from "../components/TagList";

export default function PizzaTagsPage({data}) {
//  console.log(data.pizzas.nodes)
  const pizzaTreasure = data.pizzas.nodes;
  return (
    <>
      <TagList pizzaTreasure={pizzaTreasure} />
    </>
  );
}

export const query = graphql`
  query TagQuery {
    pizzas: allMarkdownRemark {
      nodes {
        id
        frontmatter {
          tags
          title
        }
      }
    }
  }
`;