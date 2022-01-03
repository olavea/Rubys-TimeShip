import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const ToppingsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background: var(--grey);
    border-radius: 2px;
    .count {
      background: white;
      padding: 2px 5px;
    }
    &[aria-current='page'] {
      background: var(--yellow);
    }
  }
`;

function countPizzasInToppings(pizzas) {
  // Return the pizzas with counts
//  console.log(pizzas)
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      // check if this is an existing topping
      const existingTopping = acc[topping.id];
      if (existingTopping) {
        //  console.log('Existing Topping', existingTopping.name);
        //  if it is, increment by 1
        existingTopping.count += 1;
      } else {
        //  console.log('New Topping', topping.name);
        // otherwise create a new entry in our acc and set it to one
        acc[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      }
      return acc;
    }, {});
  // sort toppings based on their count
  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedToppings;
}
//              1. bakingToppingsIntoPages with Cap'n Catsby and Lilly Owlsby
export default function ToppingsFilter({ activeTool }) {


  // How do I  Get a list of all the Pizzas with their toppings
//              3. bakingSupplies: toppings-data-🌲 in Sanity
  const { pizzas } = useStaticQuery(graphql`
    query {
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
          slug {
            current
          }
          id
        }
      }
    }
  `);
//              2. Counting Song = Lilly Owlsby use the Counting Song 🦢 from Wes Bos to
  // Count how many pizzas are in each topping with countingSong
  const toolsWithCountsTreasure = countPizzasInToppings(pizzas.nodes);
  //console.log(toppingsWithCounts);
  // Loop over the list of toppings and display the topping and the count of pizzas in that topping
  // Link it up.. ...  . . .
//              4. Loop over the list of toppings treasure and and display the topping and the count of pizzas in that topping
//              A. «Ahoy topping?!»
  return (
    <ToppingsStyles>
      <Link to="/pizzas">
        <span className="name">All</span>
        <span className="count">{pizzas.nodes.length}</span>
      </Link>
      {toolsWithCountsTreasure.map((topping) => (
        <Link
          to={`/tool/${topping.name}`} // A. «Ahoy topping?!»
          key={topping.id}
          className={topping.name === activeTool ? 'active' : ''}
        >
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </ToppingsStyles>
  );
}