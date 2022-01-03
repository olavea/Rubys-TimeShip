// pages / pizzas.js
import { graphql } from "gatsby";
import React from "react";
import PizzaList from "../components/PizzaList";
import ToppingsFilter from "../components/ToppingsFilter";

export default function PizzasPage({data, pageContext }) {
  //console.log(data.pizzas)
  const pizzaTreasure = data.pizzas.nodes;
  return (
    <>

      <ToppingsFilter activeTool={pageContext.catsby} />
      <PizzaList pizzaTreasure={pizzaTreasure} />
    </>
  );
}

export const query = graphql`
  query PizzaQuery($toolRegex: String) {
    pizzas: allSanityPizza(
      filter: {
        toppings: {
          elemMatch: {
            name: {
              regex: $toolRegex
            }
          }
        }
      }
    ) {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            gatsbyImageData(width: 1333, placeholder: BLURRED, formats: AUTO)
          }
        }
      }
    }
  }
`;


