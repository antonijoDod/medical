import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingHero from "../components/landing/LandingHero/LandingHero"
import Intro from "../components/landing/Intro/Intro"
import Features from "../components/landing/Features/Features"
import Special from "../components/landing/Special/Special"
import Stats from "../components/landing/Stats/Stats"
import Doctors from '../components/landing/Doctors/Doctors'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
     <LandingHero />
     <Intro />
     <Features />
     <Special />
     <Stats />
     <Doctors />
  </Layout>
)

export default IndexPage
