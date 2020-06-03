const path = require(`path`)
const { paginate } = require ('gatsby-awesome-pagination')
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
      allContentfulCategorie {
        edges {
          node {
            id
           categorieName
           slug
          }
        }
      }
      blog: allContentfulPost {
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
  const categories = result.data.allContentfulCategorie.edges

  // Create Page pages.
  const Department = path.resolve(`./src/templates/department.js`)
  departments.forEach(({ node }, index) => {
    const prev = index === 0 ? null : departments[index - 1].node
    const next = index === departments.length - 1 ? null : departments[index + 1].node
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
 const Categorie = path.resolve(`./src/templates/categorie.js`)
  categories.forEach(({ node }, index) => {
    const prev = index === 0 ? null : categories[index - 1].node
    const next = index === categories.length - 1 ? null : categories[index + 1].node
    createPage({
      path: `categories/${node.slug}`,
      component: Categorie,
      context: {
        node,
        prev,
        next,
        slug: node.slug,
      },
    })
  })
  paginate({
    createPage, // The Gatsby `createPage` function
    items: result.data.blog.edges, // An array of objects
    itemsPerPage: 6, // How many items you want per page
    pathPrefix: '/blog', // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve('src/templates/blog.js') // Just like `createPage()`
  })
}
