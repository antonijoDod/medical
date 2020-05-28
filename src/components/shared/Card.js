import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "./card.scss"

const Card = ({ title, departmentUrlSlug, imageUrl }) => {
  return (
    <div className="column is-4">
      <AniLink cover bg="#3E73DC" to={`/departments/${departmentUrlSlug}`}>
        <div className="card">
          <div className="image__box">
            <Image fluid={imageUrl} className="image__box--center" />
          </div>
          <div className="card-content">
            <h2 className="title is-size-4">{title}</h2>
            <p className="heading">Learn more</p>
          </div>
        </div>
      </AniLink>
    </div>
  )
}

export default Card
