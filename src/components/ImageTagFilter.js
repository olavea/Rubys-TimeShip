import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
//import styled from "styled-components";
//  {toppingsWithCounts.map(topping => (

//     <Link
//     to={`/topping/${topping.toppings}`}
//     key={topping.id}
//     className={topping.toppings === activeTopping ? 'active' : ''}
//   >
//     <span className="name">{topping.toppings}</span>
//     <span className="count">{topping.count}</span>
//   </Link>

//  ))}
// const ToppingsStyles = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 1rem;
//   margin-bottom: 4rem;
//   a {
//     display: grid;
//     grid-template-columns: auto 1fr;
//     grid-gap: 0 1rem;
//     align-items: center;
//     padding: 5px;
//     background: var(--grey);
//     border-radius: 2px;
//     .count {
//       background: white;
//       padding: 2px 5px;
//     }
//     &[aria-current="page"] {
//       background: var(--yellow);
//     }
//   }
// `;
function countImageTags(pizzas) {
  //    console.log(pizzas)
  // Return the pizzas with counts
  const counts = pizzas
    .map((pizza) => pizza.id)
    .reduce((acc, topping) => {
      // check if is, increment by 1
      // const existingTopping = acc[topping];
      // if (existingTopping) {
      //         console.log('bro', existingTopping )
      //     // inc
      //     existingTopping.count += 1;
      // } else {
      //  //console.log(topping.id)
      //     // otherwise create set it to one
      //     acc[topping.id] = {
      //         id: topping.id,
      //         name: topping.toppings,
      //         count: 1,
      //     };
      // }
      const tag = topping;
      return tag;
    }, {});
  // sort based
  //   const sortedToppings = Object.values(counts).sort(
  //      (a,b) => b.count - a.count
  //   );
  return tag;
}

export default function ImageTagsFilter({ activeTopping }) {
  // Get a list of all the toppings
  // Get a list of all the Pizzas with their toppings
  const { pizzas } = useStaticQuery(graphql`
    query {
      pizzas: allFile {
        nodes {
          id
          toppings: name
        }
      }
    }
  `);
  console.clear();
  // Count how many pizzas are in each topping
  const toppingsWithCounts = countImageTags(pizzas.nodes);
  console.log("bleh", toppingsWithCounts);
  // Loop over the list of toppings and display the topping and the count of pizzas in that topping
  // Link it up.. ...  . . .
  return (
    <div>
      <Link to="/pizzas">
        <span className="name">All</span>
        <span className="count">{pizzas.nodes.length}</span>
      </Link>
    </div>
  );
}
