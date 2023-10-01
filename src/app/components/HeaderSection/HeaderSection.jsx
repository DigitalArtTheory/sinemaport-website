import React from "react";
import Header from "../Header/Header";
import Search from "../../elements/Search/Search";
import Image from "next/image";
import bgImage from "../../../../public/imgs/footerBg.png";
import BiziTakipEdin from "@/app/elements/BiziTakipEdin/BiziTakipEdin";

const HeaderSection = () => {
  return (
    <div className="relative min-h-[27rem]">
      <Image
        src={bgImage}
        className="absolute inset-0 -z-10 object-cover"
        alt="bgImage"
        fill
      />
      <div className="flex flex-col">
        <BiziTakipEdin bColor="red" position="flex-end" />
        <Header />
      </div>
      <Search />
    </div>
  );
};

export default HeaderSection;
