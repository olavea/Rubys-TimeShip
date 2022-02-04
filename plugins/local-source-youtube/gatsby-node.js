// POW!-site/gatsby-node.js
// //              G. Get data later
// //              I. id and internal and iAmAPugNode and imageFile
const path = require("path");
const { createRemoteFileNode } = require("gatsby-source-filesystem");
const IS_PROD = process.env.NODE_ENV === "production";
const ID_GiGGLES = `eRTJPIa39a4`;
// //              G. Get data with the "axios" river
const axios = require("axios");

const fetchEmbed = async (id) => {
  const { data } = await axios.get("https://www.youtube.com/oembed", {
    params: {
      url: `https://youtu.be/${ID_GiGGLES}`,
      maxwidth: 356,
    },
  });
  return data;
};

async function prepPugNode({
  id,
  actions: { createNode },
  createNodeId,
  createContentDigest,
  getCache,
}) {
  const embedData = await fetchEmbed(id);
  const iAmAPugNodeId = createNodeId(`pug-${ID_GiGGLES}`);

  // //              L. Let's Look at it
  // //              E. export const query = graphql` oEmbed and thumnail
  // //              S. Show it in a normal React component
  const imageFile = await createRemoteFileNode({
    // The source url of our remote file
    url: embedData.thumbnail_url,
    parentNodeId: iAmAPugNodeId,
    getCache,
    createNode,
    createNodeId,
  });
  // //              G. Got data
  createNode({
    //...data, Get later
    oEmbed: embedData,
    thumnail___NODE: imageFile.id,
    id: iAmAPugNodeId,
    internal: {
      contentDigest: createContentDigest(ID_GiGGLES),
      type: `iAmAPugNode`,
    },
  });
}

exports.sourceNodes = async (params, id) => {
  //const { youTubeIds = [] } = options;
  //await Promise.all(youTubeIds.map((id) => prepPugNode(id, params)));
  await Promise.all([prepPugNode(params, id)]);
};

exports.createPages = ({ actions: { createPage } }) => {
  if (IS_PROD) return;
  const testTemplate = path.resolve(__dirname, `templates/test.js`);
  createPage({
    path: "local-source-youtube-test",
    component: testTemplate,
  });
};
