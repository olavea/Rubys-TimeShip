---
title: Fathom JavaScript .env variable work in HTML
author: "@OlaHolstVea"
date: 2023-11-22
---



## Failing to add Gatsby image support to Cloudinary image data sourced from Sanity CMS

I have the Gatsby node of type `SanityArticle` with a field cover of type `SanityCloudinaryAsset``


```js
// File: gatsby-node.js
exports.onCreateNode = async (gatsbyUtils) => {
  const { node, actions, createNodeId, createContentDigest } = gatsbyUtils
  const { createNode } = actions
  if (node.internal.type === "SanityArticle") {
    // Create the correct data shape
    const cloudinaryAssetData = {
      cloudName: "cloud-name", // use your cloudName
      publicId: node.cover.public_id,
      originalHeight: node.cover.height,
      originalWidth: node.cover.width,
      originalFormat: node.cover.format,
    }
    // Create a Gatsby node with the correct data shape
    createNode({
      ...cloudinaryAssetData,
      id: createNodeId(`SanityCloudinaryAsset >>> ${node.cover.public_id}`),
      parent: node.id,
      internal: {
        type: "CloudinaryAsset", // or another type, remember to define `transformTypes` if you use another type
        contentDigest: createContentDigest(cloudinaryAssetData),
      },
    })
  }
}
exports.createSchemaCustomization = async ({ actions }) => {
  // Update the schema to add a link to the node with the correct shape
  actions.createTypes(/* GraphQL */ `
    type SanityArticle implements Node {
      coverImage: CloudinaryAsset
        @link(by: "publicId", from: "cover.public_id")
    }
 `)
}
```

I got this message in my terminal:

```shell
warn `createResolvers` passed resolvers for type `BlogPostHeroImage` that doesn't exist in the schema. Use `createTypes` to add the type before adding resolvers.
```

So I tried to add `BlogPostHeroImage`

```js
exports.createSchemaCustomization = async ({ actions }) => {
  // Update the schema to add a link to the node with the correct shape
  actions.createTypes(/* GraphQL */ `
    type SanityArticle implements Node {
      coverImage: CloudinaryAsset @link(by: "publicId", from: "cover.public_id")
    }
    type BlogPostHeroImage implements Node {
      BlogPostHeroImage: sanityImageAsset
    }
  `);
};
```

I got this message in my terminal:

```shell
 ERROR
Missing onError handler for invocation 'building-schema', error was 'Error: Type with name "sanityImageAsset" does not exists'. Stacktrace was 'Error: Type with name
"sanityImageAsset" does not exists
Betyr det at jeg må legge inn en annen asset?
```


import export is no good in gatsby-node


```js

import { createRemoteImageNode } from 'gatsby-transformer-cloudinary';

export async function onCreateNode({
  node,
  actions: { createNode },
  createNodeId,
  createContentDigest,
  reporter,
}) {
  if (node.internal.type === 'Project' && node.coverImageUrl) {
    // Upload the image to Cloudinary
    const imageNode = await createRemoteImageNode({
      url: node.coverImageUrl,
      parentNode: node,
      createNode,
      createNodeId,
      createContentDigest,
      reporter,
    });

    // Add node field to be used by "createSchemaCustomization"
    createNodeField({ node: node, name: 'coverImage', value: imageNode.id });
  }
}

exports.createSchemaCustomization = (gatsbyUtils) => {
  const { actions } = gatsbyUtils;

  // Connect the node to the CloudinaryAsset using @link
  const ProjectType = `
      type Project implements Node  {
        coverImageUrl: String!
        coverImage: CloudinaryAsset @link(from: "fields.coverImage" by: "id")
      }
    `;

  actions.createTypes([ProjectType]);
};

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
    "type MarkdownRemark implements Node { coverImageFromCloudinary1: coverImageFromCloudinary3 }",
    schema.buildObjectType({
      name: "coverImageFromCloudinary1",
      fields: {
        coverImageFromCloudinary2: {
          type: "coverImageFromCloudinary3",
          resolve: (source, args, context, info) => {
            // If you were linking by ID, you could use `getNodeById` to
            // find the correct author:
            //
            // return context.nodeModel.getNodeById({
            //   id: source.author,
            //   type: "AuthorJson",
            // })
            //
            // But since the example is using the author email as foreign key,
            // you can use `nodeModel.findOne` to find the linked author node.
            // Note: Instead of getting all nodes and then using Array.prototype.find()
            // Use nodeModel.findOne instead where possible!
            return context.nodeModel.findOne({
              type: "coverImageFromCloudinary3",
            });
          },
        },
      },
    }),
  ];
  createTypes(typeDefs);
};
```