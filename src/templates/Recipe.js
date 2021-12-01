import { graphql } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
// import Img from "gatsby-image"

export default function SinglePizzaPage({data}, previous) {
  console.log(data)
//  console.log(data)
    return (
      <div>
        <div
          className="blog-post-content"

        />

        <img
          src= {data.file.publicURL}
          alt= {data.file.name}
        />
        <p> 🦈: {data.file.name}  🔽 GatsbyImage 🔽 / 🔼 img 🔼</p>
        <p>{previous}</p>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt= {data.file.name} />
      </div>
    )
};

export const query = graphql`
query MyQuery {
  file(id: {eq: "92948aab-a5da-592d-bbed-e854c818e6ed"}) {
    id
    name
    publicURL
    childImageSharp {
      gatsbyImageData(width: 1333, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
}
`;