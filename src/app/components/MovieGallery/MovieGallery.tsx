import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MovieGallery({ sectionHeader }) {
  const movies = [
    //First image url
    {
      src: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
      title: "Yanlış Anlama",
    },
    {
      src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
      title: "Yanlış Anlama",
    },
    //Second image url
    {
      src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
      title: "Yanlış Anlama",
    },
    //Third image url
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
      title: "Yanlış Anlama",
    },

    //Fourth image url

    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
      title: "Yanlış Anlama",
    },
    {
      src: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
      title: "Yanlış Anlama",
    },
    {
      src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
      title: "Yanlış Anlama",
    },
    //Second image url
    {
      src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
      title: "Yanlış Anlama",
    },
    //Third image url
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
      title: "Yanlış Anlama",
    },

    //Fourth image url

    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
      title: "Yanlış Anlama",
    },
  ];

  return (
    <div className="py-3 md:py-[0.95rem] px-[1.5rem] sm:px-[6rem] md:px-[9.5rem]">
      <div className="layout">
        <h1 className="flex text-[1rem] lg:text-[2rem] font-semibold">
          {sectionHeader}
        </h1>

        {/* Mobile View */}
        <div className="lg:hidden grid grid-cols-2 gap-4 mt-6">
          {movies.map((movie, idx) => (
            <div className="" key={idx}>
              <h3 className="text-[1.5rem] lg:text-[2rem] font-semibold">
                {movie.title}
              </h3>
              <div className=" mt-2">
                <Image
                  src={movie.src}
                  alt={movie.title}
                  width={100}
                  height={100}
                  layout="responsive"
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col items-start gap-1 mt-2">
                <button className="font-semibold underline text-[1rem]">
                  Fragmanı İzle
                </button>
                <Link href="/">
                  <p className="text-[0.69rem] text-red underline font-semibold">
                    Detaylı İncele
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="md:hidden flex overflow-x-scroll space-x-4 p-5">
        {movies.map((movie, idx) => (
          <div key={idx} className="flex-shrink-0 w-48">
            <Image src={movie.src} alt={movie.title} width={200} height={300} />
            <h2 className="text-xl mt-2">{movie.title}</h2>
            <button className="mt-2 bg-blue-600 px-4 py-2 rounded">
              Detaylı İncele
            </button>
          </div>
        ))}
      </div> */}

        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-x-4 gap-y-6 mt-6">
          {movies.map((movie, idx) => (
            <div className="flex flex-col gap-[0.5rem]" key={idx}>
              <div className="max-w-[13.125rem]">
                <Image
                  src={movie.src}
                  alt={movie.title}
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="text-[1.5rem] lg:text-[2rem] font-semibold">
                  {movie.title}
                </h3>
                <Link href="/">
                  <p className="text-[0.69rem] text-red underline font-semibold mt-1">
                    Detaylı İncele
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
