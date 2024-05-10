import React, { useState } from "react";
import { PageContext } from "@/app/layout";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function Pagination() {
  const { page, setPage } = React.useContext(PageContext);
  const [cur, setcur] = useState(1);
  const pages = [
    { pageNum: page },
    { pageNum: page + 1 },
    { pageNum: page + 2 },
    { pageNum: page + 3 },
  ];
  const handleNext = () => {
    page < 29 && setPage(page + 1);
  };
  const handlePrev = () => {
    page > 1 && setPage(page - 1);
  };
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-5 sm:px-6 mt-10">
      <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{page}</span> to{" "}
            <span className="font-medium">32</span> of{" "}
            <span className="font-medium">250</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={handlePrev}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <GoChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            {pages.map((pg, i) => (
              <button
                onClick={() => {
                  setcur(pg.pageNum);
                  setPage(cur);
                }}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-300 focus:z-20 focus:outline-offset-0 ${
                  page == pg.pageNum &&
                  "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-gray-900"
                }`}
                key={i}
              >
                {pg.pageNum}
              </button>
            ))}
            <button
              onClick={handleNext}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <GoChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
