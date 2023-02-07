import React from "react";
import { Link } from "gatsby";
import { AppBar, Toolbar, Button, Container } from "@mui/material";

import { Logo } from "./logo";

export const SiteHeader = ({ children, tagline }) => {
  return (
    <AppBar sx={{ pt: 1, pb: 0.5 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button component={Link} to="/" sx={{ ml: -1.5 }}>
            <Logo height="2.5rem" /> 🏴‍☠️ Piraty Ola World!
          </Button>
          {tagline}
          {children}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
