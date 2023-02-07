import React from "react";
import { Link } from "gatsby";

export default function Nav({ data }) {
  return (
    <>
      <ul>
        <li>
          <Link to="/">⛵ Ola</Link>
        </li>
        <li>
          <Link to="/olacast/">📺 olaCast</Link>
        </li>
        <li>
          <Link to="/pizzas/">🖼️ Images </Link>
        </li>
        <li>
          <Link to="/pirates">💜 & Friends</Link>
        </li>
      </ul>
    </>
  );
}
