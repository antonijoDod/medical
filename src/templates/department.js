import React, {Fragment} from "react"
import DepartmentHero from "../components/department/DepartmentHero"
import DepartmentText from "../components/department/DepartmentText"
import DepartmentNavigation from "../components/department/DepartmentNavigation"
import SEO from "../components/seo"

const Department = (context) => {
  const {
    departmentsName,
    departmentsDescription,
    departmentImage,
    doctorsInDepartmentImage,
    workingTime,
    phoneNumber,
    eMail,
  } = context.pageContext.node
  const {prev, next} = context.pageContext
  return (
    <Fragment>
      <SEO title={departmentsName} />
      <DepartmentHero departmentImage={departmentImage.fluid.src} />
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

export default Department
