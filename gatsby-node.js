const { createFilePath } = require("gatsby-source-filesystem");

async function slugifyMarkdownRemarkNode(gatsbyUtils) {
  const { actions, node, getNode } = gatsbyUtils;
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode });

    createNodeField({
      name: "slug",
      node,
      value: slug,
    });
  }
}

const { fetchEmbed } = require("./src/services/oembed");
// const YOUTUBE_IDS_RED_STRING = [
//   "4nWUMgiEpdc",
//   "DaWn3zIpR2Y",
//   "sbClENlhHUs",
//   "UZImOvL9Q_g",
//   "PkmxdC4-lII",
//   "8akVGSk4FhQ",
//   "zRUxnx7pv0E",
//   "ix_0vrwQnWk",
//   "dlRbFtih2X0",
//   "dtltxhgjLb4",
// ];

// // 2. Loop over each one
// //  for (const idPinky of YOUTUBE_IDS_RED_STRING) {
// // create a node for each video
// //  }

// //                                                gatsby-node.js
// //              G. Get

// // exports.sourceNodes = async ({
// //   actions: { createNode },
// //   createContentDigest,
// //   reporter
// // }) => {
// //   //              L. Loop over YOUTUBE_IDS_RED_STRING
// //   for (const idPinkyPinksbyPirateParrot of YOUTUBE_IDS_RED_STRING) {
// //     const embedData = await fetchEmbed(idPinkyPinksbyPirateParrot, reporter);
// //     if (!embedData) return;

// //     createNode({
// // //              G. Get data
// //       ...embedData,
// // //              I. id
// //       id: idPinkyPinksbyPirateParrot,
// // //              G. contentDiGest
// //       internal: {
// //         type: "youTubeEmbed",
// //         contentDigest: createContentDigest(idPinkyPinksbyPirateParrot)
// //       }
// //     });
// //   }
// // };
// //                 Troya Goatsby and Lilly Owlsby are
// //                 Baking pages with
// //                 Cap'n Granny Sharksby's
// //                 createPages hook
// async function bakeMarkdownIntoGoodies({ graphql, actions }) {
//   //                 console.log('Captain Granny Sharksbys createPages hook 💀');
//   //              1. bakingSong = Lilly Owslby sings 🦉
//   //                 the bakingSong by Cap'n Granny Sharksby
//   const bakingSong = require.resolve("./src/templates/RecipeMarkdown.js");
//   //                 Look for _ _ _ in http://localhost:8000/topping/Duct-Tape 👻
//   //              2. supplies: data from Markdown files 🌲 in  and _ _ _ drawn
//   const { data } = await graphql(`
//     {
//       supplies: allMarkdownRemark(
//         sort: { order: ASC, fields: frontmatter___title }
//       ) {
//         nodes {
//           id
//           strawberry: frontmatter {
//             path
//             title
//           }
//         }
//       }
//     }
//   `);
//   //              3. Loop over the markdown nodes and
//   //              for each bake a page
//   data.supplies.nodes.forEach((ahoyGoodie, index) => {
//     //                 console.log('Defer index:', index, ahoyGoodie);
//     //              A. – B. – C. – DSG 🎩
//     actions.createPage({
//       //              A. «Ahoy! Goodie?!»
//       //                 Cap'n Fox shouts and embarks. 🦊
//       path: `${ahoyGoodie.strawberry.path}`,
//       //              B. Owlsby sings badly
//       //                 and bakes baby sharks. 🦈
//       component: bakingSong,
//       //              C. Catsby looks tasty
//       //                 Fox gets hungry for kitten. 🐯
//       context: {
//         catsby: ahoyGoodie.id,
//         fox: "Catsby looks tasty I getz hungry for kitten",
//       },
//       //              D. Don't Show Goodies to Fox
//       //              and maybe get bitten. DSG–🎩
//       //              catsby build and look for _ _ _ in terminal 💀
//       defer: index + 1 > 2,
//       //              D. Data tree 🤖🌲
//       //              E. Every node you must sort 💰
//       //              F. Fields Forever `fields: ,` 🍓
//       //              E. forEach index
//       //              R. RRR! defer: index + 1 > 2 🎩

