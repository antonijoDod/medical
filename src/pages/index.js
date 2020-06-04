import React, { lazy, Suspense } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import LandingHero from "../components/landing/LandingHero/LandingHero"
import Features from "../components/landing/Features/Features"
import Special from "../components/landing/Special/Special"
import Stats from "../components/landing/Stats/Stats"
import Doctors from "../components/landing/Doctors/Doctors"
import Layout from "../components/Layout"

const Intro = lazy(() => import("../components/landing/Intro/Intro"))

const IndexPage = () => (
  <Suspense fallback={<div>Loading</div>}>
  <Layout>
    <SEO title="Home" />
    <LandingHero />
    <Intro />
    <Features />
    <Special />
    <Stats />
    <Doctors />
  </Layout>
  </Suspense>
)

export default IndexPage
