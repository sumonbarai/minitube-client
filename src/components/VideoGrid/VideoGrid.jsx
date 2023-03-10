import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideosThunk } from "../../features/videos/videosSlice";
import Loader from "../../shared/Loader";
import Video from "./Video";

const VideoGrid = () => {
  const dispatch = useDispatch();
  const { isLoading, error, videos } = useSelector((state) => state.videos);
  const { author, tags, search, page, limit } = useSelector(
    (state) => state.filter
  );

  useEffect(() => {
    dispatch(getVideosThunk({ author, tags, search, page, limit }));
  }, [dispatch, author, tags, search, page, limit]);

  // what to render
  let content;
  if (isLoading) {
    content = <Loader />;
  }
  if (!isLoading && error) {
    content = (
      <p className="pt-6 pb-20 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px] text-center">
        There are some error in server side
      </p>
    );
  }
  if (!isLoading && !error && videos.length === 0) {
    content = (
      <p className="pt-6 pb-20 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px] text-center">
        No Video found
      </p>
    );
  }
  if (!isLoading && !error && videos.length > 0) {
    content = (
      <section className="pt-6 pb-20">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {videos.map((video) => (
            <Video key={video.id} video={video} />
          ))}
        </div>
      </section>
    );
  }

  return <>{content}</>;
};

export default VideoGrid;
