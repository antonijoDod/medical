import React from "react"
import { Link } from "gatsby"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./departmentNavigation.scss"

const DepartmentNavigation = ({ prev, next }) => {
  console.log(prev)
  return (
    <section className="section has-background-primary">
      <div className="container">
        <div className="level is-mobile">
          <div className="level-left">
            <div className="level-item">
              {prev ? (
                <AniLink cover bg="#3E73DC" to={`/departments/${prev.slug}`}>
                  <div className="media navigation__icon--align">
                    <div className="media-left">
                      <FaArrowLeft className="icon" />
                    </div>
                    <div className="media-content">
                      <div className="heading has-text-weight-bold">
                        Previous
                      </div>
                      <strong>{prev.departmentsName}</strong>
                    </div>
                  </div>
                </AniLink>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              {next ? (
                <AniLink cover bg="#3E73DC" to={`/departments/${next.slug}`}>
                  <div className="media navigation__icon--align">
                    <div className="media-content">
                      <div className="heading has-text-weight-bold">Next</div>
                      <strong>{next.departmentsName}</strong>
                    </div>
                    <div className="media-right">
                      <FaArrowRight className="icon" />
                    </div>
                  </div>
                </AniLink>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DepartmentNavigation
