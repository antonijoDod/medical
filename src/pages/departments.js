import React from "react"
import Hero from "../components/shared/Hero"
import Cards from "../components/shared/Cards"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"

const getDepartments = graphql`
  {
    departments: allContentfulDepartments {
      edges {
        node {
          id
          departmentsName
          slug
          departmentImage {
            fluid(quality: 90, maxWidth: 300) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const Departments = () => {
  const getDepartmentsQuery = useStaticQuery(getDepartments)
  return (
    <Layout>
      <SEO title="Departments" />
      <Hero
        title="Departments & Programs"
        description="We have a rich history of treating patients and daignosing rare diseases and have won many awards. "
      />
      <Cards data={getDepartmentsQuery} />
    </Layout>
  )
}

export default Departments
