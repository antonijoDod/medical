const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulDepartments {
        edges {
          node {
            id
            slug
            departmentsName
          }
        }
      }
      allContentfulPost {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const departments = result.data.allContentfulDepartments.edges
  const posts = result.data.allContentfulPost.edges

  // Create Page pages.
  const Department = path.resolve(`./src/templates/department.js`)
  departments.forEach(({ node }, index) => {
    const prev = index === 0 ? null : departments[index - 1].node
    const next =
      index === departments.length - 1 ? null : departments[index + 1].node
    createPage({
      path: `departments/${node.slug}`,
      component: Department,
      context: {
        node,
        prev,
        next,
        slug: node.slug,
      },
    })
  })
  const Posts = path.resolve(`./src/templates/post.js`)
  posts.forEach(({ node }, index) => {
    const prev = index === 0 ? null : posts[index - 1].node
    const next = index === posts.length - 1 ? null : posts[index + 1].node
    createPage({
      path: `blog/${node.slug}`,
      component: Posts,
      context: {
        node,
        prev,
        next,
        slug: node.slug,
      },
    })
  })
}
