import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";
import likeIcon from "../../assets/like.svg";
import unLikeIcon from "../../assets/unlike.svg";
import {
  deleteVideoThunk,
  likeDecreaseThunk,
  likeIncreaseThunk,
} from "../../features/video/videoSlice";

const VideoDescription = ({ video }) => {
  const { id, date, description, likes, title, unlikes } = video;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handleLike and unlike button
  const handleLikeBtn = () => {
    const updatedValue = likes + 1;
    dispatch(likeIncreaseThunk({ id, updatedValue }));
  };

  const handleUnLikeBtn = () => {
    const updatedValue = unlikes + 1;
    dispatch(likeDecreaseThunk({ id, updatedValue }));
  };
  // handle delete button
  const handleDeleteBtn = () => {
    dispatch(deleteVideoThunk(id));
    navigate("/", { replace: true });
  };
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {date}
        </h2>
        {/* <!-- like/unlike --> */}
        <div className="flex gap-10 w-48 mr-5">
          <div className="flex gap-1 cursor-pointer" onClick={handleLikeBtn}>
            <div className="shrink-0">
              <img className="w-5 block" src={likeIcon} alt="Like" />
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600">
              {likes}
            </div>
          </div>
          <div className="flex gap-1 cursor-pointer" onClick={handleUnLikeBtn}>
            <div className="shrink-0">
              <img className="w-5 block " src={unLikeIcon} alt="Unlike" />
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600">
              {unlikes}
            </div>
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
          <div className="flex gap-1" onClick={() => handleDeleteBtn()}>
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
        {description}
      </div>
    </div>
  );
};

export default VideoDescription;
