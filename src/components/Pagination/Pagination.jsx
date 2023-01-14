import React from "react";

const Pagination = () => {
  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        <div className="bg-black hover:bg-red-700 text-white px-4 py-1 rounded-full">
          1
        </div>
        <div className="bg-[#D1D5DB] text-blue-600 px-4 py-1 rounded-full">
          2
        </div>
        <div className="bg-[#D1D5DB] text-blue-600 px-4 py-1 rounded-full">
          3
        </div>
        <div className="bg-[#D1D5DB] text-blue-600 px-4 py-1 rounded-full">
          4
        </div>
      </div>
    </section>
  );
};

export default Pagination;
