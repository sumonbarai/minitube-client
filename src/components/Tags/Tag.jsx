import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByTags } from "../../features/filter/filterSlice";

const Tag = ({ title }) => {
  const dispatch = useDispatch();

  const { tags } = useSelector((state) => state.filter);
  const active = tags.includes(title)
    ? "bg-black text-white"
    : "bg-gray-300 text-black";

  return (
    <div
      onClick={() => dispatch(filterByTags(title))}
      className={`${active}  px-4 py-1 rounded-full cursor-pointer `}
    >
      {title}
    </div>
  );
};

export default Tag;
