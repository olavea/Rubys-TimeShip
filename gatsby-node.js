const path = require('path');


async function pirateUseYourHook({ graphql, actions}) {
// //     1. 🍕
    const pizzaTemplate = path.resolve('./src/templates/Pizza.js');
// //     2. 🍕🏴‍☠️
    const { data } = await graphql(`
        query {
            sharkyGingerbreads: allSanityPizza {
                nodes {
                    name
                    id
                    slug {
                        current
                    }
                }
            }
        }
      `);
//     4. A 🎩 🦈
      const { createPage } = actions
      // //     3. 🦈


    data.sharkyGingerbreads.nodes.forEach(shark => {

//     4. B 🎩 🦈
        createPage({
            //     4. C 🎩 🦈
            path: `shark/${shark.name}`,
            //     4. D 🎩 🦈
            component: pizzaTemplate,
            //     4. F 🎩 🦈
            context: {
                slug: shark.slug.current,
            },

        })
        console.log(shark.name, '🦈🦈🦈🦈🦈🦈🦈🦈🦈🦈🦈🦈🦈🦈🦈');
    });
};



// //     0.
exports.createPages = async (params) => {
    await pirateUseYourHook(params);
};
