require("dotenv").config()
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
//gatsby develop -H 0.0.0.0 (to view accross network)
// not sure if this is needed npm run setup -- --spaceId a7n4pp46ut7q --deliveryToken 8r0QbGt8A5NR_NRx-YKijBLAocYvQmY8g0BBOoBxwg8 --managementToken CFPAT-b1fUiOQ4a8eP5FBvIPGU4OiiZ1-q5FIBVxfkSM_m1Kg
module.exports = {
  siteMetadata: {
    title: `Mountain Home Exteriors`,
    description: `tbd`,
    author: `Jereme Daniels`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `cruwj48g0w0t`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mountain Home Exteriors`,
        short_name: `starter`,
        start_url: `/`,
        // background_color: `#679436'`,
        // theme_color: `#663399`,
        display: `standalone`, 
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Montserrat`,
    //       },
    //       {
    //         family: `Hind Madurai`,
    //       },
    //       {
    //         family: "Roboto",
    //       },
    //     ],
    //   },
    // },
  ],
}



//npm install --save node-sass gatsby-plugin-sass
//npm install --save gatsby-plugin-react-helmet react-helmet
//npm install --save gatsby-source-filesystem
//npm install --save gatsby-transformer-sharp gatsby-plugin-sharp
//npm install --save gatsby-transformer-remark
//npm install --save gatsby-plugin-prefetch-google-fonts
//npm install --save gatsby-image