//       //              How does Catsby help Lilly make an index of all the toppings?
//       //              What is the way Lilly makes index travel from
//       //              D. Data tree 🤖🌲
//       //              R. RRR! defer: index + 1 > 2 🎩
//     });
//   });
// }
// //                 We don't use this yet
// //                 Captain Granny Sharksby createPages hook ↩️
// async function turnTagzIntoPages({ graphql, actions }) {
//   //                 console.log('createPages hook from Captain Sharksby ↩️ 💀');
//   //              1. bakingSong = Lilly the Bunny require the bakingSong from granny Shark's gingerbread Recipe
//   const bakingSong = require.resolve("./src/pages/pizzaTags.js");
//   //                 Look for _ _ _ in http://localhost:8000/tag/eminem 👻
//   //              2. supplies: tags in markdown files
//   const { data } = await graphql(`
//     {
//       postsRemark: allMarkdownRemark(
//         sort: { order: DESC, fields: frontmatter___date }
//         limit: 10
//       ) {
//         edges {
//           node {
//             frontmatter {
//               url
//               tags
//             }
//           }
//         }
//       }
//       tagsGroup: allMarkdownRemark(limit: 20) {
//         group(field: frontmatter___tags) {
//           totalCount
//           fieldValue
//         }
//       }
//     }
//   `);
//   //              3. turn toppings into pages with
//   //                 createPage method from Captain Sharksby
//   data.tagsGroup.group.forEach((ahoyGoodie, index) => {
//     //    console.log('Defer index:', ahoyGoodie);
//     actions.createPage({
//       //              A. «Ahoy! Cookie?!»
//       //                 Cap'n Fox shouts and embarks. 🦊
//       path: `/tag/${ahoyGoodie.fieldValue}`,
//       //              B. Bunny sings badly
//       //                 and bakes baby sharks. 🐰
//       component: bakingSong,
//       //              C. Catsby looks tasty
//       //              Fox gets hungry for kitten. 🐯
//       //       context: {
//       //         catsby: ahoyGoodie.toppings.tags                  ,
//       //         //toppingRegex: `/${ahoyCookie}/`,
//       // //              TODO Regex for Topping
//       // //          toppingRegex: `/${ahoyCookie.frontmatter.tags}/i`,
//       //       },
//       defer: index + 1 > 2,
//     });
//   });
//   //              5. Pass tag data to pizzaTags.js
// }
// //                 Troya Catsby and Lilly Owlsby Baking pages
// //                 with Cap'n Granny Sharksby's
// //                 createPages hook
// async function turnToolsIntoPages({ graphql, actions }) {
//   //              1. bakingSong = Lilly the Owlsby sings like a 🦢
//   //                 console.log('Captain Granny Sharksbys createPages hook');
//   const bakingSong = require.resolve("./src/pages/pizzas.js");
//   //              2. supplies: toppings data 🌲 in Sanity and _ _ _ drawn
//   //                 Look for _ _ _ in http://localhost:8000/topping/Duct-Tape 👻
//   const { data } = await graphql(`
//     {
//       supplies: allSanityTopping(sort: { fields: _createdAt, order: DESC }) {
//         nodes {
//           name
//           id
//         }
//       }
//     }
//   `);
//   //              3. Loop over the tools nodes and
//   //                 for each create a page with the createPage method
//   data.supplies.nodes.forEach((ahoyGoodie, index) => {
//     //                 console.log('Defer index:', index);
//     actions.createPage({
//       //              A. «Ahoy Goodie?!»
//       path: `/tool/${ahoyGoodie.name}`,
//       //              B. Sing
//       component: bakingSong,
//       //              C. «Catsby looks goodie
//       //                 I getz hungry for kitten.»             // reggae 🎵
//       context: {
//         catsby: ahoyGoodie.name,
//         toolRegex: `/${ahoyGoodie.name}/i`,
//       },
//       //              D. Don't Show Goodies to Fox
//       //              and maybe get bitten. 🎩
//       defer: index + 1 > 14,
//       //              How does Catsby help Lilly make an index of all the toppings?
//       //              What is the way Lilly makes index travel from start to defer?
//       //              D. 🤖 Data tree in your GraphiQL garden
//       //              E. 🎩 Every node you sort
//       //              F. is for Fields, 🍓 `fields: ....,`
//       //              E. is for Each, forEach .... index
//       //              R. Rrr! defer: index + 1 > 3
//       //              props.pageContext.defer:
//       //              props.pageContext.ownerNodeId on Sunday

//       ownerNodeId: ahoyGoodie.id,
//     });
//   });
//   //              5. Pass tag data to pizzaTags.js
// }

