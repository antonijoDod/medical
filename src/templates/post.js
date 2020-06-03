import React from 'react'
import PostHero from '../components/post/PostHero'
import PostText from '../components/post/PostText'
import SEO from "../components/seo"
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const Post = (props) => {
    const {title, categorie, author, image, createdAt, postText } = props.data.post
    return (
        <Layout>
            <SEO title={title} />
            <PostHero
                title={title}
                categorie={categorie}
                author={author}
                createdAt={createdAt}
                image={image}
            />
            <PostText
                postText={postText}
            />
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
     id
     slug
     title
     author
     categorie {
        id
        categorieName
        slug
     }
     createdAt
     image {
        id
        fluid(quality: 70, maxWidth: 1500) {
            ...GatsbyContentfulFluid_withWebp
          }
      }
     postText{
         id
         json
     }

    }
  }
`

export default Post
