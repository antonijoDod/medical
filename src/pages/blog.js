import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import BlogItems from "../components/blog/BlogItems"
import { graphql, useStaticQuery } from "gatsby"

const getPosts = graphql`
  query {
    allContentfulPost {
      edges {
        node {
          id
          title
          slug
          createdAt
          postText {
            id
            json
          }
          image {
            id
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

const Blog = () => {

    const getPostsQuery = useStaticQuery(getPosts)
  return (
    <Layout>
      <SEO title="Blog" />
      <BlogItems />
    </Layout>
  )
}

export default Blog
