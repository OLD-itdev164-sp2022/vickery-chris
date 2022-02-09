const path = requre(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPages } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      result.data.allContentfulBlogPosts.edges.forEach(edge => {
        createPages({
          path: edge.node.slug,
          component: path.resolve(`./scr/templates/blog-post.js`),
          context: {
            slug: edge.node.slug,
          },
        })
      })
      resolve()
    })
  })
}

/*
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
*/
