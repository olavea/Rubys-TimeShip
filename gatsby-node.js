//                                                gatsby-node.js
//                 Ruby Catsby and Lilly Owlsby
//                 Baking pages
//                 with Cap'n Granny Sharksby's
//                 createPages hook
async function bakeMarkdownIntoGoodies({ graphql, actions }) {
//                 console.log('Captain Granny Sharksbys createPages hook'); 💀
//              1. bakingSong = Lilly the Bunny sings like a 🦢
//                 the bakingSong by Cap'n Granny Sharksby 🦢
  const bakingSong = require.resolve('./src/templates/RecipeMarkdown.js')
//                 Look for _ _ _ in http://localhost:8000/topping/Duct-Tape 👻
//              2. supplies: data from Markdown files 🌲 in  and _ _ _ drawn
  const { data } = await graphql(`{
    supplies: allMarkdownRemark(sort: {
      order: ASC,
      fields: frontmatter___title
    }) {
      nodes {
        id
        strawberry: frontmatter {
          path
          title
        }
      }
    }
  }`)
//              3. Loop over the markdown nodes and for each create a page
//                 turn them into pages with createPage
  data.supplies.nodes.forEach((ahoyGoodie, index) => {
//                 console.log('Defer index:', index, ahoyGoodie);
//              A. – B. – C. – DSG 🎩
      actions.createPage({
//              A. «Ahoy! Goodie?!»
//                 Cap'n Fox shouts and embarks. 🦊
        path: `${ahoyGoodie.strawberry.path}`,
//              B. Owlsby sings badly
//                 and bakes baby sharks. 🦈
        component: bakingSong,
//              C. Catsby looks tasty
//                 Fox gets hungry for kitten. 🐯
        context: {
          catsby: ahoyGoodie.id,
          fox: 'Catsby looks tasty I getz hungry for kitten',
        },
//              D. Don't Show Goodies to Fox
//              and maybe get bitten. DSG–🎩
//              catsby build and look for _ _ _ in terminal 💀
        defer: index + 1 > 2,
//              D. Data tree 🤖🌲
//              E. Every node you must sort 💰
//              F. Fields Forever `fields: ,` 🍓
//              E. forEach index
//              R. RRR! defer: index + 1 > 2 🎩

//              How does Catsby help Lilly make an index of all the toppings?
//              What is the way Lilly makes index travel from
//              D. Data tree 🤖🌲
//              R. RRR! defer: index + 1 > 2 🎩
    })
  });
}
//                 We don't use this yet
//                 Captain Granny Sharksby createPages hook ↩️
async function turnTagzIntoPages({ graphql, actions }) {
//                 console.log('createPages hook from Captain Sharksby ↩️ 💀');
//              1. bakingSong = Lilly the Bunny require the bakingSong from granny Shark's gingerbread Recipe
  const bakingSong = require.resolve('./src/pages/pizzaTags.js')
//                 Look for _ _ _ in http://localhost:8000/tag/eminem 👻
//              2. supplies: tags in markdown files
  const { data } = await graphql(`{
    postsRemark: allMarkdownRemark(
      sort: {order: DESC, fields: frontmatter___date}
      limit: 10
    ) {
      edges {
        node {
          frontmatter {
            url
            tags
          }
        }
      }
    }
    tagsGroup: allMarkdownRemark(limit: 20) {
      group(field: frontmatter___tags) {
        totalCount
        fieldValue
      }
    }
  }`)
//              3. turn toppings into pages with
//                 createPage method from Captain Sharksby
  data.tagsGroup.group.forEach((ahoyGoodie, index) => {
//    console.log('Defer index:', ahoyGoodie);
    actions.createPage({
//              A. «Ahoy! Cookie?!»
//                 Cap'n Fox shouts and embarks. 🦊
      path: `/tag/${ahoyGoodie.fieldValue}`,
//              B. Bunny sings badly
//                 and bakes baby sharks. 🐰
      component: bakingSong,
//              C. Catsby looks tasty
//              Fox gets hungry for kitten. 🐯
//       context: {
//         catsby: ahoyGoodie.toppings.tags                  ,
//         //toppingRegex: `/${ahoyCookie}/`,
// //              TODO Regex for Topping
// //          toppingRegex: `/${ahoyCookie.frontmatter.tags}/i`,
//       },
      defer: index + 1 > 2
    })
 });
//              5. Pass tag data to pizzaTags.js
}
//                 Troya Catsby and Lilly Owlsby Baking pages
//                 with Cap'n Granny Sharksby's
//                 createPages hook
async function turnToolsIntoPages({ graphql, actions }) {
//              1. bakingSong = Lilly the Owlsby sings like a 🦢
//                 console.log('Captain Granny Sharksbys createPages hook');
  const bakingSong = require.resolve('./src/pages/pizzas.js')
//              2. supplies: toppings data 🌲 in Sanity and _ _ _ drawn
//                 Look for _ _ _ in http://localhost:8000/topping/Duct-Tape 👻
  const { data } = await graphql(`{
    supplies: allSanityTopping(sort: {
      fields: _createdAt,
      order: DESC
    }) {
      nodes {
        name
        id
      }
    }
  }`)
//              3. Loop over the tools nodes and
//                 for each create a page with the createPage method
  data.supplies.nodes.forEach((ahoyGoodie, index) => {
//                 console.log('Defer index:', index);
    actions.createPage({
//              A. «Ahoy Goodie?!»
      path: `/tool/${ahoyGoodie.name}`,
//              B. Sing
      component: bakingSong,
//              C. «Catsby looks goodie
//                 I getz hungry for kitten.»             // reggae 🎵
      context: {
        catsby: ahoyGoodie.name,
        toolRegex: `/${ahoyGoodie.name}/i`,
      },
//              D. Don't Show Goodies to Fox
//              and maybe get bitten. 🎩
      defer: index + 1 > 14,
//              How does Catsby help Lilly make an index of all the toppings?
//              What is the way Lilly makes index travel from start to defer?
//              D. 🤖 Data tree in your GraphiQL garden
//              E. 🎩 Every node you sort
//              F. is for Fields, 🍓 `fields: ....,`
//              E. is for Each, forEach .... index
//              R. Rrr! defer: index + 1 > 3
//              props.pageContext.defer:
//              props.pageContext.ownerNodeId on Sunday

      ownerNodeId: ahoyGoodie.id,
    })
  })
  //              5. Pass tag data to pizzaTags.js
}

