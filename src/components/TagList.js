import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
// line 14
// <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
//         <GatsbyImage image={pizza.childImageSharp.gatsbyImageData} alt= {pizza.name} />
function SinglePizza({ pizza }) {
  return (
    <div>
      <Link to={`tags/${pizza.frontmatter.tags}`}>
        <h2>
          <span className="mark">{pizza.frontmatter.tags}</span>
        </h2>

      </Link>
    </div>
  );
}

export default function TagList({ pizzaTreasure }) {
  console.log(pizzaTreasure)
  return (
    <div>
      {pizzaTreasure.map((pizza) => (
        <SinglePizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
}