import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/shared/Hero"
import Categories from "../components/categorie/Categories"

const Categorie = props => {
  console.log(props)
  const { categorieName, slug, post } = props.data.categorie
  return (
    <Layout>
      <Hero title={categorieName} description="This is description" />
      <Categories data={post} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    categorie: contentfulCategorie(slug: { eq: $slug }) {
      id
      categorieName
      slug
      post {
        id
        title
        slug
        image {
          id
          fluid(quality: 90, maxWidth: 300) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        author
        createdAt
        excerpt
      }
    }
  }
`

export default Categorie
