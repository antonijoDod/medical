import React from "react"
import {FaCheckSquare} from 'react-icons/fa'
import './intro.scss'
const Intro = () => {
  return (
    <section id="intro">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-5 is-offset-1">
            <img
              src="https://qu3r1v212d48cje431eqa61a-wpengine.netdna-ssl.com/medical/wp-content/uploads/sites/10/2018/07/Home-IMG-2.jpg"
              alt=""
            />
          </div>
          <div className="column is-5">
            <h6 className="subtitle is-spaced is-size-7 has-text-weight-bold has-text-grey">
              WELCOME TO OUR PROFESSIONAL
            </h6>
            <h2 className="title">Healthcare Center</h2>
            <p>
              We collaborate with organizations that are keen to transform the
              legal industry with tech. Using the legal design process, we can
              help you ideate, build prototypes, test concepts and implement
              viable.
            </p>
            <br />
            <br />
            <div className="column is-12">
            <div className="card">
              <div className="card-content">
                <h3 className="card-title has-text-dark">Why Choose Us</h3>
                <br/>
                <p className="is-large intro__align--center">
                  <FaCheckSquare className="icon has-text-primary"/>
                  <span className="has-text-grey">State of the art equipments</span>
                  </p>
                  <p className="is-large intro__align--center" >
                  <FaCheckSquare className="icon has-text-primary"/>
                  <span className="has-text-grey">Highly qualified doctors</span>
                  </p>
                  <p className="is-large intro__align--center" >
                  <FaCheckSquare className="icon has-text-primary"/>
                  <span className="has-text-grey">Best in class hospitality</span>
                  </p>
                  <p className="is-large intro__align--center" >
                  <FaCheckSquare className="icon has-text-primary"/>
                  <span className="has-text-grey">98% Success rate in surgeries</span>
                  </p>
                  <p className="is-large intro__align--center" >
                  <FaCheckSquare className="icon has-text-primary"/>
                  <span className="has-text-grey">Affordable healthcare</span>
                  </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
