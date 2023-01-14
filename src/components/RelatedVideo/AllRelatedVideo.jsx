import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedVideoThunk } from "../../features/relatedVideo/relatedVideoSlice";

import RelatedVideo from "./RelatedVideo";

const AllRelatedVideo = ({ id, tags }) => {
  const dispatch = useDispatch();
  const { isLoading, error, relatedVideo } = useSelector(
    (state) => state.relatedVideo
  );

  // what to render
  let content;
  if (isLoading) {
    content = <p className="text-center pt-3">Loading</p>;
  }
  if (!isLoading && error) {
    content = <p className="text-center pt-3">{error}</p>;
  }
  if (!isLoading && !error && relatedVideo.length > 0) {
    content = relatedVideo.map((video) => (
      <RelatedVideo key={video.id} video={video} />
    ));
  }

  useEffect(() => {
    dispatch(getRelatedVideoThunk(id, tags));
  }, [dispatch, id, tags]);
  return <div>{content}</div>;
};

export default AllRelatedVideo;
