import React from "react"
import Layout from "../components/layout"
import DepartmentHero from "../components/department/DepartmentHero"
import DepartmentText from "../components/department/DepartmentText"
import DepartmentNavigation from "../components/department/DepartmentNavigation"

const Department = (context, link) => {
  const {
    departmentsName,
    departmentsDescription,
    departmentImage,
    doctorsInDepartmentImage,
    workingTime,
    phoneNumber,
    eMail,
  } = context.pageContext
  console.log(link)
  return (
    <Layout>
      <DepartmentHero departmentImage={departmentImage.fluid.src} />
      <DepartmentText
        departmentsName={departmentsName}
        departmentsDescription={departmentsDescription}
        doctorsInDepartmentImage={doctorsInDepartmentImage}
        workingTime={workingTime}
        phoneNumber={phoneNumber}
        eMail={eMail}
      />
      <DepartmentNavigation />
    </Layout>
  )
}

export default Department
