import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
import Image from "next/image";
import Link from "next/link";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 767, min: 320 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 10,
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
    <div className="layout py-[0.75rem] sm:px-[9.5rem] lg:px-[2rem] xl:px-0">
      <h1 className="flex items-center gap-[1.5rem] text-[1rem] lg:text-[2rem] font-semibold">
        Vizyondakiler{" "}
        <span className="text-[gray] lg:text-[1.5rem]">Gelecek Program</span>
      </h1>

      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        // additionalTransfrom={-20}
        // dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div
              className="flex flex-row gap-[0.5rem] md:gap-[1.5rem]"
              key={index}
            >
              <div className="w-[10rem] h-[14.25rem] md:w-[13.125rem] md:h-[18.75rem]">
                <Image
                  src={imageUrl.url}
                  alt="movie"
                  width={100}
                  height={100}
                  className="w-full h-full "
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col items-start gap-[1.5rem]">
                  <h3 className="text-[1.5rem] lg:text-[2rem] font-semibold">
                    {imageUrl.name}
                  </h3>
                  <button className="font-semibold underline text-[1rem]">
                    Fragmanı İzle
                  </button>
                </div>
                <Link href="/">
                  <p className="text-[0.69rem] text-red underline font-semibold">
                    Detaylı İncele
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
