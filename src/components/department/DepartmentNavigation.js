import React from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

import "./departmentNavigation.scss"

const DepartmentNavigation = () => {
  return (
    <section className="section has-background-primary">
      <div className="container">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="media navigation__icon--align">
                <div className="media-left">
                  <FaArrowLeft className="icon" />
                </div>
                <div className="media-content">
                  <div className="heading has-text-weight-bold">Previous</div>
                  <strong>BRAIN</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <div className="media navigation__icon--align">
                <div className="media-content">
                  <div className="heading has-text-weight-bold">Next</div>
                  <strong>BRAIN</strong>
                </div>
                <div className="media-right">
                  <FaArrowRight className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DepartmentNavigation
