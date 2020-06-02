import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import "../scss/main.scss"

const departmentsLinks = graphql`
  query {
    links: allContentfulDepartments {
      edges {
        node {
          id
          slug
          departmentsName
        }
      }
    }
  }
`

const Header = ({ siteTitle }) => {
  const departmentsLinksQuery = useStaticQuery(departmentsLinks)
  const [isActive, setIsActive] = useState(false) 
  return (
    <header>
      <nav
        className="navbar is-link"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <span className="titile is-size-4">{siteTitle}</span>
            </Link>

            <a
              onClick={() => {
                setIsActive(!isActive)
              }}
              role="button"
              className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div
            id="navbarBasicExample"
            className={`navbar-menu ${isActive ? "is-active" : ""}`}
          >
            <div className="navbar-start">
              <div className="navbar-item has-dropdown is-hoverable"></div>
            </div>

            <div className="navbar-end">
              <Link
                to="/"
                activeClassName="has-text-primary"
                className="navbar-item"
                onClick={() => setIsActive(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                activeClassName="has-text-primary"
                className="navbar-item"
                onClick={() => setIsActive(false)}
              >
                About
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link
                  to="/departments"
                  activeClassName="has-text-primary"
                  className="navbar-link"
                  onClick={() => setIsActive(false)}
                >
                  Departments
                </Link>
                <div className="navbar-dropdown">
                  {departmentsLinksQuery.links.edges.map(link => (
                    <Link
                      activeClassName="has-text-primary"
                      key={link.node.id}
                      to={`/departments/${link.node.slug}`}
                      className="navbar-item" 
                      onClick={() => setIsActive(false)}
                    >
                      {link.node.departmentsName}
                    </Link>
                  ))}
                </div>
              </div>
              <a className="navbar-item">Contact</a>
              <Link to="/blog" className="navbar-item">Blog</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
