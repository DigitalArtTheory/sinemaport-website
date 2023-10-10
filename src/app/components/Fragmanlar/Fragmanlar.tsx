import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Fragmanlar.css";
import YouTube from "react-youtube";
import MainHeader from "@/app/elements/MainHeader/MainHeader";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 675 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 675, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderVideoUrl = [
  //First image url
  {
    url: "https://www.youtube.com/embed/P99qJGrPNLs?si=A5GEPNGuJw21tsRu&amp;controls=0",
  },
  {
    url: "https://www.youtube.com/embed/P99qJGrPNLs?si=A5GEPNGuJw21tsRu&amp;controls=0",
  },
  //Second image url
  {
    url: "https://www.youtube.com/embed/P99qJGrPNLs?si=A5GEPNGuJw21tsRu&amp;controls=0",
  },
  //Third image url
  {
    url: "https://www.youtube.com/embed/P99qJGrPNLs?si=A5GEPNGuJw21tsRu&amp;controls=0",
  },

  //Fourth image url

  {
    url: "https://www.youtube.com/embed/P99qJGrPNLs?si=A5GEPNGuJw21tsRu&amp;controls=0",
  },
];
const Trailer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  console.log(isPopupOpen);

  return (
    <div className="px-[1.5rem] sm:px-[6rem] md:px-[9.5rem]">
      <div className="layout ">
        <MainHeader color="red" header="FRAGMANLAR" />
        <Carousel
          responsive={responsive}
          autoPlay={false}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={false}
          partialVisible={false}
        >
          {sliderVideoUrl.map((videoUrl, index) => {
            return (
              <div
                className="flex flex-row gap-[0.5rem] md:gap-[1.5rem]"
                key={index}
              >
                <div className="w-[10rem] h-[6.1875rem] md:w-[23rem] md:h-[14.5rem]">
                  <iframe
                    src={videoUrl.url}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full object-cover"
                    onClick={() => setIsPopupOpen(true)}
                  ></iframe>
                </div>
                {/* {isPopupOpen && (
                  <div className="fixed inset-0 items-center justify-center z-50 w-[800px] h-[600px]">
                    <div className="w-full">
                      <div className="w-full">
                        <span
                          className="close-button"
                          onClick={() => setIsPopupOpen(false)}
                        >
                          &times;
                        </span>
                        <iframe
                          // width="800"
                          // height="600"
                          src={videoUrl.url}
                          title="YouTube Video"
                          allowFullScreen
                          className="w-full h-full object-contain"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                )} */}
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
export default Trailer;
