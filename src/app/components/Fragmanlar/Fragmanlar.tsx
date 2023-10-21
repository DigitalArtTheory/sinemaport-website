import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Fragmanlar.css";
import YouTube from "react-youtube";
import MainHeader from "@/app/elements/MainHeader/MainHeader";
import CaroVideos from "@/app/elements/CaroVideos/CaroVideos";

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
// const sliderVideoUrl = [
//   //First image url
//   {
//     url: "https://www.youtube.com/embed/P99qJGrPNLs?si=A5GEPNGuJw21tsRu&amp;controls=0",
//   },
//   {
//     url: "https://www.youtube.com/embed/P99qJGrPNLs?si=A5GEPNGuJw21tsRu&amp;controls=0",
//   },
//   //Second image url
//   {
//     url: "https://www.youtube.com/embed/P99qJGrPNLs?si=A5GEPNGuJw21tsRu&amp;controls=0",
//   },
//   //Third image url
//   {
//     url: "https://www.youtube.com/embed/P99qJGrPNLs?si=A5GEPNGuJw21tsRu&amp;controls=0",
//   },

//   //Fourth image url

//   {
//     url: "https://www.youtube.com/embed/P99qJGrPNLs?si=A5GEPNGuJw21tsRu&amp;controls=0",
//   },
// ];
const Trailer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  console.log(isPopupOpen);

  const videos = [
    {
      name: "Spiderman",
      url: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
    },
    {
      name: "Aquaman",
      url: "https://www.youtube.com/watch?v=FV3bqvOHRQo",
    },
    {
      name: "Wonka",
      url: "https://www.youtube.com/watch?v=otNh9bTjXWg",
    },
    {
      name: "Kraven",
      url: "https://www.youtube.com/watch?v=rze8QYwWGMs",
    },
    {
      name: "Oppenheimer",
      url: "https://www.youtube.com/watch?v=uYPbbksJxIg",
    },
    {
      name: "Gladiator 2",
      url: "https://www.youtube.com/watch?v=e0CJbdZtzI0",
    },
  ];

  function extractVideoID(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([\w\-]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  return (
    <div className="px-[1.5rem] sm:px-[6rem] md:px-[9.5rem] mt-3 md:mt-[3.25rem]">
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
          {videos.map((video, index) => {
            const videoId = extractVideoID(video.url);
            return (
              <div className="flex flex-col gap-3 mr-2 sm:mr-4">
                <CaroVideos videoId={videoId} />
                <h4 className="text-red text-[0.75rem] font-semibold sm:text-[1rem]">
                  {video.name}
                </h4>
              </div>
            );
          })}
          {/* {sliderVideoUrl.map((videoUrl, index) => {
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
              </div>
            );
          })} */}
        </Carousel>
      </div>
    </div>
  );
};
export default Trailer;
