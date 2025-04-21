import React from 'react'

const Pagination = () => {
  return (
    <>
        <div className="pagination-area mt-50">
            <div aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">
                                <i className="fas fa-arrow-left" />
                            </span>
                        </a>
                    </li>
                    <li className="page-item active">
                        <a className="page-link" href="#">
                            1
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            2
                        </a>
                    </li>
                    <li className="page-item">
                        <span className="page-link">...</span>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            10
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">
                                <i className="fas fa-arrow-right" />
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Pagination
