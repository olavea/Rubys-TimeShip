require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    siteUrl: "https://demo.raae.codes",
    title: "@raae demo starter",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "@raae/gatsby-plugin-new-css",
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
//    `gatsby-source-filesystem`,
    {
      // this is the name of the plugin i am adding. Says Wes Bos
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'fr5nacyp',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      }
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        // Sanity project info (required)
        projectId: "fr5nacyp",
        dataset: "production",
      },
    },
    `@raae/gatsby-plugin-let-it-snow`
  ],
};
