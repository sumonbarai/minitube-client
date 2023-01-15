import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AllRelatedVideo from "../components/RelatedVideo/AllRelatedVideo";
import RelatedVideo from "../components/RelatedVideo/RelatedVideo";
import VideoDescription from "../components/VideoDescription/VideoDescription";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import { getVideoThunk } from "../features/video/videoSlice";

const Video = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, video } = useSelector((state) => state.video);

  // get single video fetch
  useEffect(() => {
    dispatch(getVideoThunk(id));
  }, [dispatch, id]);

  return isLoading ? (
    <p className="pt-6 pb-20 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px] text-center">
      Loading...
    </p>
  ) : (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            <VideoPlayer link={video?.link} title={video?.title} />
            <VideoDescription video={video} />
          </div>
          <AllRelatedVideo id={video?.id} tags={video?.tags} />
        </div>
      </div>
    </section>
  );
};

export default Video;
