/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
//gatsby develop -H 0.0.0.0 (to view accross network)
module.exports = {
  siteMetadata: {
    title: `Mountain Home Exteriors`,
    description: `tbd`,
    author: `Jereme Daniels`,
  },
  plugins: [
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
        //icon: `src/images/fav.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
          },
          {
            family: `Hind Madurai`,
          },
          {
            family: "Roboto",
          },
        ],
      },
    },
  ],
}



//npm install --save node-sass gatsby-plugin-sass
//npm install --save gatsby-plugin-react-helmet react-helmet
//npm install --save gatsby-source-filesystem
//npm install --save gatsby-transformer-sharp gatsby-plugin-sharp
//npm install --save gatsby-transformer-remark
//npm install --save gatsby-plugin-prefetch-google-fonts
//npm install --save gatsby-image