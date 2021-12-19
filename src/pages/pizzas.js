// pages / pizzas.js
import { graphql } from "gatsby";
import React from "react";
import PizzaList from "../components/PizzaList";
import ToppingsFilter from "../components/ToppingsFilter";

export default function PizzasPage({data}) {
  //console.log(data.pizzas)
  const pizzaTreasure = data.pizzas.nodes;
  return (
    <>
      <ToppingsFilter />
      <PizzaList pizzaTreasure={pizzaTreasure} />
    </>
  );
}

export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
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


