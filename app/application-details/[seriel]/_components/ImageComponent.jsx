import React from "react";

const ImageComponent = ({ date, imageUrl }) => {
  return (
    <div className="overflow-hidden border-2 shadow-md mt-6 rounded-md flex flex-col items-center justify-center min-w-[370px] p-4 ">
      <div className="bg-gray-400">
        <img className="w-full h-full" src={imageUrl} />
      </div>
      <div className="mt-6">
        <div className="flex text-[#581c87] flex-col items-center justify-center">
          <p className="font-belgique text-lg">Attested</p>
          <img src="/imgsigniture.png" />
          <p className="">{date}</p>
          <p className="mt-2">Tapash Kumar Bhowmik</p>
          <p>Assistant Secretary</p>
          <p>Law and Justice Division</p>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
