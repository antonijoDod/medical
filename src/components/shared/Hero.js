import React from "react"

const Hero = ({ title, description }) => {
  return (
    <section className="hero is-medium is-primary is-bold">
      <div className="hero-body">
        <div className="column is-10 is-offset-1">
          <div className="container">
            <div className="column is-6">
              <h1 className="title">{title}</h1>
              <h2 className="subtitle">{description}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
