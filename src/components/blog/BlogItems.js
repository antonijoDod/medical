import React from "react"
import BlogItem from './BlogItem'
import './blogItems.scss'

const BlogItems = ({data}) => {
  console.log(data)
  return (
    <section className="section" id="blog-items">
      <div className="column is-10 is-offset-1">
        <div className="columns is-multiline">
          {data.edges.map(edge => (
            <BlogItem key={edge.node.id} 
            title={edge.node.title}
            excerpt={edge.node.excerpt}
            slug={edge.node.slug}
            author={edge.node.author}
            image={edge.node.image.fluid}
            createdAt={edge.node.createdAt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogItems
