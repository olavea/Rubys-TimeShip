require("dotenv").config({
  path: `.env.dev`,
})

//              0. ↪️ Captain createPages hook ↩️
exports.createPages = async ({ graphql, actions }) => {
//              1. bakingSong = Lilly the Bunny require.resolve from granny Shark's gingerbread recipe
    const bakingSong = require.resolve('./src/templates/Recipe.js')
//              2. bakingSupplies:  image nodes in WordPress
    const { data } = await graphql(`{
        bakingSupplies: allWpPost(sort: {fields: date, order: DESC}) {
          edges {
            node {
              id
              uri
            }
          }
        }
    }`)
//              Where are the nodes?
    console.log(data.bakingSupplies.edges);
//              3. Loop over the image nodes and for each create a page
//              A. 🦊
//              B. 🐰
//              C. 🐯
//              D. 🎩
    data.bakingSupplies.edges.forEach(windowFullOfBabySharkCookies => {
      actions.createPage({
//              A. 🦊 «Ahoy! A path?!» Shouts Fox and embarks.
// A windowFullOfBabySharkCookies
//              A. 🦊 «Ahoy! A windowFullOfBabySharkCookies ?!» Barks Fox and embarks.
        path: `${windowFullOfBabySharkCookies.node.uri}`,
//              B. 🐰 Bunny sings badly and bakes all the sharks.
//              B. is for bakingSong, sung badly by 🐰 Bunny who bakes bad babySharks.
        component: bakingSong,
//              C. 🐯 is the context: { fox: 'is hungry for kitten' }
        context: {
          fox: 'is hungry for kitten',
          id: windowFullOfBabySharkCookies.node.id,  //babySharkBatch.localFile.id,
        },
//              D. 🎩 They defer the good cookies and maybe get bitten
      })
    });
};