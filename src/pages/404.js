import React from "react";
import { Link } from "gatsby";
import { SiteHeader } from "../components/site-header";

const NotFoundPage = () => {
  return (
    <main>
      <SiteHeader tagline="404">
        <h1>Page not found</h1>
      </SiteHeader>
      <p>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
