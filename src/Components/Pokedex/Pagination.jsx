import React from "react"

export const Pagination = ({
  pokesPerPage,
  currentPage,
  setCurrentPage,
  totalPokes,
}) => {
  const pageNumbers = []

  console.log(totalPokes / pokesPerPage)

  return (
    <nav
      className="pagination is-centered mb-5"
      role="navigation"
      aria-label="pagination"
    >
      <a className="pagination-previous">Previous</a>
      <a className="pagination-next">Next page</a>
      <ul className="pagination-list">
        <li>
          <a className="pagination-link" aria-label="Goto page 1">
            1
          </a>
        </li>

        <li>
          <a
            className="pagination-link is-current"
            aria-label="Page 46"
            aria-current="page"
          >
            46
          </a>
        </li>
      </ul>
    </nav>
  )
}