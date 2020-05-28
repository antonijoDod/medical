const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
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
  const departments = result.data.allContentfulDepartments.edges

  // Create Page pages.
  const Department = path.resolve(`./src/templates/department.js`)
  departments.forEach(({node}, index) => {

    const prev = index === 0 ? null : departments[index - 1].node;
    const next = index === (departments.length - 1 ) ? null : departments[index + 1].node
    createPage({
      path: `departments/${node.slug}`,
      component: slash(Department),
      context: {
        node,
        prev,
        next
      }
    })
  })
}