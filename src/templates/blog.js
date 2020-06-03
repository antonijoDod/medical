import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import BlogItems from "../components/blog/BlogItems"
import { graphql, Link } from "gatsby"
import Hero from "../components/shared/Hero"
import Pagination from '../components/shared/Pagination'

const Blog = (props) => {
  console.log(props)
  const {previousPagePath, nextPagePath, numberOfPages, humanPageNumber} = props.pageContext
  return (
    <Layout>
      <SEO title="Blog" />
      <Hero
        title="Blog"
        description="Check our posts"
      />
      <BlogItems data={props.data.allContentfulPost} />
      <Pagination 
        previousPagePath={previousPagePath}
        nextPagePath={nextPagePath}
        humanPageNumber={humanPageNumber}
        numberOfPages={numberOfPages}
      />
    </Layout>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!){
    allContentfulPost(
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          slug
          excerpt
          createdAt
          author
          postText {
            id
            json
          }
          image {
            id
            fluid(quality: 90, maxWidth: 300) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default Blog
