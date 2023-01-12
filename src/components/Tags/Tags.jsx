import React from "react";

const Tags = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        <div className="bg-black text-blue-600 px-4 py-1 rounded-full cursor-pointer">
          react
        </div>
        {/* <!-- selected --> */}
        <div className="bg-black text-white px-4 py-1 rounded-full cursor-pointer">
          redux
        </div>
      </div>
    </section>
  );
};

export default Tags;
