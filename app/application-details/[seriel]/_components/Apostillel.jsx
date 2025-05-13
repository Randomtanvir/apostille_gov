import React from "react";

const Apostillel = () => {
  return (
    <section className="flex relative justify-center min-w-[1280px] items-center font-serif py-8">
      <div className="p-6 relative border rounded-lg shadow-lg bg-gray-50">
        <div className="apostille-document  bg-white w-full max-w-2xl p-6 border-[3px] border-gray-500">
          <div className="apostille-header text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900">E-APOSTILLE</h3>
            <p className="text-sm font-bold text-gray-900 font-sans my-3">
              (Convention de La Haye du 5 octobre 1961)
            </p>
            <p className="text-xs font-bold mt-2 text-gray-900">
              (Also valid for the countries that are not in reciprocal
              arrangement with Bangladesh under the <br /> Apostille Convention
              of 1961, subject to proper legalisation)
            </p>
          </div>

          <div className="issuing-authority mt-24 mb-6">
            <h4 className="text-xl text-center font-semibold text-black mb-3">
              Issuing Authority
            </h4>
            <ul className=" text-sm text-gray-600 space-y-2">
              <li>
                <span className="font-sans font-bold">1.</span>
                <span className="ml-1">Country: </span>
                <span className="font-bold ml-1  text-black">BANGLADESH</span>
              </li>

              <li className="list-none">The public document</li>
              <li>
                <span className="font-sans font-bold">2.</span>
                <span className="ml-1 font-bold text-black">
                  has been signed by:
                </span>
                <span className="font-bold ml-1 text-gray-800 text-sm">
                  Muslim Marriage Register
                </span>
              </li>
              <li>
                <span className="font-sans font-bold">3.</span>
                <span className="ml-1 font-bold text-black">
                  acting in the capacity of:
                </span>
                <span className="font-bold ml-1 text-gray-600 text-sm">
                  Muslim Marriage Register
                </span>
              </li>
              <li>
                <span className="font-sans font-bold">4.</span>
                <span className="ml-1 font-bold text-black">
                  bears the seal/stamp of:
                </span>
                <span className="font-bold ml-1 text-gray-600 text-sm">
                  Jatrabari, Dhaka
                </span>
              </li>
            </ul>
          </div>

          <div className="certification mb-6">
            <div className="certified-stamp text-center mb-3">
              <h1 className="text-lg text-gray-900 font-semibold">Certified</h1>
            </div>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <span className="font-sans font-bold">5.</span>
                <span className="ml-1">at </span>
                <span className="font-bold ml-1 underline text-black">
                  Dhaka, Bangladesh
                </span>
              </li>
              <li>
                <span className="font-sans font-bold">6.</span>
                <span className="ml-1">the </span>
                <span className="font-bold ml-1 underline text-black">
                  04-May-2025
                </span>
              </li>
              <li>
                <span className="font-sans font-bold">7.</span>
                <span className="ml-1">by </span>
                <span className="font-bold ml-1 underline text-black">
                  Md. Shoaib-Ul-Islam Tarafder, Senior Assistant Secretary,
                  Ministry of Foreign Affairs
                </span>
              </li>
              <li>
                <span className="font-sans font-bold mb-5">8.</span>
                <span className="ml-1">No </span>
                <span className="font-bold ml-1 font-sans text-black">
                  3684205971
                </span>
              </li>
              <li className="font-bold">
                <span className="font-sans font-bold mb-5">9.</span>

                <span className="font-bold ml-1 font-sans text-black">
                  Seal/stamp
                </span>
                <span className="font-sans font-bold ml-2 mb-5">10.</span>
                <span className="font-bold ml-1 font-sans text-black">
                  Signature
                </span>
              </li>
            </ul>
          </div>

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20">
            <img src="/gov_logo.png" alt="Stamp" className="w-60 h-auto" />
          </div>

          <div className="mt-8 flex gap-3">
            <img
              src="/Main_sill.png"
              alt="Digital Signature Info"
              className="w-28 h-auto"
            />
            <img
              src="/1.png"
              alt="Digital Signature Info"
              className="w-40 h-auto -mt-8 -ml-5"
            />
          </div>

          <div className="mt-20 ml-20 font-bold text-xs text-gray-500">
            <p>Digitally signed by Md.</p>
            <p>Shaath-Ul-Islam Tarafder</p>
            <p>
              Date: <span className="font-sans">2025.05.01</span>
            </p>
            <p className="font-sans">19:04:41 +06:00</p>
            <p>Reason: Document</p>
            <p>Signing</p>
            <p>Location: Dhaka, BD</p>
          </div>

          <div className="qr-code flex justify-end items-end text-right -mt-10 ">
            <img src="/qrcode.png" alt="QR Code" className="w-36 h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apostillel;
