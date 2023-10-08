"use client";
import React from "react";
import Header from "../Header/Header";
import Search from "../../elements/Search/Search";
import Image from "next/image";
import bgImage from "../../../../public/imgs/footerBg.png";
import BiziTakipEdin from "@/app/elements/BiziTakipEdin/BiziTakipEdin";
import { usePathname } from "next/navigation";
import styles from "./HeaderSection.module.css";

const HeaderSection = () => {
  const pathname = usePathname();
  return (
    <div
      className={`${styles.bg} relative min-h-[27rem] px-[1.5rem] sm:px-[6rem] md:px-[9.5rem]`}
    >
      <Image
        src={bgImage}
        className="absolute inset-0 -z-10 object-cover"
        alt="bgImage"
        fill
      />
      <div className="flex flex-col">
        {pathname !== "/" ? (
          <BiziTakipEdin bColor="red" position="flex-end" isOnTop={true} />
        ) : (
          <div className="w-full h-[2.19rem]"></div>
        )}
        <Header />
      </div>
      <Search />
    </div>
  );
  return null;
};

export default HeaderSection;
