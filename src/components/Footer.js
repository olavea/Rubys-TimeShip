import React from "react";

export default function Footer() {
  return (
    <footer>
      <p>
        &copy; Lillian (7{" "}
        <span role="img" aria-label="pirate princess emojis">
          🏴‍☠️👸
        </span>
        ) and Cap'n Ola Vea (43{" "}
        <span role="img" aria-label="pirate ship emojis">
          🏴‍☠️⛵
        </span>
        ) and their cheerful crew of skill-builder pirates 1554 -{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