// async function bakingPhotosIntoPages({ graphql, actions }) {
//   const bakingSong = require.resolve("./src/templates/RecipeSong.js");
//   const { data } = await graphql(`
//     {
//       supplies: allSanityPizza(sort: { fields: _createdAt, order: ASC }) {
//         nodes {
//           name
//           id
//           slug {
//             current
//           }
//         }
//       }
//     }
//   `);
//   //              4. Loop over the toppings and
//   //                 turn them into pages with createPage
//   data.supplies.nodes.forEach((ahoyCookie, index) => {
//     //                 console.log('Defer index:', index, ahoyCookie);
//     actions.createPage({
//       //              A. «Ahoy Goodie?!»
//       path: `${ahoyCookie.slug.current}`,
//       //              B.
//       component: bakingSong,
//       //              C. Catsby looks tasty
//       context: {
//         //          fox: 'Catsby looks tasty, I get hungry for lunch-kitten',
//         catsby: ahoyCookie.id,
//         //          catsby: 'looks tasty', pælme ut den ene, bare ha en nøkkel
//         toppingRegex: `/${ahoyCookie.name}/i`, // reggae
//       },
//       defer: index + 1 > 3,
//       // //              How does Catsby help Lilly make an index of all the toppings?
//       // //              What is the way Lilly makes index travel from start to defer?
//       // //              D. 🤖 Data tree in your GraphiQL garden
//       // //              E. 🎩 Every node you sort
//       // //              F. is for Fields, 🍓 `fields: ....,`
//       // //              E. is for Each, forEach .... index
//       // //              R. Rrr! defer: index + 1 > 3
//       // //              props.pageContext.defer:
//       // //              props.pageContext.ownerNodeId on Sunday

//       ownerNodeId: ahoyCookie.id,
//     });
//   });
// }
// //              1. Baking Pages with Captain Granny Sharksby's hook
// async function bakeImagesIntoGoodies({ graphql, actions }) {
//   //              console.log('Captain Granny Sharksbys hook');
//   //              2. bakingSong = Lilly the Bunny require the bakingSong from granny Shark's gingerbread Recipe, 🦢
//   const bakingSong = require.resolve("./src/templates/Recipe.js");
//   //              3. bakingSupplies: image files in folders, drawn
//   //              Look for _ _ _ in http://localhost:8000/uniBeaver-1👻
//   const { data } = await graphql(`
//     {
//       supplies: allFile(
//         filter: { sourceInstanceName: { eq: "images" } }
//         sort: { fields: name, order: DESC }
//       ) {
//         nodes {
//           name
//           id
//         }
//       }
//     }
//   `);
//   //                   console.log(data.supplies.nodes.id);
//   //              4. Loop over the image nodes and for each create a page
//   data.supplies.nodes.forEach((ahoyCookie, index) => {
//     //                   console.log('Defer index:', index);
//     //              A. 🦊
//     //              B. 🐰
//     //              C. 🐯
//     //              D. 🎩 DSG
//     actions.createPage({
//       //              A. «Ahoy! Cookie?!»
//       //              Cap'n Fox shouts and embarks. 🦊
//       path: `${ahoyCookie.name}`,
//       //              B. Bunny sings badly
//       //              and bakes baby sharks. 🐰
//       //              catsby develop Look for _ _ _ in localhost👻
//       component: bakingSong,
//       //              C. Catsby looks tasty
//       //              Fox gets hungry for kitten. 🐯
//       //              Look for _ _ _ in localhost👻
//       context: {
//         catsby: "looks tasty",
//         fox: "gets hungry for kitten",
//         id: ahoyCookie.id,
//       },
//       //              D. Don't Show Goodies to Fox
//       //              and maybe get bitten. 🎩
//       //              catsby build and look for _ _ _ in terminal 💀
//       defer: index + 1 > 2,
//     });
//   });
// }
// //              1. Captain Granny Sharksby createPages hook ↩️
// async function turnNamesIntoTags({ graphql, actions }) {
//   //  console.log('Captain Granny Sharksbys hook');
//   //              2. bakingTagSong = Lilly the Bunny require the bakingSong from granny Shark's gingerbread Recipe
//   const bakingTagSong = require.resolve("./src/pages/image-tags.js");
//   // //           3. bakingSupplies: tags in markdown files
//   const { data } = await graphql(`
//     {
//       supplies: allFile(
//         filter: { sourceInstanceName: { eq: "images" } }
//         sort: { order: ASC, fields: name }
//       ) {
//         nodes {
//           name
//           id
//         }
//       }
//     }
//   `);
//   //    console.log(data.supplies.nodes);
//   //              4. turn toppings into pages with
//   //              Cap'n Granny Sharksby's createPages hook
//   data.supplies.nodes.forEach((ahoyCookie, index) => {
//     //      console.log('Defer index:', index, ahoyCookie);
//     //              A. 🦊
//     //              B. 🐰
//     //              C. 🐯
//     //              D. 🎩 DSG
//     actions.createPage({
//       //              A. «Ahoy! Cookie?!»
//       //              Cap'n Fox shouts and embarks. 🦊
//       path: `/image-tags/topping/${ahoyCookie.name}`,
//       //              B. Bunny sings badly
//       //              and bakes baby sharks. 🐰
//       component: bakingTagSong,
//       //              C. Catsby looks tasty
//       //              Fox gets hungry for kitten. 🐯
//       context: {
//         id: ahoyCookie.id,
//         //                  topping: ahoyCookie.toppings.tags                  ,
//         //toppingRegex: `/${ahoyCookie}/`,
//         //              TODO Regex for Topping
//         //          toppingRegex: `/${ahoyCookie.frontmatter.tags}/i`,
//       },
//       defer: index + 1 > 2,
//     });
//   });
//   //              5. Pass tag data to pizzaTags.js
// }
// //                                                G.
// //                                                i.
// //                                                G.
// //                                                G.

