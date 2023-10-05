import React from "react";
import FilmCard from "../FilmCard/FilmCard";
import MainHeader from "@/app/elements/MainHeader/MainHeader";

const HasılatSeyirci = () => {
  return (
    <div className="layout">
      <MainHeader color="green" header="Hasılat & Seyirci" />
      <div className="flex mx-auto flex-wrap gap-[0.5rem]">
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
      </div>
    </div>
  );
};

export default HasılatSeyirci;
