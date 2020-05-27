import React from "react"
import {
  FaClinicMedical,
  FaFileMedicalAlt,
  FaNotesMedical,
} from "react-icons/fa"
import "./features.scss"

const Features = () => {
  return (
    <section id="features" className="section has-background-light is-medium">
      <div className="column is-offset-1 is-10">
        <div className="container">
          <div className="column is-4 is-offset-4 has-text-centered">
            <h2 className="title">We help you get well sooner</h2>
          </div>
          <div className="columns has-text-centered">
            <div className="column is-4">
              <div className="icon-wraper has-background-primary has-text-light">
                <FaClinicMedical className="icon is-large features-icon" />
              </div>
              <h3 className="has-text-dark subtitle">Careful and Precise</h3>
              <p className="has-text-grey">
                Get started swiftly & easily by importing a demo of your choice
                in a single click.
              </p>
            </div>
            <div className="column is-4">
              <div className="icon-wraper has-background-primary has-text-light">
                <FaFileMedicalAlt className="icon is-large features-icon" />
              </div>
              <h3 className="has-text-dark subtitle">Careful and Precise</h3>
              <p className="has-text-grey">
                Get started swiftly & easily by importing a demo of your choice
                in a single click.
              </p>
            </div>
            <div className="column is-4">
              <div className="icon-wraper has-background-primary has-text-light">
                <FaNotesMedical className="icon is-large features-icon" />
              </div>
              <h3 className="has-text-dark subtitle">Careful and Precise</h3>
              <p className="has-text-grey">
                Get started swiftly & easily by importing a demo of your choice
                in a single click.
              </p>
            </div>
          </div>
          <div className="has-text-centered">
            <button className="button is-primary">LERN MORE</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
