// gatsby-node.js
//              1. ↪️ Captain createPages hook ↩️
async function bakeImagesIntoGoodies({ graphql, actions }) {
//              2. bakingSong = Lilly the Bunny require the bakingSong from granny Shark's gingerbread Recipe
  const bakingSong = require.resolve('./src/templates/Recipe.js')
//              3. bakingSupplies: files in folders
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
//              4. Loop over the file nodes and for each create a page
//              console.log(data.bakingSupplies.edges);
  data.bakingSupplies.nodes.forEach((ahoyCookie, index) => {
//             console.log(ahoyCookie.id);
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
        fox: 'is hungry for kitten',
        id: ahoyCookie.id,
      },
//              D. Don't Show Goodies to Fox
//              and maybe get bitten. 🎩
      defer: index + 1 > 2,
//              A. 🦊
//              B. 🐰
//              C. 🐯
//              D. 🎩 DSG
    })
  });
};

// 5
async function bakeMarkdownIntoGoodies({ graphql, actions }) {

  //6 bakingMarkdownSong =
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
  //              8. Loop over the file nodes and for each create a page
  //              console.log(data.bakingSupplies.edges);
  data.bakingMarkdown.nodes.forEach((ahoyCookie) => {
    // console.log(ahoyCookie);
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
        //              D. Don't Show Goodies to Fox
      //   //              and maybe get bitten. 🎩
      //   defer: index + 1 > 2,
      //   //              A. 🦊
        //              B. 🐰
        //              C. 🐯
        //              D. 🎩 DSG
    })
  });
}

//              9. ↪️ Captain createPages hook ↩️
async function bakeTagsIntoGoodies({ graphql, actions }) {
  //console.log(`turning tags into pages`)
  //              10. bakingSong = Lilly the Bunny require the bakingSong from granny Shark's gingerbread Recipe
  const bakingSongTags = require.resolve('./src/pages/pizzaTags.js')
  //              11. bakingSupplies: tags in markdown files
    const { data } = await graphql(`{
      bakingTags: allMarkdownRemark {
        nodes {
          id
          frontmatter {
            tags
          }
        }
      }
    }`)
  //              12. tags
  //console.log(data);
  data.bakingTags.nodes.forEach((ahoyCookie) => {
   console.log(ahoyCookie.id);
      actions.createPage({
      //   //              A. «Ahoy! Cookie?!»
      //   //              Cap'n Fox shouts and embarks. 🦊
        path: `${ahoyCookie.frontmatter.tags}`,
      //   //              B. Bunny sings badly
      //   //              and bakes baby sharks. 🐰
        component: bakingSongTags,
      //   //              C. Catsby looks tasty
      //   //              Fox gets hungry for kitten. 🐯
        context: {
          fox: 'is hungry for kitten',
          id: ahoyCookie.id,
        },
        //              D. Don't Show Goodies to Fox
      //   //              and maybe get bitten. 🎩
      //   defer: index + 1 > 2,
      //   //              A. 🦊
        //              B. 🐰
        //              C. 🐯
        //              D. 🎩 DSG
    })
  })
}

exports.createPages = async (params) => {
  // create pages dynamically
  // wait for all promises to be resolved before finishing this function
  await Promise.all([
    bakeImagesIntoGoodies(params),
    bakeMarkdownIntoGoodies(params),
    bakeTagsIntoGoodies(params),
  ])


}