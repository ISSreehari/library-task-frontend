import React from "react";

const Pagination = ({
  totalPost,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }




  
  return (
    <div className="flex flex-row gap-2 mt-4">
      {pages.map((page,i) => {
        return (
          <button
            key={i}
            onClick={() => setCurrentPage(page)}
            className={
              page == currentPage
                ? "bg-violet-500 px-4 py-2 rounded-md"
                : "bg-purple-300"
            }
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
