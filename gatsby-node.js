// gatsby-node.js
//              1. ↪️ Captain createPages hook ↩️
exports.createPages = ({ graphql, actions }) => {
//              2. bakingSongs = Lilly the Bunny require the bakingSong from granny Shark's Recipe Songbook
  const bakingSong = require.resolve('./src/templates/Recipe.js')
  const bakingSongMarkdown = require.resolve('./src/templates/RecipeMd.js')

//  console.log('Madness? MADNESS?! This. Is. PAAAageees! 💪😺👢');
//              3. bakingSupplies: image files in folders
  const imageGoodies = graphql(`{
    bakingSupplies: allFile(filter: {absolutePath: {glob: "**/content/book1/*.png"}}) {
      nodes {
        name
        id
      }
    }
  }`).then(result => {
    if (result.errors) {
      Promise.reject(result.errors);
    }
//              4. Loop over the file nodes and for each create a page
    //console.log(result.data.bakingSupplies.nodes);
    result.data.bakingSupplies.nodes.forEach((ahoyGoodies) => {
    //          console.log(ahoyGoodies.id);
      actions.createPage({
    //              A. «Ahoy! Goodies?!»
    //              Cap'n Fox shouts and embarks. 🦊
        path: `${ahoyGoodies.name}`,
    //              B. Bunny sings badly
    //              and bakes baby sharks. 🐰
        component: bakingSong,
    //              C. Catsby looks tasty
    //              Fox gets hungry for kitten. 🐯
        context: {
          fox: 'gets hungry for kitten',
          id: ahoyGoodies.id,
        },
    //              D. Don't Show Goodies to Fox
    //              and maybe get bitten. 🎩
        // defer: index + 1 > 2,
    //              A. 🦊
    //              B. 🐰
    //              C. 🐯
    //              D. 🎩 DSG
      });
    });
  });
  //              5. bakingSupplies: markdown files in folders
  const markdownGoodies = graphql(`{
    bakingSuppliesMarkdown: allMarkdownRemark(
      filter: {fileAbsolutePath: {glob: "**/content/skill-building/*.md"}}
    ) {
      nodes {
        id
        frontmatter {
          path
        }
      }
    }
  }`).then(result => {
    if (result.errors) {
      Promise.reject(result.errors);
    }
//              6. Loop over the markdown nodes and for each create a page
    //console.log(result.data.bakingSupplies.nodes);
      result.data.bakingSuppliesMarkdown.nodes.forEach((ahoyGoodyMarkdown) => {
        console.log(ahoyGoodyMarkdown);
        actions.createPage({
          //              A. «Ahoy! Cookie?!»
          //              Cap'n Fox shouts and embarks. 🦊
          path: `./md/${ahoyGoodies.frontmatter.path}`,
          //              B. Bunny sings badly
          //              and bakes baby sharks. 🐰
          component: bakingSongMarkdown,
          //              C. Catsby looks tasty
          //              Fox gets hungry for kitten. 🐯
          context: {
            fox: 'gets hungry for kitten',
            id: ahoyGoodies.id,
          },
          //              D. Don't Show Goodies to Fox
          //              and maybe get bitten. 🎩
          // defer: index + 1 > 2,
          //              A. 🦊
          //              B. 🐰
          //              C. 🐯
          //              D. 🎩 DSG
        });
      });
    });

  return Promise.all([imageGoodies, markdownGoodies]);
};
