import React from "react"
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function SinglePizzaPieratePage({ data }) {
    return (
        <div>
            <p>🦈yCookie  = </p>
            <GatsbyImage
                image={data.sharkName.gatsbyImageData}
                alt="ginger"
            />

            <h1>🦈 = {data.sharkName.id}</h1>
        </div>
    )
};
// This needs to be dynamic
// based on the id passed in
// via context in gatsby-node.js
export const query = graphql`
    query MyQuery($id: String) {
        sharkName: sanityImageAsset(id: {eq: $id}) {
            id
            gatsbyImageData(width: 800)
        }
    }
`;




