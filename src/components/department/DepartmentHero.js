import React from 'react'
import Image from 'gatsby-image'
const DepartmentHero = ({departmentImage}) => {
    return (
        <section className="section">
            <div className="column is-10 is-offset-1">
               <Image fluid={departmentImage} />
            </div>
        </section>
    )
}

export default DepartmentHero
