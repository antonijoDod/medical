import React from "react"
import { Link } from "gatsby"
import Moment from "react-moment"
import { FaRegClock, FaUserCircle } from "react-icons/fa"
import "./posthero.scss"
import BackgroundImage from "gatsby-background-image"
const PostHero = ({ title, categorie, author, image, createdAt }) => {
  return (
    <BackgroundImage
      Tag="section"
      backgroundColor={`#040e18`}
      fluid={image.fluid}
      className="hero__before hero is-medium has-text-light"
      id="post__hero"
    >
      <div className="column is-8 is-offset-2">
        <div className="hero-body">
          <div className="container">
            <nav
              class="breadcrumb has-text-white has-succeeds-separator"
              aria-label="breadcrumbs"
            >
              <ul>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>{" "}
                {categorie.map(categorie => (
                  <li>
                    <Link to={`/categories/${categorie.slug}`}>{categorie.categorieName}</Link>
                  </li>
                ))}
                <li class="is-active">
                  <a href="!#" aria-current="page">
                    {title}
                  </a>
                </li>
              </ul>
            </nav>
            <h1 className="title is-spaced is-white has-text-white is-size-1">
              {title}
            </h1>
            <p className="subtitle is-size-6 has-text-white-ter">
              <span>
                <FaUserCircle className="icon is-small has-text-primary" />
                By {author}
              </span>
              <br />
              <span>
                <FaRegClock className="icon is-small has-text-primary" />
                <Moment format="D. MMM YYYY">{createdAt}</Moment>
              </span>
            </p>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default PostHero
