exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulGallery {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulGallery.edges.forEach(edge => {
    createPage({
      path: `/galleries/${edge.node.slug}`,
      component: path.resolve("./src/templates/photoGallery.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}