import React from "react";
import { Download } from "lucide-react"
import Apostillel from "./_components/Apostillel";

const SinglePage = () => {
  return (
    <div className="flex flex-col md:items-start items-center justify-start md:mt-0 -mt-60 overflow-y-hidden ">
      <div className="scale-50 min-w-[30px] sm:scale-100 inline-block">
        <Apostillel />
      </div>
       <div className="mt-4 flex justify-center">
          <button className="bg-gray-800 text-white hover:bg-gray-700 flex items-center gap-2 px-4 py-2 rounded-md transition-colors">
            <Download size={16} />
            <span className="font-bengali">অ্যাপোস্টিল ডাউনলোড</span>
          </button>
        </div>
    </div>
  );
};

export default SinglePage;
