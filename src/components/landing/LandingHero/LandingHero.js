import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "./landing.scss"

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
  return (
    <BackgroundImage
      Tag="section"
      className="hero is-success is-fullheight landing-background"
      fluid={getImage.heroBg.childImageSharp.fluid}
    >
      <div className="hero-body">
        <div className="container">
          <div className="column is-offset-1">
            <h1
              className="subtitle is-spaced"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="easeInOutCubic"
            >
              The best medical center
            </h1>
            <h2
              className="title is-size-1 is-size-2-mobile"
              data-sal="slide-up"
              data-sal-delay="400"
              data-sal-easing="easeOutElastic"
            >
              Bringing health to life <br /> for them whole family!
            </h2>
            <Link
              to="/departments"
              className="button is-primary"
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-easing="easeOutElastic"
            >
              Discover more
            </Link>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default LandingHero
