import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-[500px] flex justify-center items-center">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
