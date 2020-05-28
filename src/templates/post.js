import React, {Fragment} from 'react'
import PostHero from '../components/post/PostHero'
import PostText from '../components/post/PostText'
import SEO from "../components/seo"

const Post = (context) => {
    const {title, categorie, author, image, createdAt, postText } = context.pageContext.node
    return (
        <Fragment>
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
        </Fragment>
    )
}

export default Post
