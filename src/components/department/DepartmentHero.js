import React from 'react'
import Image from 'gatsby-image'
const DepartmentHero = ({departmentImage}) => {
    return (
        <section className="section">
            <div className="column is-10 is-offset-1">
               <img src={departmentImage} />
            </div>
        </section>
    )
}

export default DepartmentHero
