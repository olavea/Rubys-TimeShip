// gatsby-node.js

//              1. ↪️ Captain createPages hook ↩️
exports.createPages = async ({ graphql, actions }) => {
//              2. bakingSong = Lilly the Bunny require the bakingSong from granny Shark's gingerbread Recipe
  const bakingSong = require.resolve('./src/templates/Recipe.js')

  console.log('Madness? MADNESS?! This. Is. PAAAageees! 💪😺👢');
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
             console.log(ahoyCookie);
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
