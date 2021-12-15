// gatsby-node.js
//              1. Baking Pages with Captain Granny Sharksby
async function bakeImagesIntoGoodies({ graphql, actions }) {
//              2. bakingSong = Lilly the Bunny require the bakingSong from granny Shark's gingerbread Recipe
  const bakingSong = require.resolve('./src/templates/Recipe.js')
//              3. bakingSupplies: image files in folders
  const { data } = await graphql(`{
    bakingSupplies: allFile(
      filter: {sourceInstanceName: {eq: "images"}}
      sort: {fields: name, order: DESC}
    ) {
      nodes {
        name
        id
      }
    }
  }`)
//              4. Loop over the image nodes and for each create a page
  data.bakingSupplies.nodes.forEach((ahoyCookie, index) => {
//              A. 🦊
//              B. 🐰
//              C. 🐯
//              D. 🎩 DSG
    actions.createPage({
//              A. «Ahoy! Cookie?!»
//              Cap'n Fox shouts and embarks. 🦊
      path: `${ahoyCookie.name}`,
//              B. Bunny sings badly
//              and bakes baby sharks. 🐰
      component: bakingSong,
//              C. Catsby looks tasty
//              Fox gets hungry for kitten. 🐯
      context: {
        catsby: 'looks tasty',
        fox: 'gets hungry for kitten',
        id: ahoyCookie.id,
      },
//              D. Don't Show Goodies to Fox
//              and maybe get bitten. 🎩
      defer: index + 1 > 2,
    })
  });
};

//              5
async function bakeMarkdownIntoGoodies({ graphql, actions }) {
//              6 bakingMarkdownSong =
  const bakingMarkdownSong = require.resolve('./src/templates/RecipeMarkdown.js')
//              7. bakingSupplies: files in folders
  const { data } = await graphql(`{
    bakingMarkdown: allMarkdownRemark {
      nodes {
        id
        frontmatter {
          path
        }
      }
    }
  }`)
//              8. Loop over the markdown nodes and for each create a page
  data.bakingMarkdown.nodes.forEach((ahoyCookie) => {
//              A. 🦊
//              B. 🐰
//              C. 🐯
//              D. 🎩 DSG
      actions.createPage({
      //   //              A. «Ahoy! Cookie?!»
      //   //              Cap'n Fox shouts and embarks. 🦊
        path: `${ahoyCookie.frontmatter.path}`,
      //   //              B. Bunny sings badly
      //   //              and bakes baby sharks. 🐰
        component: bakingMarkdownSong,
      //   //              C. Catsby looks tasty
      //   //              Fox gets hungry for kitten. 🐯
        context: {
          fox: 'is hungry for kitten',
          id: ahoyCookie.id,
        },
    })
  });
}

//              9. Captain Granny Sharksby createPages hook ↩️
async function turnToppingsIntoPages({ graphql, actions }) {
//              10. bakingSong = Lilly the Bunny require the bakingSong from granny Shark's gingerbread Recipe
  const bakingToppingSong = require.resolve('./src/pages/pizzaTags.js')
// //              11. bakingSupplies: tags in markdown files
  const { data } = await graphql(`{
    toppings: allMarkdownRemark {
      nodes {
        id
        frontmatter {
          tags
        }
      }
    }
  }`)
//              12. turn toppings into pages with
//              Cap'n Granny Sharksby's createPages hook
  data.toppings.nodes.forEach((ahoyCookie) => {
    ahoyCookie.frontmatter.tags.map((topping) => (
      actions.createPage({
//              A. «Ahoy! Cookie?!»
//              Cap'n Fox shouts and embarks. 🦊
              path: `topping/${topping}`,
//              B. Bunny sings badly
//              and bakes baby sharks. 🐰
              component: bakingToppingSong,
//              C. Catsby looks tasty
//              Fox gets hungry for kitten. 🐯
        //         context: {
        //           topping: ahoyCookie.frontmatter.tags,
        //           toppingRegex: `/${ahoyCookie.frontmatter.tags}/`,
        // //              TODO Regex for Topping
        // //          toppingRegex: `/${ahoyCookie.frontmatter.tags}/i`,
        //         },
      })
    ))
  });
//              13. Pass tag data to pizzaTags.js
}
//              14. export Baking Pages with Captain Granny Sharksby's createPages hook ↩️
exports.createPages = async (params) => {
  // create pages dynamically
  // wait for all promises to be resolved before finishing this function
  await Promise.all([
    bakeImagesIntoGoodies(params),
    bakeMarkdownIntoGoodies(params),
    turnToppingsIntoPages(params),
  ])
//              friends and family and customers and skill builders
}