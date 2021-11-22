import { graphql } from "gatsby";
import React from "react";

//              0. ↪️ createPages hook ↩️

//              1. bakingSong = Lilly the Bunny require granny Shark's recipe

//              2. Baking supplies = image nodes in Storyblok

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
    return (
        <div>
            <img
                src={`https://${ data.storyblokEntry.field_image_string }`}
                alt="ginger"
            />
            <p>🦈</p>
        </div>
    )
}

export const query = graphql`
query($id: String!) {
  storyblokEntry(id: {eq: $id}) {
    field_image_string
  }
}
`;
