import { graphql } from "gatsby";
import React from "react";
import Img from 'gatsby-image'

export default function SinglePizzaPage({data}) {

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
query {
  storyblokEntry(slug: {eq: "gingerbread-cookies"}) {
    field_image_string
  }
}
`;
