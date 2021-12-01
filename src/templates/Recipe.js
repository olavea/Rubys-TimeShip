import { graphql } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import Img from "gatsby-image"

export default function SinglePizzaPage({data}, props) {
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
        <p> 🦈: {data.file.name}  🔽 GatsbyImage {data.allFile.edges.next.name}   🔽 / 🔼 img 🔼</p>
        <p></p>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt= {data.file.name} />
      </div>
    )
};
//          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
export const query = graphql`
query MyQuery($id: String!) {
  file(id: {eq: $id}) {
    id
    name
    publicURL
    childImageSharp {
      gatsbyImageData(
          width: 1333,
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
    }

  }
  allFile(filter: {id: {eq: $id}}) {
    edges {
      previous {
        name
      }
      next {
        name
      }
    }
  }
}
`;