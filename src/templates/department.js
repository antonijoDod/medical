import React from "react"
import { graphql } from "gatsby"
import DepartmentHero from "../components/department/DepartmentHero"
import DepartmentText from "../components/department/DepartmentText"
import DepartmentNavigation from "../components/department/DepartmentNavigation"
import SEO from "../components/seo"
import Layout from "../components/Layout"

const Department = props => {
  const {
    departmentsName,
    departmentsDescription,
    workingTime,
    phoneNumber,
    eMail,
    doctorsInDepartmentImage,
    departmentImage,
  } = props.data.item
  const {prev, next } = props.pageContext
  return (
    <Layout>
      <SEO title={departmentsName} />
      <DepartmentHero departmentImage={departmentImage.fluid} />
      <DepartmentText
        departmentsName={departmentsName}
        departmentsDescription={departmentsDescription}
        doctorsInDepartmentImage={doctorsInDepartmentImage}
        workingTime={workingTime}
        phoneNumber={phoneNumber}
        eMail={eMail}
      />
      <DepartmentNavigation prev={prev} next={next} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    item: contentfulDepartments(slug: { eq: $slug }) {
      id
      departmentsName
      slug
      departmentsDescription {
        json
      }
      workingTime
      phoneNumber
      eMail
      doctorsInDepartmentImage {
        id
        title
        description
        fixed {
          ...GatsbyContentfulFixed_withWebp
        }
      }
      departmentImage {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default Department
