import React from "react"
import BlogItem from './BlogItem'
import './blogItems.scss'

const BlogItems = () => {
  return (
    <section className="section" id="blog-items">
      <div className="column is-10 is-offset-1">
        <div className="columns is-multiline">
          <BlogItem />
        </div>
      </div>
    </section>
  )
}

export default BlogItems
