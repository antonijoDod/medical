import React from "react"
import { FaRegClock, FaUserCircle } from "react-icons/fa"
import { Link } from "gatsby"
import Image from 'gatsby-image'
import Moment from "react-moment"

const Categorie = ({ title, excerpt, image, imageAlt, slug, author, createdAt }) => {
  return (
    <div className="column is-4">
      <Link to={`/blog/${slug}`}>
        <div className="card">
          <div className="card-image">
            <Image fluid={image} alt={imageAlt} />
          </div>
          <div className="card-content">
            <span>
              <FaRegClock className="icon is-small has-text-primary" />
              <Moment format="D. MMM YYYY">{createdAt}</Moment>
            </span>
            <br />
            <h2 className="title is-size-4">{title}</h2>
            <p>{excerpt}</p>
            <br />
            <span>
              <FaUserCircle className="icon has-text-primary" />
              {author}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Categorie
