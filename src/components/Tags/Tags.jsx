import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter } from "../../features/filter/filterSlice";
import { getTagsThunk } from "../../features/tags/tagsSlice";
import Tag from "./Tag";

const Tags = () => {
  const dispatch = useDispatch();
  const { isLoading, error, tags } = useSelector((state) => state.tags);
  useEffect(() => {
    dispatch(getTagsThunk());
  }, [dispatch]);

  // what is render UI
  let content;
  if (!isLoading && !error && tags.length > 0) {
    content = (
      <section className="max-w-7xl mx-auto flex justify-between items-center border-b">
        <div className=" px-5 py-6 lg:px-0 flex gap-2  overflow-y-auto">
          {tags.map((tag) => (
            <Tag key={tag.id} title={tag.title} />
          ))}
        </div>
        <button
          onClick={() => dispatch(clearFilter())}
          className="px-4 py-1 mx-2 rounded-full cursor-pointer bg-red-500 text-white capitalize"
        >
          clear
        </button>
      </section>
    );
  }
  return tags.length ? content : null;
};

export default Tags;
