import React from "react"
import Categorie from './Categorie'

const Categories = ({data}) => {
  return (
    <section className="section" id="blog-items">
    <div className="column is-10 is-offset-1">
      <div className="columns is-multiline">
        {data.map(item => (
          <Categorie key={item.id} 
          title={item.title}
          excerpt={item.excerpt}
          slug={item.slug}
          author={item.author}
          image={item.image.fluid}
          createdAt={item.createdAt}
          />
        ))}
      </div>
    </div>
  </section>
  )
}

export default Categories
