import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold"> {title} </h1>
      <p className="py-6 text-lg w-2/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black py-2 px-6 text-xl rounded-lg hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className="bg-gray-500 text-white mx-2 p-2 px-6 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
