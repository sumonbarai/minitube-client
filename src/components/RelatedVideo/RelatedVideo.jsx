import React from "react";
import { Link } from "react-router-dom";

const RelatedVideo = ({ video }) => {
  const { author, date, duration, id, thumbnail, title, views } = video;
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto hover:translate-x-2 duration-700">
      {/* <!-- single related video --> */}
      <Link to={`/video/${id}`}>
        <div className="w-full flex flex-row gap-2 mb-4">
          <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
            <span>
              <img src={thumbnail} className="object-cover" alt="video title" />
            </span>
            <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
              {duration}
            </p>
          </div>

          <div className="flex flex-col w-full">
            <span>
              <p className="text-slate-900 text-sm font-semibold">{title}</p>
            </span>
            <span
              className="text-gray-400 text-xs mt-2 hover:text-gray-600"
              href="#"
            >
              {author}
            </span>
            <p className="text-gray-400 text-xs mt-1">
              {views} views . {date}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RelatedVideo;
