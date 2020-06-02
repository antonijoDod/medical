import React from "react"
import {
  FaFacebookF,
  FaFacebookMessenger,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="has-background-light">
      <br />
      <br />
      <div className="column is-10 is-offset-1">
        <div className="columns">
          <div className="column is-3">
            <h3 className="subtitle has-text-dark has-text-weight-bold">
              Departments
            </h3>
            <ul className="menu-list">
              <li>
                <a href="/#">Medicinal Treatments</a>
              </li>
              <li>
                <a href="/#">Gynecology</a>
              </li>
              <li>
                <a href="/#">Brain & Spine</a>
              </li>
              <li>
                <a href="/#">Cardiology</a>
              </li>
              <li>
                <a href="/#">Physiotherapy</a>
              </li>
            </ul>
          </div>
          <div className="column is-3">
            <h3 className="subtitle has-text-dark has-text-weight-bold">
              Corporate
            </h3>
            <ul className="menu-list">
              <li>
                <a href="/#">Careers</a>
              </li>
              <li>
                <a href="/#">Pricing</a>
              </li>
              <li>
                <a href="/#">Press Kit</a>
              </li>
              <li>
                <a href="/#">Resources</a>
              </li>
              <li>
                <a href="/#">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="column is-3">
            <h3 className="subtitle has-text-dark has-text-weight-bold">
              Corporate
            </h3>
            <ul className="menu-list">
              <li>
                <a href="/#">Disclaimer</a>
              </li>
              <li>
                <a href="/#">Legal</a>
              </li>
              <li>
                <a href="/#">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="column is-3">
            <h3 className="subtitle has-text-dark has-text-weight-bold">
              Other locations
            </h3>
            <ul className="menu-list">
              <li>
                <strong>London</strong>
                <p>Street 135. River</p>
              </li>
              <br />
              <li>
                <strong>Berlin</strong>
                <p>AV. NY - 654352</p>
              </li>
              <br />
              <li>
                <strong>Tokyo</strong>
                <p>Tokyo St.536</p>
              </li>
            </ul>
          </div>
        </div>
        <hr className="has-background-grey-lighter" />
        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <p className="subtitle is-5">
                <strong className="has-text-primary">Medical</strong>
              </p>
            </div>
          </div>

          <div className="level-right">
            <div className="level-item">
              <span className="icon has-text-grey is-large">
                <FaFacebookF className="is-medium" />
              </span>
              <span className="icon has-text-grey is-large">
                <i className="fas fa-check-square"></i>
                <FaFacebookMessenger />
              </span>
              <span className="icon has-text-grey is-large">
                <FaTwitter />
              </span>
              <span className="icon has-text-grey is-large">
                <FaInstagram />
              </span>
            </div>
          </div>
        </nav>
        <div className="has-text-centered is-size-6 has-text-grey">
          Copyright 2020 @ New Age. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
