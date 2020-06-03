import React from "react"
import { Link } from "gatsby"

const Pagination = ({
  humanPageNumber,
  previousPagePath,
  nextPagePath,
  numberOfPages,
}) => {
  return (
    <section>
      <div className="container">
        <div className="column is-10 is-offset-1">
          <nav
            class="pagination is-centered"
            role="navigation"
            aria-label="pagination"
          >
            {previousPagePath ? (
              <Link to={previousPagePath} class="pagination-previous">
                Previous
              </Link>
            ) : (
              ""
            )}
            {nextPagePath ? (
              <Link to={nextPagePath} class="pagination-next">
                Next page
              </Link>
            ) : (
              ""
            )}
            <ul class="pagination-list">
              <li>
                <a className="pagination-link is-current">{humanPageNumber}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Pagination
