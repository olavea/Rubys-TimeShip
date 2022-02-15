import React from "react";
import { graphql, Link } from "gatsby";

const ComponentName = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, sections } = frontmatter;
  return (
    <>
      <div className="container">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {(sections || []).map((section) => {
          const { title } = section || [];
          const { html } = section.body.childMarkdownRemark || [];
          const { path, label } = section.cta || [];
          return (
            <section>
              {title && <h2>{title}</h2>}
              {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
              {path && <Link href={path}>{label}</Link>}
            </section>
          );
        })}
      </div>
    </>
  );
};
export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        sections {
          title
          body {
            childMarkdownRemark {
              html
            }
          }
          cta {
            path
            label
          }
        }
      }
      html
    }
  }
`;

export default ComponentName;