// // Get data and gut gulls 🐦
// // go res fetch! Em🛌
// // u return data
// // try
// // get 🪓.get("📺🐝/oembed",
// // url: `https://youtu.🐝/${🦜}`,
// // logger.info(`🪓`);
// // logger.warn(`🪓`);
// // s async
// //                                                L. Loop over
// //                                                E.
// //                                                S.
// // const axios = require("axios");
// // const OLA_TUBE_ID = "4nWUMgiEpdc"
// // const OLA_CAST_IDS_RED_STRING = ["4nWUMgiEpdc", "DaWn3zIpR2Y", "sbClENlhHUs", "UZImOvL9Q_g", "PkmxdC4-lII", "8akVGSk4FhQ", "zRUxnx7pv0E", "ix_0vrwQnWk", "dlRbFtih2X0", "dtltxhgjLb4"];

// // async function getVideosAndBakeNodes({
// //   actions, createContentDigest
// // }) {
// //   console.log(' 📺 🐝 get videos and bake nodes 💰');

// //  OLA_CAST_IDS_RED_STRING.forEach(OLA_TUBE_ID => {
// //   for (const OLA_TUBE_ID of OLA_CAST_IDS_RED_STRING) {
// //              G.
// // const oembedVideo = await axios.get("https://www.youtube.com/oembed",
// //   {params: {
// //     url: `https://youtu.be/${OLA_TUBE_ID}`,
// //     maxwidth: 800
// //   }}
// // );
// // console.log(oembedVideo);
// // if (!oembedVideo) return;
// //   //              I.
// //     actions.createNode({
// //       id: OLA_TUBE_ID,
// //       ...oembedVideo,
// //       internal: {
// //         contentDigest: createContentDigest(OLA_TUBE_ID),
// //         type: "olaTubeOemBed"
// //       }
// //     });
// //   };
// // };

// //              G. Get data later
// //              I. id in between
// //              a. actions
// //              c. contentDigest
// //              t. type
// //              i. internal: {
// //              o. (OLA_TUBE_ID)
// //              n. node
// //              s. Sing
// //              G. Gut
// //              G. Gulls 🐦 to get oembed data
// //              L. Loop over nodes
// //              E. Embed one video per page
// //              S. Sing $id: String
// // const oembedVideo = await axios.get("https://www.youtube.com/oembed",
// // {params: {
// //   url: `https://youtu.be/${OLA_TUBE_ID}`,
// //   maxwidth: 1554
// // }}
// // );
// // console.log(oembedVideo);
// // if (!oembedVideo) return;

const axios = require("axios");

const { graphql } = require("gatsby");
const POW_PUG_TUBE_IDS = ["UGq8cnNTbwI", "eRTJPIa39a4"];
// added 15 and 16
const POW_TUBE_IDS_RED_STRING = [
  "4nWUMgiEpdc",
  "DaWn3zIpR2Y",
  "sbClENlhHUs",
  "UZImOvL9Q_g",
  "PkmxdC4-lII",
  "8akVGSk4FhQ",
  "zRUxnx7pv0E",
  "ix_0vrwQnWk",
  "dlRbFtih2X0",
  "dtltxhgjLb4",
  "LQ2DRJbG8FY",
  "rPiQi_bOk8s",
];
async function bakeOneNodeGetOneVideo({ actions, createContentDigest }) {
  // George ✋
  //              G. Gus gets oembedVideo from Axios River, await
  //              U. url: `https://youtu.🐝/${🦜}`, but first https://www.youtube.com/oembed
  //              S. Spread 8:25 -> 9:00
  for (pinkyPinksbyPiratyParrot of POW_TUBE_IDS_RED_STRING) {
    const oembedVideo = await axios.get("https://www.youtube.com/oembed", {
      params: {
        url: `https://youtu.be/${pinkyPinksbyPiratyParrot}`,
        maxwidth: 1554,
      },
    });
    actions.createNode({
      id: pinkyPinksbyPiratyParrot,
      ...oembedVideo,
      //gus: oembedVideo,
      internal: {
        contentDigest: createContentDigest(pinkyPinksbyPiratyParrot),
        type: "olaTubeOemBed",
      },
    });
  }
}

