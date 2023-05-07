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

  const maxPagesToShow = 10
  const middlePage = Math.floor(maxPagesToShow / 2)
  const maxPage = Math.min(currentPage + middlePage, pageNumbers.length)
  const minPage = Math.max(maxPage - maxPagesToShow + 1, 1)
  const displayedPages = pageNumbers.slice(minPage - 1, maxPage)

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const onNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const onSpecificPage = n => {
    setCurrentPage(n)
  }

  return (
    <nav
      className="pagination is-centered mb-5"
      role="navigation"
      aria-label="pagination"
    >
      <a
        className={`pagination-previous ${
          currentPage === 1 ? "is-disabled" : ""
        }`}
        onClick={onPreviousPage}
      >
        Previous
      </a>
      <a
        className={`pagination-next ${
          currentPage >= pageNumbers.length ? "is-disabled" : ""
        }`}
        onClick={onNextPage}
      >
        Next page
      </a>
      <ul className="pagination-list">
        {pageNumbers.map(noPage => (
          <li key={noPage}>
            <a
              className={`pagination-link ${
                noPage === currentPage ? "is-current" : ""
              }`}
              onClick={() => onSpecificPage(noPage)}
            >
              {noPage}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
