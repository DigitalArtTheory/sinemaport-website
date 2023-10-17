import Image from "next/image";
import React from "react";

const FavoriFilmler = () => {
  const movies = [
    {
      src: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
      title: "Yılmaz Gruda",
      tür: "Belgesel",
    },
    {
      src: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
      title: "Örümcek Adam",
      tür: "Bilim Kurgu",
    },
    {
      src: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
      title: "LIFE PI",
      tür: "Dram",
    },
    {
      src: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
      title: "Yanlış Anlama",
      tür: "Komedi",
    },
  ];

  return (
    <div>
      <h2>Favori Filmler</h2>
      <h2>Film Puanlarım</h2>
      <div>
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
};

export default FavoriFilmler;
