import { graphql } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

// <h2 className="mark"> {data.supplies.name}</h2>
// <GatsbyImage image={data.supplies.childImageSharp.gatsbyImageData} alt= {data.supplies.name} />


const PizzaGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

`;

export default function SingleImagePage({data}) {
  return (
    <PizzaGrid>
      <div>
        <h2 className="mark"> {data.supplies.name}</h2>
        <GatsbyImage image={data.supplies.image.asset.gatsbyImageData} alt= {data.supplies.name} />
      </div>
    </PizzaGrid>
  )
};

export const query = graphql`
  query MySQLQuery($catsby: String!) {
    supplies: sanityPizza(id: {eq: $catsby}) {
      id
      name
      image {
        asset {
            gatsbyImageData(width: 1333, placeholder: BLURRED, formats: AUTO)
        }
      }
    }
  }
`;