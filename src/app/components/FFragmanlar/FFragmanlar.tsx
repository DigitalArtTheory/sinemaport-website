import MainHeader from "@/app/elements/MainHeader/MainHeader";
import Search from "@/app/elements/Search/Search";
import Sırala from "@/app/elements/Sırala/Sırala";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const sliderVideoUrl = [
  //First image url
  {
    title: "DEADPOOL",
    url: "https://www.youtube.com/embed/P99qJGrPNLs?si=A5GEPNGuJw21tsRu&amp;controls=0",
  },
  {
    title: "DEADPOOL",
    url: "https://www.youtube.com/embed/P99qJGrPNLs?si=A5GEPNGuJw21tsRu&amp;controls=0",
  },
  {
    title: "DEADPOOL",
    url: "https://www.youtube.com/embed/P99qJGrPNLs?si=A5GEPNGuJw21tsRu&amp;controls=0",
  },
  {
    title: "DEADPOOL",
    url: "https://www.youtube.com/embed/P99qJGrPNLs?si=A5GEPNGuJw21tsRu&amp;controls=0",
  },
  {
    title: "DEADPOOL",
    url: "https://www.youtube.com/embed/P99qJGrPNLs?si=A5GEPNGuJw21tsRu&amp;controls=0",
  },
  {
    title: "DEADPOOL",
    url: "https://www.youtube.com/embed/P99qJGrPNLs?si=A5GEPNGuJw21tsRu&amp;controls=0",
  },
  {
    title: "DEADPOOL",
    url: "https://www.youtube.com/embed/P99qJGrPNLs?si=A5GEPNGuJw21tsRu&amp;controls=0",
  },
  {
    title: "DEADPOOL",
    url: "https://www.youtube.com/embed/P99qJGrPNLs?si=A5GEPNGuJw21tsRu&amp;controls=0",
  },
];

const FFragmanlar = () => {
  return (
    <div className="py-3 md:py-[0.95rem] px-[1.5rem] sm:px-[6rem] md:px-[9.5rem]">
      <div className="layout">
        <MainHeader color="red" header="FRAGMANLAR" />
        <Search />
        <Sırala />
        {/* Mobile View */}
        <div className="md:hidden flex overflow-x-scroll gap-2 mt-3">
          {sliderVideoUrl.map((video, idx) => (
            <div key={idx} className="flex-shrink-0 w-48">
              <div className="w-[10rem] h-[6.1875rem] md:w-[23rem] md:h-[14.5rem]">
                <iframe
                  src={video.url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full object-cover"
                  //   onClick={() => setIsPopupOpen(true)}
                ></iframe>
              </div>
              <h3 className="text-[0.75rem] text-[#D82121] font-semibold mt-2">
                {video.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-4 gap-y-8 mt-8 gap-4">
          {sliderVideoUrl.map((video, idx) => (
            <div className="flex flex-col gap-[0.5rem]" key={idx}>
              <div className=" ">
                <iframe
                  src={video.url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full object-cover"
                  //   onClick={() => setIsPopupOpen(true)}
                ></iframe>
              </div>
              <h3 className="text-[1rem] text-[#D82121] font-semibold">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FFragmanlar;
