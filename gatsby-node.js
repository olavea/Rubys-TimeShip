const path = require('path');

async function sharkCookieBaking({ graphql, actions}) {
    //     1. 🍕🗺️ Get a pizza template for this page 🍕🗺️🏴‍☠️
    const bakeSharkRecipeTemplate = path.resolve('./src/templates/Pizza.js');
    //     2. 🍕🖼️ Query all pizza images inside my sanity🍕🖼️ 🏴‍☠️🏴‍☠️🏴‍☠️
    const { data } = await graphql(`
        query {
            sharkyCookie: allSanityImageAsset {
              nodes {
                id
                originalFilename
              }
            }
        }
      `);
//     3. 🍕🎩🦈 Loop over each pizza image and
//        create a shark page for that pizza 🍕🎩🦈
      const { createPage } = actions
      // //     3. 🦈
      data.sharkyCookie.nodes.forEach(shark => {

//     4.  🎩 🦈
        createPage({
            //     A. is for Ahoy! On the path we embark
            path: `shark/${shark.originalFilename}`,
            //     B. is a bake-template for baking a shark
            component: bakeSharkRecipeTemplate,
            //     C. is the context a fox + a kitten 🦊 + 😺
            context: {
                fox: 'is hungry',
                id: shark.id,
            },
            //     D. is for DSG, defer to get bitten
            defer: false,

        })
        console.log(shark.name, '🦈🦈🦈🦈🦈🦈🦈🦈🦈🦈🦈🦈🦈🦈🦈');
    });
};

// //     0. Cap'n CreatePages Hook
exports.createPages = async (params) => {
    await sharkCookieBaking(params);
};
