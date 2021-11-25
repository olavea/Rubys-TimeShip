require("dotenv").config({
  path: `.env.dev`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://demo.raae.codes",
    title: "@raae demo starter",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "@raae/gatsby-plugin-new-css",
    {/**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
     resolve: `gatsby-source-wordpress`,
     options: {
       // the only required plugin option for WordPress is the GraphQL url.
       url: `http://app.olavea.com/graphql`,
     },
   },

   /**
    * We need this plugin so that it adds the "File.publicURL" to our site
    * It will allow us to access static url's for assets like PDF's
    *
    * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
    */
   {
     resolve: `gatsby-source-filesystem`,
     options: {
       name: `assets`,
       path: `${__dirname}/content/assets`,
     },
   },

   /**
    * The following two plugins are required if you want to use Gatsby image
    * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
    * if you're curious about it.
    */
   `gatsby-transformer-sharp`,
   `gatsby-plugin-sharp`,
   `gatsby-plugin-image`,
  ],
};
