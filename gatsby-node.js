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


//              1.
async function bakeMarkdownIntoGoodies({ graphql, actions }) {
//              2. bakingMarkdownSong =
  const bakingMarkdownSong = require.resolve('./src/templates/RecipeMarkdown.js')
//              3. bakingSupplies: files in folders
  const { data } = await graphql(`{
    bakingMarkdown: allMarkdownRemark {
      nodes {
        id
        toppings: frontmatter {
          path
        }
      }
    }
  }`)
//              4. Loop over the markdown nodes and for each create a page
  data.bakingMarkdown.nodes.forEach((ahoyCookie) => {
//              A. 🦊
//              B. 🐰
//              C. 🐯
//              D. 🎩 DSG
      actions.createPage({
      //   //              A. «Ahoy! Cookie?!»
      //   //              Cap'n Fox shouts and embarks. 🦊
        path: `${ahoyCookie.toppings.path}`,
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

//              1. Captain Granny Sharksby createPages hook ↩️
async function turnToolsIntoPages({ graphql, actions }) {
//              2. bakingSong = Lilly the Bunny require the bakingSong from granny Shark's gingerbread Recipe
  const bakingToolSong = require.resolve('./src/pages/pizzaTags.js')
// //           3. bakingSupplies: tags in markdown files
  const { data } = await graphql(`{
    bakingMarkdown: allMarkdownRemark {
      nodes {
        id
        toppings: frontmatter {
          tags
        }
      }
    }
  }`)
//              4. turn toppings into pages with
//              Cap'n Granny Sharksby's createPages hook
  data.bakingMarkdown.nodes.forEach((ahoyCookie) => {
//              A. 🦊
//              B. 🐰
//              C. 🐯
//              D. 🎩 DSG
      actions.createPage({
//              A. «Ahoy! Cookie?!»
//              Cap'n Fox shouts and embarks. 🦊
              path: `/pizzaTags/topping/${ahoyCookie.toppings.tags}`,
//              B. Bunny sings badly
//              and bakes baby sharks. 🐰
              component: bakingToolSong,
//              C. Catsby looks tasty
//              Fox gets hungry for kitten. 🐯
              context: {
                topping: ahoyCookie.toppings.tags                  ,
                //toppingRegex: `/${ahoyCookie}/`,
      //              TODO Regex for Topping
      //          toppingRegex: `/${ahoyCookie.frontmatter.tags}/i`,
              },
      })
  });
//              5. Pass tag data to pizzaTags.js
}

//              1. Cap'n Granny Sharksby createPages hook ↩️
async function turnToppingsIntoPages({ graphql, actions, }) {
//              2. bakingSong = Lilly the Bunny require the bakingSong for Cap'n granny Shark's Topping Recipe
  const bakingToppingSong = require.resolve('./src/pages/pizzas.js')
//              3. bakingSupplies: toppings in Sanity
  const { data } = await graphql(`{
    bakingToppingSupplies: allSanityTopping(sort: {fields: _createdAt, order: DESC}) {
      nodes {
        name
        id
      }
    }
  }`)
//              4. turn toppings into pages with
//              Cap'n Granny Sharksby's createPages hook
  data.bakingToppingSupplies.nodes.forEach((ahoyCookie, index) => {
    //console.log(ahoyCookie);
    actions.createPage({

      path: `/topping/${ahoyCookie.name}`,
      component: bakingToppingSong,
      context: {
        fox: 'gets hungry for lunch-kitten',
        topping: ahoyCookie.name,
        toppingRegex: `/${ahoyCookie.name}/i`,
      },
      defer: index + 1 > 4,
//              How does Catsby help Lilly make an index of all the toppings?
//              What is the way Lilly makes index travel from start to defer?
//              D. 🤖 Data, go back into our 🤖 Data Catsby 🐯
//              E. 🎩 Every node must be Sorted `order: DESC`
//              F. 🍓 Fields Forever `fields: _createdAt,`
//              E. 🎩 forEach index
//              R. 🐰 DSG index + 1 > 4

      ownerNodeId: ahoyCookie.id,
    })
  })
//              5. Pass tag data to pizzaTags.js
}

//              1. Captain Granny Sharksby createPages hook ↩️
async function turnNamesIntoTags({ graphql, actions }) {
  //              2. bakingTagSong = Lilly the Bunny require the bakingSong from granny Shark's gingerbread Recipe
    const bakingTagSong = require.resolve('./src/pages/image-tags.js')
  // //           3. bakingSupplies: tags in markdown files
    const { data } = await graphql(`{

      bakingTagSupplies: allFile {
          nodes {
            name
            id
          }
        }


    }`)
  //              4. turn toppings into pages with
  //              Cap'n Granny Sharksby's createPages hook
    data.bakingTagSupplies.nodes.forEach((ahoyCookie) => {
  //              A. 🦊
  //              B. 🐰
  //              C. 🐯
  //              D. 🎩 DSG
        actions.createPage({
  //              A. «Ahoy! Cookie?!»
  //              Cap'n Fox shouts and embarks. 🦊
                path: `/image-tags/topping/${ahoyCookie.name}`,
  //              B. Bunny sings badly
  //              and bakes baby sharks. 🐰
                component: bakingTagSong,
  //              C. Catsby looks tasty
  //              Fox gets hungry for kitten. 🐯
                context: {
                  id: ahoyCookie.id,
//                  topping: ahoyCookie.toppings.tags                  ,
                  //toppingRegex: `/${ahoyCookie}/`,
        //              TODO Regex for Topping
        //          toppingRegex: `/${ahoyCookie.frontmatter.tags}/i`,
                },
        })
    });
  //              5. Pass tag data to pizzaTags.js
  }

//              0. export Baking Pages with Captain Granny Sharksby's createPages hook ↩️
exports.createPages = async (params) => {
  // create pages dynamically
  // wait for all promises to be resolved before finishing this function
  await Promise.all([
    bakeImagesIntoGoodies(params),
    bakeMarkdownIntoGoodies(params),
    turnToppingsIntoPages(params),
    turnToolsIntoPages(params),
    turnNamesIntoTags(params),
  ])
//              friends and family and customers and skill builders
}