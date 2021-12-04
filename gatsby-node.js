// gatsby-node.js
// require("dotenv").config({
//   path: `.env.development`,
// })

//              0. ↪️ Captain createPages hook ↩️
exports.createPages = async ({ graphql, actions }) => {
//              1. bakingSong = Lilly the Bunny require.resolve from granny Shark's gingerbread recipe
    const bakingSong = require.resolve('./src/templates/Recipe.js')
//              2. bakingSupplies:  image nodes in WordPress
    console.log('Madness? MADNESS?! This. Is. PAAAageees! 💪😺👢');

    const { data } = await graphql(`{
        bakingSupplies: allFile {
          edges {
            node {
              id
              name
            }
          }
        }
    }`)
    console.log(data.bakingSupplies.edges);
    data.bakingSupplies.edges.forEach(ahoyCookie => {
      actions.createPage({
//              A. 🦊 «Ahoy! Cookie?!» Shouts Fox and embarks.
        path: `${ahoyCookie.node.name}`,
//              B. 🐰 Bunny sings badly and bakes baby sharks.
        component: bakingSong,
//              C. 🐯 is the context: { fox: 'is hungry for kitten' }
        context: {
          fox: 'is hungry for kitten',
          id: ahoyCookie.node.id,  //babySharkBatch.localFile.id,
        },
//              D. 🎩 Defer the good cookies and maybe get bitten
//              Where are the nodes?
//console.log(data);
//              3. Loop over the image nodes and for each create a page
//              A. 🦊
//              B. 🐰
//              C. 🐯
//              D. 🎩 (sort: {fields: date, order: DESC})
//              D. 🎩 (sort: {fields: name, order: DESC})
      })
    });
};
