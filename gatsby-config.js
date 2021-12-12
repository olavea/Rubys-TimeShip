module.exports = {
  siteMetadata: {
    siteUrl: "https://timeship1.gatsbyjs.io/",
    title: `TimeShip1`,
    description: "Lillian and Friends Building Stuff",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "@raae/gatsby-plugin-new-css",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: path.join(__dirname, `src`, `images`),
    //   },
    // },
    `gatsby-plugin-image`,
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
  ],
};
