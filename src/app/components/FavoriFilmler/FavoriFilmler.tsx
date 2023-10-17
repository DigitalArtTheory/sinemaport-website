import Image from "next/image";
import Link from "next/link";
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
      <div className="flex flex-col gap-6 md:flex-row md:gap-10">
        <div className="flex">
          <h2 className="text-[1.5rem] text-red font-semibold md:text-[2rem]">
            Favori Filmler
          </h2>
          <span>Icon</span>
        </div>
        <div className="flex">
          <h2 className="text-[1.5rem] font-semibold md:text-[2rem]">
            Film Puanlarım
          </h2>
          <span>Icon</span>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 mt-[1.88rem] md:mt-[2.8rem]">
        {movies.map((movie, idx) => (
          <div className="flex flex-col gap-2" key={idx}>
            <div className="">
              <Image
                src={movie.src}
                alt={movie.title}
                width={100}
                height={100}
                layout="responsive"
                className="w-full h-full"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <h3 className="text-[0.875rem] md:text-[1rem] font-semibold">
                  {movie.title}
                </h3>
                <div>Icon</div>
              </div>
              <p className="text-[0.875rem] font-light md:text-[1rem] mt-1">
                {movie.tür}
              </p>
              <div className="flex mt-2">
                <p className="text-[0.75rem] md:text-[0.8125rem]">Paylaş</p>
                <div>Icon</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriFilmler;