// async function bakeMarkdownIntoGingerbreadHouse({ graphql, actions }) {
//   console.log("💀 bakeMarkdownIntoGingerbreadHouse 💀");

//   // 1. supplies! from Data River
//   const { data } = await graphql(`
//     {
//       supplies: allMarkdownRemark {
//         nodes {
//           id
//         }
//       }
//     }
//   `);
//   console.log("💀💀", data.supplies.nodes);
//   // 2. bakingSong
//   const bakingSong = require.resolve("./src/templates/bakingSong.js");
//   //             3. Loop over the nodes and for each create a page
//   data.supplies.nodes.forEach((ahoyGingerSection) => {
//     console.log("💀💀💀", ahoyGingerSection.id);
//     actions.createPage({
//       //             A. Ahoy! Baking aroma!
//       path: ahoyGingerSection.id,
//       //             B. bakingSong
//       component: bakingSong,
//       //             C. catsby
//       context: {
//         catsby: ahoyGingerSection.id,
//       },
//     });
//   });
// }

// POW!-website/gatsby-node.js
// I will delete all these comments and rename everything after my
// livestream on Thursday Feb 24.
// badly baked GingerBreadPages 🏠
// Only bake pages for markdown pages 📄 and not sections. ㊙️ 📟
// 0. Only index.md 📄
async function bakeMarkdownNodesIntoPages({ graphql, actions }) {
  // 1. filter ☕
  //    supplies: not allMarkdownRemark.nodes 💰
  const { data } = await graphql(`
    {
      supplies: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/index.md/" } }
      ) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);
  console.log(data.supplies.nodes);

  // 2. bakingsong 🎵 🙀
  const bakingSong = require.resolve("./src/templates/pageTemplate.js");
  // 3. aromaNode 🍰
  // Loop over the supplies.nodes and forEach((aromaNode and bake a page
  data.supplies.nodes.forEach((aromaNode) => {
    console.log(aromaNode.fields.slug, "💀📄");

    const aromaNodePath =
      aromaNode.fields.slug === "/index/" ? "/" : aromaNode.fields.slug;

    actions.createPage({
      // A. aromaNodePath 🍰.🍓.🐛
      path: aromaNodePath,

      // B. bakingSong 🎵 🙀
      component: bakingSong,

      // C. catsbyId 😼🆔
      context: {
        catsbyId: aromaNode.id,
      },
    });
  });
}

exports.onCreateNode = async (gatsbyUtils) => {
  await Promise.all([slugifyMarkdownRemarkNode(gatsbyUtils)]);
};

exports.sourceNodes = async (params) => {
  // Bake one node and source it into our GraphQL-Gatsby data-river
  await Promise.all([bakeOneNodeGetOneVideo(params)]);
};

//              0. export Baking Pages with Captain Granny Sharksby's createPages hook ↩️
exports.createPages = async (gatsbyUtils) => {
  // create pages dynamically from any data source like for example see below:
  // wait for all promises to be resolved before finishing this function
  await Promise.all([
    // bakeMarkdownIntoGoodies(gatsbyUtils),
    // turnTagzIntoPages(gatsbyUtils),
    // bakeMarkdownIntoGingerbreadHouse(gatsbyUtils),

    // turnToolsIntoPages(gatsbyUtils),
    // bakingPhotosIntoPages(gatsbyUtils),

    // bakeImagesIntoGoodies(gatsbyUtils),
    // turnNamesIntoTags(gatsbyUtils),
    bakeMarkdownNodesIntoPages(gatsbyUtils),
  ]);

  // markdown in local files
  //                  RecipeMarkdown.js
  //                  pizzaTags.js Don't hook up markdown and tags yet
  // sanity.io
  //                  pizzas.js    is tools
  //                  RecipeSong.js   is photos
  // images in local files
  //                  Recipe.js
  //                  image-tags.js
  // POW!-style markdown
};

// 1.2.3 – A.B.C. – Gingerbread house

// 1. Supplies: allMarkdownRemark.node
// 2. Bakingsong = bakingSong.js
// 3. Loop over the supply node and create a page

// A. Ahoy! Aroma path!
// B. BakingSong is a component
// C. Catsby node.id is context
