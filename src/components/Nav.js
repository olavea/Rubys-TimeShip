import React from "react";
import { Link } from "gatsby";
// import styled from "styled-components";
// import Logo from "./Logo";

// const NavStyles = styled.nav`
//   margin-bottom: 3rem;
//   .logo {
//     transform: translateY(-25%);
//   }
//   ul {
//     margin: 0;
//     padding: 0;
//     text-align: center;
//     list-style: none;
//     display: grid;
//     grid-template-columns: 1fr 1fr auto 1fr 1fr;
//     grid-gap: 2rem;
//     align-items: center;
//     margin-top: -6rem;
//   }
//   li {
//     --rotate: -2deg;
//     transform: rotate(var(--rotate));
//     order: 1;
//     &:nth-child(1) {
//       --rotate: 1deg;
//     }
//     &:nth-child(2) {
//       --rotate: -2.5deg;
//     }
//     &:nth-child(4) {
//       --rotate: 2.5deg;
//     }
//     &:hover {
//       --rotate: 3deg;
//     }
//   }
//   a {
//     font-size: 2rem;
//     text-decoration: none;
//     &:hover {
//       color: var(--red);
//     }
//     &[aria-current="page"] {
//       color: var(--red);
//     }
//   }
// `;

export default function Nav({ data }) {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Cap'n Ola Vea ⛵</Link>
        </li>
        <li>
          <Link to="/treasure-negotiation-of-loot"> Paid Stuff 💲</Link>
        </li>
        <li>
          <Link to="/pirates">Free Stuff 💜</Link>
        </li>
        <li>
          <Link to="/olacast/">olaCast 📺</Link>
        </li>
        <li>
          <Link to="/pizzas/">Images 🖼️</Link>
        </li>
      </ul>
    </>
  );
}
