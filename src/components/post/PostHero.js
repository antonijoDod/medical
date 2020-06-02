import React from "react"
import Moment from "react-moment"
import { FaRegClock, FaUserCircle } from "react-icons/fa"
import "./posthero.scss"
const PostHero = ({ title, categorie, author, image, createdAt }) => {
  return (
    <section style={{backgroundImage: `url(${image.fluid.src})`}} className="hero__before hero is-medium has-text-light" id="post__hero">
      <div className="column is-8 is-offset-2">
        <div className="hero-body">
          <div className="container">
            <p className="heading">
              {categorie.map(categorie => (
                <span key={categorie.id}>{categorie.categorieName} </span>
              ))}
            </p>
            <h1 className="title is-spaced is-white has-text-white is-size-1">{title}</h1>
            <p className="subtitle is-size-6 has-text-white-ter">
              <span>
                <FaUserCircle className="icon is-small has-text-primary" />
                By {author}
              </span>
              <br />
              <span>
                <FaRegClock className="icon is-small has-text-primary" />
                <Moment format="D. MMM YYYY">
                 {createdAt}
                </Moment>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostHero
