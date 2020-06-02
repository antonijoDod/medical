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

const Blog = () => {

    const getPostsQuery = useStaticQuery(getPosts)
    console.log(getPostsQuery)
  return (
    <Layout>
      <SEO title="Blog" />
      <BlogItems data={getPostsQuery.allContentfulPost} />
    </Layout>
  )
}

export default Blog
