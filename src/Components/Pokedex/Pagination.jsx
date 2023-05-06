import React from "react"

export const Pagination = ({
  pokesPerPage,
  currentPage,
  setCurrentPage,
  totalPokes,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPokes / pokesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav
      className="pagination is-centered mb-5"
      role="navigation"
      aria-label="pagination"
    >
      <a className="pagination-previous">Previous</a>
      <a className="pagination-next">Next page</a>
      <ul className="pagination-list">
        {pageNumbers.map(noPage => (
          <li key={noPage}>
            <a className="pagination-link">{noPage}</a>
          </li>
        ))}
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
