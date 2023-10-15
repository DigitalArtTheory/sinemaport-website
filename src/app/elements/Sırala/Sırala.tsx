"use client";
import Image from "next/image";
import { useState } from "react";

const Sırala = () => {
  const [showGenres, setShowGenres] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");
  const [activeGenre, setActiveGenre] = useState("");

  const filters = ["Tarihe Göre Azalan", "Alfabetik", "Kategoriye Göre"];
  const genres = [
    "Bilimkurgu",
    "Dram",
    "Fantastik",
    "Romantik",
    "Korku",
    "Gerilim",
    "Aksiyon",
    "Savaş",
  ];

  return (
    <div className="">
      <div className="flex flex-col gap-3 md:gap-8 mt-3 md:mt-8 text-[0.625rem] md:text-[0.875rem]">
        <div className="flex gap-4 ">
          <p className="text-[#D82121]">
            Sırala <span className="ml-2">&#10607;</span>
          </p>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`${activeFilter !== filter && "text-[#606367]"}`}
              onClick={() => {
                setActiveFilter(filter);
                if (filter === "Kategoriye Göre") setShowGenres(true);
                else {
                  setShowGenres(false);
                }
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {showGenres && (
          <div className="flex flex-wrap gap-[0.44rem]">
            {genres.map((genre) => (
              <button
                key={genre}
                className={`text-[#606367] ${
                  activeGenre === genre ? "text-[#e9e9e9]" : "text-[#606367]"
                }`}
                onClick={() => setActiveGenre(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sırala;
