//              0. ↪️ createPages hook ↩️
exports.createPages = async ({ graphql, actions }) => {
//              1. bakingSong = Lilly the Bunny require granny Shark's recipe
    const bakingSong = require.resolve('./src/templates/recipe.js')
//              2. Baking supplies = image nodes in Storyblok
    const { data } = await graphql(`{
        bakingSupplies: allStoryblokEntry(sort: {
            fields: created_at,
            order: DESC
        })  {
            nodes {
                full_slug
                id
            }
          }
    }`)
    console.log(data.bakingSupplies.nodes);
//              Where are the nodes?

//              3. Loop over the image nodes and for each create a page
//              A. 🦊
//              B. 🐰
//              C. 🐯
//              D. 🎩
    data.bakingSupplies.nodes.forEach((babySharkBatch, index) => {
        actions.createPage({

//              A. 🦊 «Ahoy! A path?!» Shouts Fox and embarks. and
            path: `/${babySharkBatch.full_slug}`,
//              B. 🐰 Bunny sings badly and bakes all the sharks.
            component: bakingSong,
//              C. 🐯 is the context: { fox: 'is hungry for kitten' } and
            context: {
                fox: 'is hungry for kitten',
                id: babySharkBatch.id,
            },

//              D. 🎩 They defer the good cookies and maybe get bitten
            defer: index + 1 > 1,
        });
    });
};