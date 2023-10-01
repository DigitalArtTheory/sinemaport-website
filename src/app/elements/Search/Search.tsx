import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <div className="layout  rounded-3xl [background:linear-gradient(-90deg,_rgba(216,_33,_33,_0),_#d82121)] py-[0.5rem] px-[1.5rem] text-[0.88rem] text-white mt-4">
      <div className="flex-1 flex flex-row items-center justify-start gap-[2rem]">
        <div className="flex flex-row items-center justify-start gap-[0.5rem]">
          <img src="/icons/search-normal.png" />
          <div>Ara</div>
        </div>
        <div>Film, Haber, Yazar, Seans, Fragman</div>
      </div>
    </div>
  );
};
export default Search;
