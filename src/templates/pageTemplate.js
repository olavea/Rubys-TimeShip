import React from "react";
import { graphql, Link } from "gatsby";
import {
  Box,
  Button,
  Container,
  Typography,
  ImageList,
  ImageListItem,
  Link as MuiLink,
} from "@mui/material";
import { PlayArrowRounded as PlayIcon } from "@mui/icons-material";

import { Prose } from "../components/prose";
import { SiteHeader } from "../components/site-header";
import { NewsletterForm } from "../components/newsletter-form";
import { SiteFooter } from "../components/site-footer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function PageTemplate({ data = {}, ...props }) {
  const { frontmatter, html } = data.markdownRemark || {};
  const { title, sections } = frontmatter || {};

  return (
    <>
      <div className="container">
        <SiteHeader>
          <MuiLink component={Link} to="/login" sx={{ ml: "auto", mr: 3 }}>
            Log In
          </MuiLink>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/signup"
            edge="end"
          >
            Get started
          </Button>
        </SiteHeader>

        <main>
          <Box sx={{ pt: 12 }} component="header">
            <Container maxWidth="content">
              <Typography variant="overline" component="h1">
                <h1>{title}</h1>
              </Typography>
            </Container>
          </Box>

          <Container maxWidth="content">
            <Prose html={html} />
          </Container>

          {(sections || []).map((section) => {
            const { title, subtitle, body } = section || {};
            const { image, imageAlt } = section || {};
            const { videos } = section || {};
            const { html } = body?.childMarkdownRemark || {};
            const { path, label } = section.cta || {};
            const { form } = section || {};
            const gatsbyImage = getImage(
              image?.childImageSharp?.gatsbyImageData
            );
            return (
              <Box component="section" sx={{ py: 6 }}>
                <Container maxWidth="content">
                  {title && (
                    <Typography component="h2" variant="h1" gutterbottom>
                      {title}
                    </Typography>
                  )}
                  {subtitle && (
                    <Typography variant="body2" gutterbottom>
                      {subtitle}
                    </Typography>
                  )}
                  {html && <Prose html={html} />}
                  {path && label && (
                    <Button
                      variant="contained"
                      component={Link}
                      to={path}
                      sx={{ my: 2 }}
                    >
                      {label}
                    </Button>
                  )}
                  {form === "newsletter" && <NewsletterForm sx={{ mt: 5 }} />}
                  {videos && (
                    <ImageList
                      cols={2}
                      sx={{
                        m: 0,
                        mx: -2,
                        "&:not(:first-child)": {
                          mt: 5,
                        },
                      }}
                      gap={10}
                    >
                      {videos.map((video, index, { length }) => {
                        const { action, childYouTube } = video;
                        const { title, url } = childYouTube.oEmbed || {};
                        const { gatsbyImage } = childYouTube.thumbnail || {};
                        return (
                          <ImageListItem
                            key={url}
                            cols={
                              index === length - 1 && index % 2 === 0 ? 2 : 1
                            }
                            sx={{ overflow: "hidden" }}
                          >
                            <GatsbyImage image={gatsbyImage} alt={title} />
                            <Button
                              sx={{
                                textTransform: "none",
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                borderRadius: 0,
                                borderTopLeftRadius: (theme) =>
                                  theme.shape.borderRadius,
                              }}
                              size="small"
                              variant="contained"
                              aria-label={`Play ${title}`}
                              href={url}
                              endIcon={<PlayIcon />}
                            >
                              {action || "Watch on YouTube"}
                            </Button>
                          </ImageListItem>
                        );
                      })}
                    </ImageList>
                  )}

                  {gatsbyImage && (
                    <Box sx={{ mx: -2, "&:not(:first-child)": { mt: 5 } }}>
                      <GatsbyImage alt={imageAlt} image={gatsbyImage} />
                    </Box>
                  )}
                </Container>
              </Box>
            );
          })}
        </main>
        <SiteFooter sx={{ pt: 12, pb: 4 }} />
      </div>
    </>
  );
}

export const query = graphql`
  query ($catsbyId: String) {
    markdownRemark(id: { eq: $catsbyId }) {
      html
      frontmatter {
        title
        sections {
          title
          subtitle
          form
          body {
            childMarkdownRemark {
              html
            }
          }
          image {
            childImageSharp {
              gatsbyImageData(width: 500)
            }
          }
          imageAlt
          cta {
            path
            label
          }
          videos {
            childYouTube {
              oEmbed {
                title
                url
              }
              thumbnail {
                gatsbyImage(
                  width: 480
                  height: 270
                  fit: COVER
                  cropFocus: CENTER
                )
              }
            }
            action
          }
        }
      }
    }
  }
`;
