import React from "react";

const Tag = ({ title }) => {
  return (
    <div className="bg-gray-300 text-black px-4 py-1 rounded-full cursor-pointer">
      {title}
    </div>
  );
};

export default Tag;

{
  /* <div className="bg-black text-white px-4 py-1 rounded-full cursor-pointer">
  redux
</div>; */
}
