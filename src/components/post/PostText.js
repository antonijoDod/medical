import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

const PostText = ({postText}) => {
  return (
    <section className="section">
      <div className="column is-8 is-offset-2">
        <div className="rich-text">
          {documentToReactComponents(postText.json, {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node, Children) => (
                <img
                  src={node.data.target.fields.file["en-US"].url}
                  alt={node.data.target.fields.title["en-US"]}
                />
              ),
            },
          })}
        </div>
      </div>
    </section>
  )
}

export default PostText
