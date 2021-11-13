require('dotenv').config({
  path: `.env.development`,
});
//process.env.SUPABASE_PUBLIC_TOKEN

module.exports = {
  siteMetadata: {
    siteUrl: "https://demo.raae.codes",
    title: "@raae demo starter",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "@raae/gatsby-plugin-new-css",
    // {
    //   resolve: `gatsby-source-supabase`,
    //   options: {
    //     supabaseUrl: "https://cfuwvmvbsyswmypjbjri.supabase.co",
    //     supabaseKey: process.env.SUPABASE_KEY,
    //     types: [
    //       {
    //         type: "User",
    //         query: (client) => client.from("users").select("olavea"),
    //       },
    //       {
    //         type: "Project",
    //         query: (client) => client.from("projects").select("Defer Sharky Gingerbread"),
    //       },
    //     ],
    //   },
    // },
  ],
};
