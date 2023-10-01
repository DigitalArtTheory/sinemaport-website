import Image from "next/image";
import React from "react";
import styles from "../Search/Search.module.css";

const Search = () => {
  return (
    <div
      className={`${styles.bg} layout rounded-3xl py-[0.5rem] px-[0.75rem] text-white mt-3`}
    >
      <div className="flex-1 flex flex-row items-center justify-start gap-[1rem] sm:gap-[2rem]">
        <div className="flex flex-row items-center justify-start gap-[0.5rem]">
          <div className="w-[1.5rem]">
            <Image
              src="/icons/search-normal.png"
              alt="search"
              width={100}
              height={100}
            />
          </div>
          <div className="text-[0.75rem] sm:text-[0.875rem]">Ara</div>
        </div>
        <div className="text-[0.6875rem] sm:text-[0.875rem]">
          Film, Haber, Yazar, Seans, Fragman
        </div>
      </div>
    </div>
  );
};
export default Search;
