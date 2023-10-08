import React from "react";
import FilmCard from "../FilmCard/FilmCard";
import MainHeader from "@/app/elements/MainHeader/MainHeader";

const HasılatSeyirci = () => {
  return (
    <div className="pt-[3.25rem] pb-[0.75rem] sm:py-[2rem] px-[1.5rem] sm:px-[6rem] md:px-[9.5rem]">
      <div className="layout ">
        <MainHeader color="green" header="Hasılat & Seyirci" />
        {/* <div className="flex mx-auto flex-wrap gap-[0.5rem]"> */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[0.5rem] md:gap-4 mt-[0.75rem] sm:mt-[1.5rem]">
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
        </div>
      </div>
    </div>
  );
};

export default HasılatSeyirci;
