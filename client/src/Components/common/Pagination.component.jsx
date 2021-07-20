import React, { Fragment } from "react";
import "./pagination.style.css";
import _ from "lodash";
import PaginateChange from "./Paginate.Change.component";
import PropTypes from 'prop-types'

const Pagination = ({
  pageSize,
  itemsCount,
  currentPage,
  onPageChange,
  onPageSizeChange,
}) => {
  const pagesCount = itemsCount / pageSize;
  let pages = _.range(1, Math.ceil(pagesCount) + 1);
  // console.log("pagination", pages);
  // console.log("pagesCount", pagesCount);
  // console.log("itemsCount", itemsCount);
  // console.log("currentpage", currentPage);

  if (itemsCount - pageSize <= 0) {
    return (
      <PaginateChange
        onPageSizeChange={onPageSizeChange}
        onPageReset={onPageChange}
        pageSize={pageSize}
      />
    );
  }

  return (
    <Fragment>
      <div>
        <nav aria-label="Page navigation example">
          <ul className="center pagination">
            <li className="page-item">
              <button className="page-link" href="#" disabled>
                Previous
              </button>
            </li>
            {pages.map((p) => (
              <li
                key={p}
                className={p === currentPage ? "page-item active" : "page-item"}
              >
                <button
                  onClick={() => onPageChange(p)}
                  className="page-link"
                  href="#"
                >
                  {p}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button className="page-link" href="#">
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="px-4">
        <PaginateChange
          onPageSizeChange={onPageSizeChange}
          onPageReset={onPageChange}
          pageSize={pageSize}
        />
      </div>
    </Fragment>
  );
};

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired
};

export default Pagination;
