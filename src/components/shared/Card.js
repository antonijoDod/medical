import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Card = ({ title, departmentUrlSlug, imageUrl }) => {
  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-image">
          <Image fluid={imageUrl} />
        </div>
        <div className="card-content">
          <h2 className="title is-size-4">{title}</h2>
          <Link
            to={`/departments/${departmentUrlSlug}`}
            className="button is-primary"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
