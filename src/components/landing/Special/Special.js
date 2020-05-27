import React from "react"
import { FaBrain } from "react-icons/fa"
import {
  GiHealing,
  GiHeartOrgan,
  GiNestedHearts,
  GiWeight,
} from "react-icons/gi"

const Special = () => {
  return (
    <section id="special" className="section is-medium">
      <div className="column is-offset-1 is-10">
        <div className="container">
          <div className="column is-offset-3 is-6 has-text-centered">
            <h2 className="title">What we specialize in</h2>
            <p>
              We specialize in a wide array of medical fields and have some of
              the best facilities and doctors to take care of you.
            </p>
          </div>
          <br />
          <br />
          <div className="columns is-multiline">
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <FaBrain className="icon is-large has-text-primary" />
                    </div>
                    <div className="media-content">
                      <p className="title is-size-4">Brain</p>
                      <p className="subtitle is-size-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <GiHealing className="icon is-large has-text-primary" />
                    </div>
                    <div className="media-content">
                      <p className="title is-size-4">Health</p>
                      <p className="subtitle is-size-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <GiHeartOrgan className="icon is-large has-text-primary" />
                    </div>
                    <div className="media-content">
                      <p className="title is-size-4">Transplantation</p>
                      <p className="subtitle is-size-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <GiNestedHearts className="icon is-large has-text-primary" />
                    </div>
                    <div className="media-content">
                      <p className="title is-size-4">Cardiology</p>
                      <p className="subtitle is-size-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <FaBrain className="icon is-large has-text-primary" />
                    </div>
                    <div className="media-content">
                      <p className="title is-size-4">Brain</p>
                      <p className="subtitle is-size-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <GiWeight className="icon is-large has-text-primary" />
                    </div>
                    <div className="media-content">
                      <p className="title is-size-4">Weight Managment</p>
                      <p className="subtitle is-size-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Special
