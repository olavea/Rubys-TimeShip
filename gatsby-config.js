require("dotenv").config({
  path: `.env.development`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://demo.raae.codes",
    title: "@raae demo starter",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "@raae/gatsby-plugin-new-css",
    "gatsby-transformer-remark",
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     // Footnotes mode (default: true)
    //     footnotes: true,
    //     // GitHub Flavored Markdown mode (default: true)
    //     gfm: true,
    //     // Plugins configs
    //     plugins: [],
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
  ],
};
