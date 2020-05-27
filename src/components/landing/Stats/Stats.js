import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "./stats.scss"

const backgroundImage = graphql`
  query {
    statsBg: file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Stats = () => {
  const getImage = useStaticQuery(backgroundImage)
  const statsBgImage = getImage.statsBg.childImageSharp.fluid
  return (
    <BackgroundImage
      Tag="section"
      className="section is-medium stats-background"
      fluid={statsBgImage}
      backgroundColor={`grey`}
    >
      <div className="column is-offset-1 is-10">
        <nav className="level has-text-light">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Established In</p>
              <p className="title has-text-white">1991</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Partners</p>
              <p className="title has-text-white">980</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Awards</p>
              <p className="title has-text-white">36</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Patients</p>
              <p className="title has-text-white">10 000+</p>
            </div>
          </div>
        </nav>
      </div>
    </BackgroundImage>
  )
}

export default Stats
