require('dotenv').config({
  path: `.env.dev`,
});


module.exports = {
  siteMetadata: {
    siteUrl: "https://timeship1.gatsbyjs.io/",
    title: `TimeShip1`,
    description: "Lillian and Friends Building Skill",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    'gatsby-plugin-netlify',
    "@raae/gatsby-plugin-new-css",
    `gatsby-plugin-sharp`,
//  Currently you cannot use StaticImage
//  or gatsby-transformer-sharp in SSR or DSG pages. The best workaround is to use an image CDN such as Cloudinary or imgix to host your images. This will give you faster builds and rendering too.
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,

    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-prismjs`,
    //       },
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 800,
    //           linkImagesToOriginal: false,
    //         },
    //       },
    //       {
    //         resolve: `@raae/gatsby-remark-oembed`,
    //         options: {
    //           providers: {
    //             // Important to exclude providers
    //             // that adds js to the page.
    //             // If you do not need them.
    //             exclude: [
    //               "Reddit",
    //               "Instagram",
    //               "Twitter",
    //               "Flickr",
    //               "YouTube",
    //             ],
    //           },
    //         },
    //       },
    //       {
    //         resolve: `gatsby-remark-responsive-iframe`,
    //       },
    //     ],
    //   },
    // },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/book1`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/content/skill-building`,
      },
    },
    `gatsby-plugin-image`,
//    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      // «This is the name of the plugin you are adding» Says Wes Bos
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'fr5nacyp',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
