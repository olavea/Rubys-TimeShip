```js
gatsby-transformer-cloudinary

2.9 k downloads May 5


gatsby-source-cloudinary

2.1 k downloads May 5



https://cloudinary.com/documentation/node_integration

https://dev.to/chuloo/handling-images-in-gatsby-with-high-performance-10ea

https://www.npmjs.com/package/cloudinary/v/1.11.0

https://cloudinary.com/documentation/upload_images

https://getcontenttools.com/tutorials/image-uploads-with-cloudinary

https://cloudinary.com/documentation/upload_widget

https://cloudinary.com/documentation/node_integration

plugins

https://github.com/gatsbyjs/gatsby/blob/master/examples/creating-source-plugins/source-plugin/gatsby-node.js


```
```js

const {newCloudinary, getResourceOptions} = require('./utils');
// Does `type` come from utils and from "cloudinary"?
// const DEFAULT_KEYS = ["resourceType", _ _ _ _, "type" ];
// _ _ _ _ _ result.type = result.type || DEFAULT_TYPE;
// return result

const type = `CloudinaryMedia`;
// media comes from Cloudinary?
const getNodeData = (gatsby, media) => {
  return {
    ...media,
    id: gatsby.createNodeId(`cloudinary-media-${media.public_id}`),
    parent: null,
    internal: {
      type,
      content: JSON.stringify(media),
      contentDigest: gatsby.createContentDigest(media)
    }
  };
};

const addTransformations = (resource, transformation, secure)=>{
  const splitURL = secure ? resource.secure_url.split('/') : resource.url.split('/');
  splitURL.splice( 6, 0, transformation);

  const transformedURL = splitURL.join('/');
  return transformedURL;

}

const createCloudinaryNodes = (gatsby, cloudinary, options) => {
  return cloudinary.api.resources(options, (error, result) => {
      // What does res....length mean?
      // pagination?
    const hasResources = (result && result.resources && result.resources.length);

    if (error) {
      console.error(error);
      return;
    }

    if (!hasResources) {
      console.warn('\n ~Yikes! No nodes created because no Cloudinary resources found. Try a different query?');
      return;
    }

    result.resources.forEach(resource => {
      const transformations = "q_auto,f_auto" // Default CL transformations, todo: fetch base transformations from config maybe.

      resource.url = addTransformations(resource, transformations);
      resource.secure_url = addTransformations(resource, transformations, true);

      const nodeData = getNodeData(gatsby, resource);
      // creating nodes
      gatsby.actions.createNode(nodeData);
    });

    console.info(`Added ${hasResources} CloudinaryMedia ${hasResources > 1 ? 'nodes' : 'node'}`);
  });
};

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;

    createTypes(`
        type TobbieCloudinaryMedia implements Node {

        }
    `)
}

exports.sourceNodes = (gatsby, options) => {
    // 3. Global state
    // The Old Way?
    // Using `exports.sourceNodes` passing along `options`
    // There is no onPreBootstrap (nor onPreInit) setting global state
    // so that other functions can access that global state.
    // https://www.gatsbyjs.com/docs/reference/release-notes/migrating-source-plugin-from-v3-to-v4/#the-old-way-2
  const cloudinary = newCloudinary(options);
  const resourceOptions = getResourceOptions(options);
// calling createCloudinaryNodes( gatsbyUtils ++)
  return createCloudinaryNodes(gatsby, cloudinary, resourceOptions);
};

// 3. Global state
// The New Gatsby Way
// https://www.gatsbyjs.com/docs/reference/release-notes/migrating-source-plugin-from-v3-to-v4/#the-new-way-2
let coreSupportsOnPluginInit = 'unstable' | 'stable' | undefined;

try {
  const { isGatsbyNodeLifeCycleSupported } = require(`gatsby-plugin-utils`);
  if (isGatsbyNodeLifeCycleSupported(`onPluginInit`)) {
    coreSupportsOnPluginInit = 'stable';
  } else if (isGatsbyNodeLifeCycleSupported(`unstable_onPluginInit`)) {
    coreSupportsOnPluginInit = 'unstable';
  }
} catch (error) {
  console.error(
    `Could not check if Gatsby supports onPluginInit lifecycle 🚴‍♀️  `,
  );
}

// variable that is changable
let  globalPluginOptions = {};

// function that is _ _ _ _ _
const initializeGlobalState = (_, pluginOptions) =>  {
  globalPluginOptions = pluginOptions;
};

if (coreSupportsOnPluginInit === 'stable') {
  exports.onPluginInit = initializeGlobalState;
} else if (coreSupportsOnPluginInit === 'unstable') {
  exports.unstable_onPluginInit = initializeGlobalState;
} else {
  exports.onPreBootstrap = initializeGlobalState;
}

// func

```