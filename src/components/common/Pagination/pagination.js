import React from 'react'
import { Link } from '@reach/router'
import './pagination.scss'

const Pagination = ({ totalPages, onPageChange, currentPage }) => {
  if (totalPages === 1) return null

  const handlePageChange = (e, page) => {
    e.preventDefault()
    onPageChange(page)
  }

  const returnPagesArray = (totalPages, currentPage) => {
    if (totalPages < 6) {
      return [...Array(totalPages)].map((v, i) => i + 1)
    }

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
            <Link to="/#" onClick={() => handlePageChange(currentPage - 1)}>
              Prev
            </Link>
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
                <Link to="/#" onClick={e => handlePageChange(e, page)}>
                  {page}
                </Link>
              )}
            </li>
          )
        })}
        {totalPages !== currentPage ? (
          <li className="pagination__item">
            <Link to="/#" onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </Link>
          </li>
        ) : null}
      </ul>
    </div>
  )
}

export default Pagination
