require("dotenv").config({
  path: `.env.dev`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.olavea.com",
    title: `Lillian and Ola`,
    description: "POW! backstage by Lillian and Ola and Skill-Builder pirates",
  },
  plugins: [
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        // resourceType: `image`,
        // type: `twitter`,
        // maxResults: 22,
        // tags: true,
        // context: true,
        // prefix: `demo/animals`
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    `gatsby-plugin-sharp`,

    //  Currently you cannot use StaticImage
    //  or gatsby-transformer-sharp in SSR or DSG pages. The best workaround is to use an image CDN such as Cloudinary or imgix to host your images. This will give you faster builds and rendering too.
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `local-source-youtube`,
      options: {
        youTubeIds: [`4nWUMgiEpdc`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
      __key: "content",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    {
      resolve: `@raae/gatsby-theme-mui`,
    },
    // These plugins below are not in pow-site as of March 24 2022

    {
      resolve: `@raae/gatsby-source-youtube-oembed`,
      options: {
        youTubeIds: [`Mer3S6J5FUA`],
      },
    },

    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-netlify",
    // "@raae/gatsby-plugin-new-css",

    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/content/book1`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/content/skill-builder`,
      },
    },

    `@raae/gatsby-plugin-donations`,
    // `@raae/gatsby-plugin-let-it-snow`,
    {
      resolve: "@raae/gatsby-plugin-let-it-snow",
      options: {
        duration: 10,
        intensity: "blizzard",
        // LightPink #FFB6C1
        colors: ["#FFB6C1"],
      },
    },
    {
      // «This is the name of the plugin you are adding» Says Wes Bos
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "8g8wlo67",
        // fr5nacyp
        dataset: "production",
        watchMode: true,
        // 😺  Remember to change Environment variables in https://app.netlify.com/sites/frosty-boyd-ac6bff/settings/deploys
        token: process.env.SANITY_TOKEN,
      },
    },
    `@raae/gatsby-plugin-starter`,
  ],
};
