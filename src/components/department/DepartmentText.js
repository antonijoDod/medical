import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { FaClock, FaHeadphones, FaMailBulk } from "react-icons/fa"
import "./departmentText.scss"

const DepartmentText = ({
  departmentsName,
  departmentsDescription,
  doctorsInDepartmentImage,
  workingTime,
  phoneNumber,
  eMail,
}) => {
  return (
    <section className="section">
      <div className="column is-10 is-offset-1">
        <div className="columns">
          <div className="column is-8">
            <h1 className="title">{departmentsName}</h1>
            <div className="rich-text">
              {documentToReactComponents(departmentsDescription.json, {
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
          <div className="column is-4">
            <div className="card">
              <div className="card-content">
                {doctorsInDepartmentImage.map(doctor => (
                  <article className="media" key={doctor.id}>
                    <figure className="media-left">
                      <p className="image is-64x64">
                        <img
                          className="is-rounded"
                          src={doctor.fixed.src}
                          alt={doctor.title}
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>{doctor.title}</strong>
                          <br/>
                          {doctor.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <br />
            <br />
            <div className="card">
              <div className="card-content">
                <div className="card__content--align">
                  <FaClock className="icon has-text-primary is-medium" />
                  <span>{workingTime}</span>
                </div>
                <br />
                <div className="card__content--align">
                  <FaHeadphones className="icon has-text-primary is-medium" />
                  <span>{phoneNumber}</span>
                </div>
                <br />
                <div className="card__content--align">
                  <FaMailBulk className="icon has-text-primary is-medium" />
                  <span>{eMail}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DepartmentText