async function bakingPhotosIntoPages({ graphql, actions}) {
  const bakingSong = require.resolve('./src/templates/RecipeSong.js')
  const { data } = await graphql(`{
    supplies: allSanityPizza(sort: {fields: _createdAt, order: ASC}) {
      nodes {
        name
        id
        slug {
          current
        }
      }
    }
  }`)
//              4. Loop over the toppings and
//                 turn them into pages with createPage
  data.supplies.nodes.forEach((ahoyCookie, index) => {
//                 console.log('Defer index:', index, ahoyCookie);
    actions.createPage({
//              A. «Ahoy Goodie?!»
      path: `${ahoyCookie.slug.current}`,
//              B.
      component: bakingSong,
//              C. Catsby looks tasty
      context: {
//          fox: 'Catsby looks tasty, I get hungry for lunch-kitten',
        catsby: ahoyCookie.id,
//          catsby: 'looks tasty', pælme ut den ene, bare ha en nøkkel
        toppingRegex: `/${ahoyCookie.name}/i`, // reggae
      },
       defer: index + 1 > 3,
// //              How does Catsby help Lilly make an index of all the toppings?
// //              What is the way Lilly makes index travel from start to defer?
// //              D. 🤖 Data tree in your GraphiQL garden
// //              E. 🎩 Every node you sort
// //              F. is for Fields, 🍓 `fields: ....,`
// //              E. is for Each, forEach .... index
// //              R. Rrr! defer: index + 1 > 3
// //              props.pageContext.defer:
// //              props.pageContext.ownerNodeId on Sunday

       ownerNodeId: ahoyCookie.id,
    })
  })
}
//              1. Baking Pages with Captain Granny Sharksby's hook
async function bakeImagesIntoGoodies({ graphql, actions }) {
//              console.log('Captain Granny Sharksbys hook');
//              2. bakingSong = Lilly the Bunny require the bakingSong from granny Shark's gingerbread Recipe, 🦢
  const bakingSong = require.resolve('./src/templates/Recipe.js')
//              3. bakingSupplies: image files in folders, drawn
//              Look for _ _ _ in http://localhost:8000/uniBeaver-1👻
  const { data } = await graphql(`{
    supplies: allFile(
      filter: {sourceInstanceName: {eq: "images"}}
      sort: {fields: name, order: DESC}
    ) {
      nodes {
        name
        id
      }
    }
  }`)
//                   console.log(data.supplies.nodes.id);
//              4. Loop over the image nodes and for each create a page
  data.supplies.nodes.forEach((ahoyCookie, index) => {
//                   console.log('Defer index:', index);
//              A. 🦊
//              B. 🐰
//              C. 🐯
//              D. 🎩 DSG
    actions.createPage({
//              A. «Ahoy! Cookie?!»
//              Cap'n Fox shouts and embarks. 🦊
      path: `${ahoyCookie.name}`,
//              B. Bunny sings badly
//              and bakes baby sharks. 🐰
//              catsby develop Look for _ _ _ in localhost👻
      component: bakingSong,
//              C. Catsby looks tasty
//              Fox gets hungry for kitten. 🐯
//              Look for _ _ _ in localhost👻
      context: {
        catsby: 'looks tasty',
        fox: 'gets hungry for kitten',
        id: ahoyCookie.id,
      },
//              D. Don't Show Goodies to Fox
//              and maybe get bitten. 🎩
//              catsby build and look for _ _ _ in terminal 💀
      defer: index + 1 > 2,
    })
  });
};
//              1. Captain Granny Sharksby createPages hook ↩️
async function turnNamesIntoTags({ graphql, actions }) {
//  console.log('Captain Granny Sharksbys hook');
  //              2. bakingTagSong = Lilly the Bunny require the bakingSong from granny Shark's gingerbread Recipe
    const bakingTagSong = require.resolve('./src/pages/image-tags.js')
  // //           3. bakingSupplies: tags in markdown files
    const { data } = await graphql(`{
      supplies: allFile(
        filter: {sourceInstanceName: {eq: "images"}}
        sort: {order: ASC, fields: name}
      ) {
        nodes {
          name
          id
        }
      }
    }`)
//    console.log(data.supplies.nodes);
    //              4. turn toppings into pages with
  //              Cap'n Granny Sharksby's createPages hook
    data.supplies.nodes.forEach((ahoyCookie, index) => {
//      console.log('Defer index:', index, ahoyCookie);
      //              A. 🦊
  //              B. 🐰
  //              C. 🐯
  //              D. 🎩 DSG
        actions.createPage({
  //              A. «Ahoy! Cookie?!»
  //              Cap'n Fox shouts and embarks. 🦊
                path: `/image-tags/topping/${ahoyCookie.name}`,
  //              B. Bunny sings badly
  //              and bakes baby sharks. 🐰
                component: bakingTagSong,
  //              C. Catsby looks tasty
  //              Fox gets hungry for kitten. 🐯
                context: {
                  id: ahoyCookie.id,
//                  topping: ahoyCookie.toppings.tags                  ,
                  //toppingRegex: `/${ahoyCookie}/`,
        //              TODO Regex for Topping
        //          toppingRegex: `/${ahoyCookie.frontmatter.tags}/i`,
                },
                defer: index + 1 > 2
        })
    });
  //              5. Pass tag data to pizzaTags.js
  }
//              0. export Baking Pages with Captain Granny Sharksby's createPages hook ↩️
exports.createPages = async (params) => {
  // create pages dynamically from any data source like for example see below:
  // wait for all promises to be resolved before finishing this function
  await Promise.all([
    bakeMarkdownIntoGoodies(params),
    turnTagzIntoPages(params),

    turnToolsIntoPages(params),
    bakingPhotosIntoPages(params),

    bakeImagesIntoGoodies(params),
    turnNamesIntoTags(params),
  ])
// markdown in local files
//                  RecipeMarkdown.js
//                  pizzaTags.js Don't hook up markdown and tags yet
// sanity.io
//                  pizzas.js    is tools
//                  RecipeSong.js   is photos
// images in local files
//                  Recipe.js
//                  image-tags.js
}