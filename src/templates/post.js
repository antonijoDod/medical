import React from 'react'
import PostHero from '../components/post/PostHero'
import PostText from '../components/post/PostText'
import SEO from "../components/seo"
import Layout from '../components/Layout'

const Post = (context) => {
    const {title, categorie, author, image, createdAt, postText } = context.pageContext.node
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

export default Post
