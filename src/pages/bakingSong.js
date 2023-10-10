import React from "react";
import { graphql } from "gatsby";

const ComponentName = ({ data }) => <p>JSON.stringify(data, null, 4)</p>;

// export const query = graphql`
//   {
//     __typename
//   }
// `

export default ComponentName;
