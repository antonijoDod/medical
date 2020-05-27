import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import './landing.scss'

const backgroundImage = graphql`
  query {
    heroBg: file(relativePath: { eq: "medical.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const LandingHero = () => {
  const getImage = useStaticQuery(backgroundImage)
  const  heroBgImage  = getImage.heroBg.childImageSharp.fluid
  return (
    <BackgroundImage
    Tag="section"
    className="hero is-success is-fullheight landing-background"
    fluid={heroBgImage}
    backgroundColor={`grey`}
    >
        <div className="hero-body">
          <div className="container">
            <div className="column is-offset-1">
            <h1 className="subtitle is-spaced">The best medical center</h1>
            <h2 className="title is-size-1">
              Bringing health to life <br /> for them whole family
            </h2>
            <button className="button is-primary">
              Discover more
            </button>
            </div>
          </div>
        </div>
    </BackgroundImage>
  )
}

export default LandingHero
