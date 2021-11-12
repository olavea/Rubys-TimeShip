import React from "react"
import { graphql } from "gatsby";

export default function SinglePizzaPieratePage({ data }) {
    return <h1>🦈 = {data.sharkName.name}</h1>
};
export const query = graphql`
    query($slug: String!) {
        sharkName: sanityPizza(slug: {current: {eq: $slug}}) {
            name
        }
    }

`;