import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PaginationFilter } from "../../features/filter/filterSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  // calculation of total data in api call

  const { page, limit } = useSelector((state) => state.filter);
  const { totalNumberOfVideos } = useSelector((state) => state.videos);
  const numberOfPage = Math.ceil(totalNumberOfVideos / limit);

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {[...Array(numberOfPage).keys()].map((num) => (
          <div
            key={num}
            onClick={() => dispatch(PaginationFilter(num + 1))}
            className={` ${
              page === num + 1
                ? "bg-black hover:bg-red-700 text-white"
                : "bg-[#D1D5DB] text-blue-600"
            } px-4 py-1 rounded-full cursor-pointer`}
          >
            {num + 1}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pagination;
