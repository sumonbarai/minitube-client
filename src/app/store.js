import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/videosSlice";
import videoReducer from "../features/video/videoSlice";
import tagsReducer from "../features/tags/tagsSlice";
import relatedReducer from "../features/relatedVideo/relatedVideoSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    video: videoReducer,
    tags: tagsReducer,
    relatedVideo: relatedReducer,
    filter: filterReducer,
  },
});
