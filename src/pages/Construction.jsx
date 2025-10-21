import React from "react";
import Wallpaper from "../components/wallpaper/Wallpaper.jsx";

const Construction = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-[-1]">
          <Wallpaper />
        </div>
        <div className="flex justify-center items-center min-h-screen w-full">
          <div className="flex flex-col text-center">
            <h1 className="text-white text-5xl font-bold mb-5">HUGONOTFOUND.</h1>
            <p className="text-white text-xl">Site en maintenance</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Construction;
