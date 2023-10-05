import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
import Image from "next/image";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1200, min: 800 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 800, min: 320 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const sliderImageUrl = [
  //First image url
  {
    url: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
    name: "Yanlış Anlama",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
    name: "Geri Sayım",
  },
  //Second image url
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
    name: "Bir Uzun Koşu",
  },
  //Third image url
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
    name: "Anita",
  },

  //Fourth image url

  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
    name: "Mr Clean",
  },
];

const Slider = () => {
  return (
    <div className="layout">
      <h1 className="flex gap-[1.5rem] text-[1rem] font-semibold">
        Vizyondakiler <span className="text-[gray]">Gelecek Program</span>
      </h1>

      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        // dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <div className="flex flex-row items-center justify-center gap-[1.5rem]">
                <div className="relative w-[11rem]">
                  <Image
                    src={imageUrl.url}
                    alt="movie"
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-between">
                  <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                    <div className="text-[1.5rem] font-semibold">
                      <p>{imageUrl.name}</p>
                    </div>
                    <div className="flex font-semibold underline text-[0.9rem]">
                      <div className="relative">Fragmanı İzle</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start text-[0.69rem] text-mcolor-red">
                    <div className="flex flex-row items-start justify-start">
                      <div className="text-red underline font-semibold">
                        Detaylı İncele
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
