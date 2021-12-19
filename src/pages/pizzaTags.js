// pages / pizzaTags.js
import { graphql } from "gatsby";
import React from "react";

import TagList from "../components/TagList";
import ToppingsFilter from "../components/ToppingsFilter";
//s<ToppingsFilter activeTopping={pageContext.topping} />

export default function PizzaTagsPage({ data, pageContext }) {
//   console.log(data)
   const bakingTreasure = data.bakingMarkdown.nodes;
  return (
    <>
      <div>

        <TagList bakingTreasure={bakingTreasure} />
        <p>tags</p>
      </div>
    </>
  );
}

export const query = graphql`
  query TagQuery($topping: [String]) {
    bakingMarkdown: allMarkdownRemark(
      filter: {
        frontmatter: {
          tags: {
            in: $topping}}}) {
      nodes {
        id
        toppings: frontmatter {
          tags
          title
        }
      }
    }
  }
`;