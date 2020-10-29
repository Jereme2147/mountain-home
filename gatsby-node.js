exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     node: {
//       fs: "empty",
//     },
//   })
// }
// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       modules: [
//         path.resolve(__dirname, "node_modules"),
//         path.resolve(__dirname, "src"),
//         "node_modules",
//       ],
//     },
//   })
// }