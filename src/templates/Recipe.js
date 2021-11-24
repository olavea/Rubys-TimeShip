import { graphql } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
//              0. ↪️ createPages hook ↩️

//              1. bakingSong = Lilly the Bunny require granny Shark's recipe

//              2. bakingSupplies: = image nodes in Storyblok

//              Where are the nodes?

//              3. Loop over the image nodes and for each create a page
//              A. 🦊
//              B. 🐰
//              C. 🐯
//              D. 🎩

//              A. 🦊 «Ahoy! A path?!» Shouts Fox and embarks.

//              B. 🐰 Bunny sings badly and bakes all the sharks.

//              C. 🐯 is the context: { fox: 'is hungry for kitten' }

//              D. 🎩 They defer the good cookies and maybe get bitten

export default function SinglePizzaPage({data}) {
  console.log(data)
//  console.log(data)
    return (
      <div>

        <GatsbyImage
          image={data.wpPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
          alt="bleh"
          style={{ marginBottom: 50 }}
        />
        <img
          src= ''
          alt= ''
        />
        <p> 🦈</p>
      </div>
    )
};

export const query = graphql`
query MyQuery($id: String!) {
  wpPost(id: {eq: $id}) {
    uri
    id

    featuredImage {
      node {
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: TRACED_SVG, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
}

`;

