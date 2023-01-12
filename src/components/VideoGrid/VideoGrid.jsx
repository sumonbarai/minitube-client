import React from "react";
import Video from "./Video";

const VideoGrid = () => {
  return (
    <section className="pt-6 pb-20">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
        <Video />
      </div>
    </section>
  );
};

export default VideoGrid;
