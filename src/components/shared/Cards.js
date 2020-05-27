import React from "react"
import Card from "./Card"
const Cards = ({ data }) => {
  return (
    <section className="section is-medium">
      <div className="column is-10 is-offset-1">
        <div className="columns is-multiline">
          {data.departments.edges.map(department => (
            <Card
              key={department.node.id}
              title={department.node.departmentsName}
              departmentUrlSlug={department.node.slug}
              imageUrl={department.node.departmentImage.fluid}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cards
