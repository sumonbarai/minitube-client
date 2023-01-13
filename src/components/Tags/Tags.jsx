import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      <section>
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
          {tags.map((tag) => (
            <Tag key={tag.id} title={tag.title} />
          ))}
        </div>
      </section>
    );
  }
  return tags.length ? content : null;
};

export default Tags;
