const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('./src/templates/blog-entry.js')
            // I made my own graphQL query
      resolve(
        graphql(
          `{
           posts: allStoryblokEntry(filter: {field_component: {eq: "Post"}}) {
              edges {
                node {
                  name
                  full_slug
                }
              }
            }
          }`
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
            // I renamed variabe this to allSharks
          const allSharks = result.data.posts.edges

          allSharks.forEach((entry) => {
            // I added deferred: false, just because ....
            // 👇 the name of content type
            if(entry.slug !== "blog") {
              const page = {
                  defer: false,
                  path: `/${entry.node.full_slug}`,
                  component: blogPostTemplate,
                  context: {
                    story: entry.node
                  }
              }
              createPage(page)
            }
          })
        })
      )
    })
}
