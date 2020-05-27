import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const doctorsImages = graphql`
  query {
    doctor1: file(relativePath: { eq: "doctors/doctor1.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    doctor2: file(relativePath: { eq: "doctors/doctor2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    doctor3: file(relativePath: { eq: "doctors/doctor3.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    doctor4: file(relativePath: { eq: "doctors/doctor4.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    doctor5: file(relativePath: { eq: "doctors/doctor5.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    doctor6: file(relativePath: { eq: "doctors/doctor6.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Doctors = () => {
  const doctors = useStaticQuery(doctorsImages)
  const { doctor1, doctor2, doctor3, doctor4, doctor5, doctor6 } = doctors
  console.log(doctor1)
  return (
    <section className="section is-medium">
      <div className="column is-offset-1 is-10">
        <div className="column is-6 is-offset-3 has-text-centered">
          <div className="title">Our Doctors</div>
          <p>
            These are some of our best doctors who earned a recognition for us
            and this hospital.
          </p>
        </div>
        <br />
        <br />
        <div className="columns is-multiline">
          <div className="column is-4">
            <div className="card">
              <div className="card-image">
                <Image
                  fluid={doctor1.childImageSharp.fluid}
                  alt="Placeholder image"
                />
              </div>
              <div className="card-content">
                <h3 className="title is-5">John Doe</h3>
                <p className="subtitle is-7 heading">GASTROENTROLOGIST</p>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card">
              <div className="card-image">
                <Image
                  fluid={doctor2.childImageSharp.fluid}
                  alt="Placeholder image"
                />
              </div>
              <div className="card-content">
                <h3 className="title is-5">Ronny Gonzalez</h3>
                <p className="subtitle is-7 heading">CARDIOLOGIST</p>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card">
              <div className="card-image">
                <Image
                  fluid={doctor3.childImageSharp.fluid}
                  alt="Placeholder image"
                />
              </div>
              <div className="card-content">
                <h3 className="title is-5">Matthew Couch</h3>
                <p className="subtitle is-7 heading">PEDIATRICIAN</p>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card">
              <div className="card-image">
                <Image
                  fluid={doctor4.childImageSharp.fluid}
                  alt="Placeholder image"
                />
              </div>
              <div className="card-content">
                <h3 className="title is-5">Ismael Hilton</h3>
                <p className="subtitle is-7 heading">PEDIATRICIAN</p>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card">
              <div className="card-image">
                <Image
                  fluid={doctor5.childImageSharp.fluid}
                  alt="Placeholder image"
                />
              </div>
              <div className="card-content">
                <h3 className="title is-5">Nial Lin</h3>
                <p className="subtitle is-7 heading">DENTIST</p>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card">
              <div className="card-image">
                <Image
                  fluid={doctor6.childImageSharp.fluid}
                  alt="Placeholder image"
                />
              </div>
              <div className="card-content">
                <h3 className="title is-5">Toni Cline</h3>
                <p className="subtitle is-7 heading">CARDIOLOGIST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Doctors
