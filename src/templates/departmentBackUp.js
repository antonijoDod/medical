import React, { Fragment } from "react"
import { graphql } from "gatsby"
import DepartmentHero from "../components/department/DepartmentHero"
import DepartmentText from "../components/department/DepartmentText"
import DepartmentNavigation from "../components/department/DepartmentNavigation"
import SEO from "../components/seo"

const Department = context => {
  const {
    departmentsName,
    departmentsDescription,
    departmentImage,
    doctorsInDepartmentImage,
    workingTime,
    phoneNumber,
    eMail,
  } = context.pageContext.node
  const { prev, next } = context.pageContext
  let getData = useStaticQuery(query)/*  */
  console.log(getData)
  return (
    <Fragment>
      <SEO title={departmentsName} />
      <DepartmentHero departmentImage={getData.item.departmentImage.fluid} />
      <DepartmentText
        departmentsName={departmentsName}
        departmentsDescription={departmentsDescription}
        doctorsInDepartmentImage={doctorsInDepartmentImage}
        workingTime={workingTime}
        phoneNumber={phoneNumber}
        eMail={eMail}
      />
      <DepartmentNavigation prev={prev} next={next} />
    </Fragment>
  )
}

export const query = graphql`
  query DepartmentItemQuery($slug: String!) {
    item: contentfulDepartments(slug: { eq: $slug }) {
      id
      slug
      departmentsName
      departmentImage {
        fluid(quality: 90, maxWidth: 300) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default Department
