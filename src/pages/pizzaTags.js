// pages / pizzaTags.js
import { graphql } from "gatsby";
import React from "react";

import TagList from "../components/TagList";
// import ToppingsFilter from "../components/ToppingsFilter";
// <ToppingsFilter activeTopping={pageContext.topping} />
//         <TagList bakingTreasure={bakingTreasure} />
export default function PizzaTagsPage({ data, pageContext }) {
//   console.log(data)
//   const bakingTreasure = data.supplies.nodes;
  return (
    <>
      <div>


        <p>tags</p>
      </div>
    </>
  );
}

export const query = graphql`
  query TagQuery($catsby: [String]) {
    supplies: allMarkdownRemark(
      filter: {
        frontmatter: {
          tags: {
            in: $catsby}}}) {
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