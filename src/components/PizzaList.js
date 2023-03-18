import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
// line 14
// <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
//         <GatsbyImage image={pizza.childImageSharp.gatsbyImageData} alt= {pizza.name} />
function SinglePizza({ pizzaProp }) {
  //  console.log(pizza.slug.current)
  return (
    <div>
      <Link to={`/${pizzaProp.slug.current}`}>
        <h2>
          <span className="mark">{pizzaProp.name}</span>
        </h2>

        <GatsbyImage
          image={pizzaProp.image.asset.gatsbyImageData}
          alt={pizzaProp.name}
        />
      </Link>
    </div>
  );
}

export default function PizzaList({ pizzaTreasure }) {
  //console.log(pizzaTreasure)
  return (
    <div>
      {pizzaTreasure.map((pizza) => (
        <SinglePizza key={pizza.id} pizzaProp={pizza} />
      ))}
    </div>
  );
}
