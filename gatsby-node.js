const path = require('path')
//      0. Cap'n Catsby's Teaches
//      Lilly the baker-Bunny to bake baby-Shark-Cookies
//      programatically with her createPages hook
exports.createPages = async ({ graphql, actions }) => {
//      1. bakingSong = Lilly the Bunny requires a recipe
    const bakingSong = require.resolve('./src/templates/Pizza.js');
//      2. cookieSupplies = image nodes in Sanity
    const { data } = await graphql(`{
        cookieSupplies: allSanityImageAsset {
            nodes {
                id
            }
        }
    }`)
        console.log(data.cookieSupplies.nodes);
//      3. Loop over the image nodes and for each create a page
    data.cookieSupplies.nodes.forEach((shark, index) => {
        actions.createPage({
            //      A. «Ahoy! A path?!» Shouts Fox and embarks.
                    path: `shark/${shark.id}`,
            //      B. Bunny sings badly and bakes all the sharks.
                    component: bakingSong,
            //      C. is the context, a fox hungry for kitten.
                    context: {
                        id: shark.id
                    },
            //      D. Is their plan «Let's defer to get bitten.»
                    defer: index + 1 > 3,
            //      E. Each cookie is owned by a node before it is sold.
            //      E. One node owns one cookie before it is sold.
            //      E.
                    ownerNodeId: shark.id,
            //      F. The taste is tastier if fox pays with gold.
        });
    });
};
