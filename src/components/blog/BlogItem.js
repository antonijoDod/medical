import React from 'react'
import { FaRegClock, FaUserCircle } from "react-icons/fa"

const BlogItem = () => {
    return (
        <div className="column is-4">
            <div className="card">
              <div className="card-image">
                <img
                  src="https://qu3r1v212d48cje431eqa61a-wpengine.netdna-ssl.com/medical/wp-content/uploads/sites/10/2018/11/Services-5-768x550.jpg"
                  alt=""
                />
              </div>
              <div className="card-content">
                <span>
                  <FaRegClock className="icon is-small has-text-primary" />
                  August 1, 2018
                </span>
                <br/>
                <h2 className="title">This is title</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusantium, quis.
                </p>
                <br />
                <span>
                  <FaUserCircle className="icon has-text-primary" />
                  Marko Markic
                </span>
              </div>
            </div>
          </div>
    )
}

export default BlogItem
