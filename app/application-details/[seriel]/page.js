import React from "react";
import { Download } from "lucide-react";
import Apostillel from "./_components/Apostillel";
import ImageComponent from "./_components/ImageComponent";
import { getSingleApplication } from "@/utils/fetcher";

const SinglePage = async ({ params }) => {
  const { seriel } = params;
  const applic = await getSingleApplication(seriel);
  console.log(applic);

  return (
    <section className="container mx-auto">
      <h1 className="text-xl ml-2 text-gray-950 font-semibold mt-16">
        অ্যাপোস্টিল
      </h1>
      <div className="flex flex-col md:items-start items-center justify-start md:mt-0 -mt-80 overflow-y-hidden ">
        <div className="scale-50 sm:scale-100 inline-block">
          <div className=" p-5 border-2 border-gray-300 rounded-lg shadow-md w-[900px] flex items-center justify-center flex-col bg-white">
            <Apostillel application={applic?.application} />

            <div className="mt-48 mr-5 mb-2 flex justify-end self-end">
              <button className="bg-gray-800 text-white hover:bg-gray-700 flex items-center gap-2 px-4 py-2 rounded-md transition-colors">
                <Download className="font-bold" size={16} />
                <span className="font-bengali font-bold">
                  অ্যাপোস্টিল ডাউনলোড
                </span>
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <p className="text-black font-bold md:text-xl text-lg">
        সনদপত্র/নম্বরপত্র/একাডেমিক ট্রান্সক্রিপ্ট/ডকুমেন্টস
      </p>
      <hr className="mt-5 border-black/30 border-1" />
      {console.log(applic?.application?.image)}

      {applic?.application?.image?.map((image, index) => (
        <ImageComponent
          key={index}
          date={applic?.application?.footerDate}
          imageUrl={image}
        />
      ))}
    </section>
  );
};

export default SinglePage;
