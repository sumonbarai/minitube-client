import React from "react";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";
import likeIcon from "../../assets/like.svg";
import unLikeIcon from "../../assets/unlike.svg";

const VideoDescription = () => {
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        Some video title
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on 23 Nov 2022
        </h2>
        {/* <!-- like/unlike --> */}
        <div class="flex gap-10 w-48 mr-5">
          <div class="flex gap-1">
            <div class="shrink-0">
              <img class="w-5 block" src={likeIcon} alt="Like" />
            </div>
            <div class="text-sm leading-[1.7142857] text-slate-600">100K</div>
          </div>
          <div class="flex gap-1">
            <div class="shrink-0">
              <img class="w-5 block " src={unLikeIcon} alt="Unlike" />
            </div>
            <div class="text-sm leading-[1.7142857] text-slate-600">100K</div>
          </div>
        </div>
        {/* <!-- delete/edit --> */}
        <div className="flex gap-10 w-48">
          <div className="flex gap-1">
            <div className="shrink-0">
              <img className="w-5 block" src={editIcon} alt="Edit" />
            </div>
            <a
              href="add-video.html"
              className="text-sm leading-[1.7142857] text-slate-600"
            >
              Edit
            </a>
          </div>
          <div className="flex gap-1">
            <div className="shrink-0">
              <img className="w-5 block" src={deleteIcon} alt="Delete" />
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
              Delete
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        Some video description here
      </div>
    </div>
  );
};

export default VideoDescription;
