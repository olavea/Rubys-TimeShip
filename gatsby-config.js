require('dotenv').config({
  path: `.env.dev`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://demo.raae.codes",
    title: "@raae demo starter",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "@raae/gatsby-plugin-new-css",
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: '2AoGlr4QFWuwXBLbjprVQgtt',
        version: 'draft',
      }
    },
  ],
};
