const path = require('path')
async function bakingBunny({ graphql, actions }) {
//      2. Song
    const bakingSong = path.resolve('./src/templates/Pizza.js');
//      3. Supplies in Sanity
        const { data } = await graphql(`{
            cookieSupplies: allSanityImageAsset {
                nodes {
                    id
                }
            }
        }`)
        // console.log(data.cookieSupplies.nodes);
//     4. S-Loop over each tasty image and create a page for that image
        const { createPage } = actions
        data.cookieSupplies.nodes.forEach((shark, index) => {
            createPage({
                //     A. «Ahoy!» Says Fox «A path?! We'll embark!»
                        path: `shark/${shark.id}`,
                //     B. Is a kitten's bakingSong about a shark.
                        component: bakingSong,
                //     C. is the context, a fox hungry for kitten.
                        context: {
                            id: shark.id
                        },
                //     D. Is the plan «Let's defer to get bitten.»
                        defer: index + 1 > 3,
                //     E.
                        ownerNodeId: shark.id,
                });
        });
};
//     1. Cap'n Catsby's createPages hook
exports.createPages = async (params) => {
    await bakingBunny(params)
};