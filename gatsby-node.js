//              Cap'n Catsby Teaches                              gatsby-node.js
//              Lilly the baker-Bunny to bake
//              baby-Shark-Cookies programatically from
//              Defer-Sharky-Granny's bakingSong with Cap'n Catsby's
//              0. createPages hook
exports.createPages = async ({ graphql, actions }) => {
//              1. bakingSong = Lilly the Bunny requires a recipe
    const bakingSong = require.resolve('./src/templates/Pizza.js');
//              2. Baking supplies = image nodes in Sanity
    const { data } = await graphql(`{
        supplies: allSanityImageAsset(sort: {
            fields: _createdAt,
            order: DESC
        }) {
            nodes {
                _createdAt
                id
            }
        }
    }`)
//    console.log(data.supplies.nodes);
//              3. Loop over the image nodes and for each create a page
    data.supplies.nodes.forEach((babyShark, index) => {
        actions.createPage({
//                                      A. «Ahoy! A path?!» Shouts Fox and embarks.
            path: `shark/${babyShark.id}`,
//                                      B. Bunny sings badly and bakes all the sharks.
            component: bakingSong,
//                                      C. is the context, a fox hungry for kitten.
            context: {
                id: babyShark.id
            },
//                                      D. Is their plan «Let's defer to get bitten.» They defer The good cookies and get bitten
//                                      D. defer: false, 🦈
//                                      S. Sort 🎩 _createdAT in DESC order
//                                      G. The good cookies 🍪 Goes in index and we defer to Give them to Robin "whitey" Renard, the sharkySupplies in an index
            defer: index + 1 > 1,
//                                      E. Each cookie is owned by a node before it is sold.
//                                      E. One node owns one cookie before it is sold.
                    // ownerNodeId: babyShark.id,
//                                      F. The taste is tastier if fox pays with gold.
        });             //              Pirates of v4 GatsbyImage
    });                 //              and the cookie curse of
};                      //              Defer Sharky Granny's bakingSong


