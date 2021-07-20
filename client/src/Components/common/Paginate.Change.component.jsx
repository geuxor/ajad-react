import React from 'react';

function paginateChange({ onPageSizeChange, onPageReset, pageSize }) {

  return (
    <div className="dropup">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-haspopup="true"
      >
        showing {pageSize} items{" "}
      </button>
      <div className="dropup-content">
        <button
          className="btn btn-secundary"
          onClick={() => {
            onPageSizeChange(10);
            onPageReset(1);
          }}
        >
          10
        </button>
        <button
          className="btn btn-secundary"
          onClick={() => {
            onPageSizeChange(20);
            onPageReset(1);
          }}
        >
          20
        </button>
        <button
          className="btn btn-secundary"
          onClick={() => {
            onPageSizeChange(30);
            onPageReset(1);
          }}
        >
          30
        </button>
      </div>
    </div>
  );
}

export default paginateChange;
