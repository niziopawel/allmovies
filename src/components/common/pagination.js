import React from 'react'
import './pagination.scss'

const Pagination = ({ totalPages, onPageChange, currentPage }) => {
  if (totalPages === 1) return null

  const handlePageChange = page => {
    onPageChange(page)
  }

  const returnPagesArray = (totalPages, currentPage) => {
    if (currentPage < 4) {
      return [...Array(6)].map((v, i) => i + 1)
    }

    if (currentPage > 3 && currentPage < totalPages - 2) {
      return [...Array(7)].map((v, i) => currentPage - 3 + i)
    }

    if (currentPage >= totalPages - 3) {
      return [...Array(6)].map((v, i) => totalPages - 5 + i)
    }
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {currentPage !== 1 ? (
          <li className="pagination__item">
            <a href="/#" onClick={() => handlePageChange(currentPage - 1)}>
              Prev
            </a>
          </li>
        ) : null}
        {returnPagesArray(totalPages, currentPage).map(page => {
          return (
            <li
              key={page}
              className={`pagination__item ${
                page === currentPage ? 'pagination__item--active' : ''
              }`}
            >
              {currentPage === page ? (
                <span>{page}</span>
              ) : (
                <a href="/#" onClick={() => handlePageChange(page)}>
                  {page}
                </a>
              )}
            </li>
          )
        })}
        {totalPages !== currentPage ? (
          <li className="pagination__item">
            <a href="/#" onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  )
}

export default Pagination
