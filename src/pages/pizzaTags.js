// pages / pizzaTags.js
import { graphql } from "gatsby";
import React from "react";

import TagList from "../components/TagList";

export default function PizzaTagsPage({data}) {
//   console.log(data.pizzas.nodes)

//   export const query = graphql`
//   query TagQuery($toppingRegex: [String]) {
//     pizzas: allMarkdownRemark(
//       filter: {
//         frontmatter: {
//           tags: {
//             in: $toppingRegex}}}) {
//       nodes {
//         id
//         frontmatter {
//           tags
//           title
//         }
//       }
//     }
//   }
// `;
// <TagList pizzaTreasure={pizzaTreasure} />
//   const pizzaTreasure = data.pizzas.nodes;
  return (
    <>
      <div>

        <p>tags</p>
      </div>
    </>
  );
}
