"use client"
import React, { useRef } from "react";
import { Download } from "lucide-react";
import Apostillel from "./Apostillel";
import ImageComponent from "./ImageComponent";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";


const SinglePageContent = ({ applic }) => {
    const apostilleRef = useRef();
    const hiddenPdfRef = useRef();
  
    const handleDownloadPdf = async () => {
      const element = apostilleRef.current;
      
      const options = {
        scale: 3, // Higher scale for better quality
        useCORS: true,
        logging: false,
        windowWidth: 1920, // Fixed viewport width
        windowHeight: element.scrollHeight,
        dpi: 300, // Higher DPI for better quality
        onclone: (clonedDoc) => {
          // Ensure proper styling in cloned element
          const clonedElement = clonedDoc.querySelector('[ref="apostilleRef"]');
          if (clonedElement) {
            clonedElement.style.width = '900px';
            clonedElement.style.margin = '0';
            clonedElement.style.padding = '20px';
          }
        }
      };

      const canvas = await html2canvas(element, options);
      const imgData = canvas.toDataURL("image/png", 1.0);
      
      // Use A4 format with proper orientation
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Calculate scaling to fit the page while maintaining aspect ratio
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      
      const finalWidth = imgWidth * ratio;
      const finalHeight = imgHeight * ratio;
      
      // Center the image on the page
      const x = (pdfWidth - finalWidth) / 2;
      const y = (pdfHeight - finalHeight) / 2;

      pdf.addImage(imgData, "PNG", x, y, finalWidth, finalHeight, undefined, 'FAST');
      pdf.save("apostille-document.pdf");
    };
  
    return (
      <section className="container mx-auto">
        <h1 className="text-xl ml-2 text-gray-950 font-semibold mt-16">অ্যাপোস্টিল</h1>
  
        <div className="flex flex-col md:items-start items-center justify-start md:mt-0 -mt-80 overflow-y-hidden">
          <div className="scale-50 sm:scale-100 inline-block">
            <div className="p-5 border-2 border-gray-300 rounded-lg shadow-md w-[900px] flex items-center justify-center flex-col bg-white">
              
              {/* 📌 Wrap Apostille component */}
              <div ref={apostilleRef}>
                <Apostillel application={applic?.application} />
              </div>

              {/* 📌 Hidden PDF for download */}
              <div className="hidden">
                <div ref={hiddenPdfRef} className="w-[900px] bg-white p-5">
                  <Apostillel application={applic?.application} />
                </div>
              </div>

  
              {/* 📌 Download Button */}
              <div className="mt-48 mr-5 mb-2 flex justify-end self-end">
                <button
                  onClick={handleDownloadPdf}
                  className="bg-gray-800 text-white hover:bg-gray-700 flex items-center gap-2 px-4 py-2 rounded-md transition-colors"
                >
                  <Download className="font-bold" size={16} />
                  <span className="font-bengali font-bold">অ্যাপোস্টিল ডাউনলোড</span>
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
  
  export default SinglePageContent;