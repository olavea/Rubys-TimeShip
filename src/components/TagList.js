// components / TagList.js
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
// line 14
// <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
//         <GatsbyImage image={pizza.childImageSharp.gatsbyImageData} alt= {pizza.name} />
function SinglePizza({ pizza }) {
  console.log(pizza)
  return (
    <div>
      <Link to={`topping/${pizza.toppings.tags}`}>
        <h2>
          <span className="mark">{pizza.toppings.tags}</span>

        </h2>

      </Link>
    </div>
  );
}

export default function TagList({ bakingTreasure }) {
  // console.log(pizzaTreasure)
  return (
    <div>
      {bakingTreasure.map((pizza) => (
        <SinglePizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
}