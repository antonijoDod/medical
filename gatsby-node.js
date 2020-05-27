const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
        allContentfulDepartments {
            edges {
              node {
                id
                workingTime
                phoneNumber
                slug
                eMail
                doctorsInDepartment
                doctorsInDepartmentImage {
                  id
                  title
                  description
                  fixed {
                   src
                  }
                }
                departmentsName
                departmentsDescription {
                  json
                }
                departmentImage {
                  fluid(quality: 90, maxWidth: 1920) {
                    src
                  }
                }
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
  const { allContentfulDepartments } = result.data

  // Create Page pages.
  const Department = path.resolve(`./src/templates/department.js`)
  // We want to create a detailed page for each page node.
  // The path field contains the relative original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Page ID is prefixed with 'PAGE_'
  allContentfulDepartments.edges.forEach(({node}, index) => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `departments/${node.slug}`,
      component: slash(Department),
      context: node,
      link: index
    })
  })
}