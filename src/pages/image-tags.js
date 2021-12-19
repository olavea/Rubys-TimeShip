// pages / image-tags.js
import { graphql } from "gatsby";
import React from "react";
//import ImageTagsFilter from "../components/ImageTagFilter";
//<ImageTagsFilter  />
// import TagList from "../components/TagList";
// <TagList bakingTreasure={bakingTreasure} />
//  import ToppingsFilter from "../components/ToppingsFilter";
//          <ToppingsFilter activeTopping={pageContext.topping} />
export default function ImageTagPage({ data, pageContext }) {

  const bakingTreasure = data.bakingSupplies.nodes;
  //console.log(bakingTreasure)
//  query TagQuery($id: String) {
//     allFile(filter: {$id: {eq: "3d079acb-a938-51c2-98e3-18d7757fb8f7"}}) {
//       nodes {
//         name
//         id
//       }
//     }
//   }



  return (
    <>
      <div>

        <p>{bakingTreasure.name}</p>
        <p>tags</p>
      </div>
    </>
  );
}

export const query = graphql`
  query ImageTagQuery($id: String) {
    bakingSupplies: allFile(filter: {id: {eq: $id}}) {
      nodes {
        name
        id
      }
    }
  }
`;