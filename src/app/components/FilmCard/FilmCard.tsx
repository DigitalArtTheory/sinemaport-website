import Image from "next/image";
import React from "react";
import styles from "../FilmCard/FilmCard.module.css";

const FilmCard = ({ source, nameNum }) => {
  return (
    <div className="flex gap-[0.5rem] mx-auto max-w-[10rem] sm:max-w-[21.375rem] sm:w-full">
      <div className="flex flex-col gap-[0.5rem]">
        <div className="w-[4.75rem]">
          <Image
            src={source}
            width={100}
            height={100}
            className="rounded-lg w-full h-full"
            alt="filmName"
          />
        </div>
        <div className="flex flex-col gap[0.25rem] items-center">
          <p className="text[0.75rem]">IMDB</p>
          <p className="text[0.75rem] font-bold">7.8</p>
        </div>
      </div>
      <div className="flex flex-col gap-[0.5rem]">
        <p className="text-[0.625rem] sm:text-[1rem] font-semibold">
          {nameNum}
        </p>
        <p className="text-[0.625rem] sm:text-[0.75rem] font-bold">Hasılat</p>
        <div className={`${styles.colGap} flex flex-wrap gap-[0.75rem]`}>
          <div>
            <p className="text-[0.5625rem] sm:text-[0.75rem] font-semibold">
              Hafta sonu
            </p>
            <p className="text-[0.75rem] sm:text-[0.875rem] font-medium">
              10.310.618
            </p>
          </div>
          <div>
            <p className="text-[0.562rem] sm:text-[0.75rem] font-semibold">
              Toplam
            </p>
            <p className="text-[#30D849] text-[0.75rem] sm:text-[0.875rem] font-medium">
              149.369.841
            </p>
          </div>
        </div>
        <p className="text-[0.625rem] sm:text-[0.75rem] font-bold">Seyirci</p>
        <div className={`${styles.colGap} flex flex-wrap gap-[0.75rem]`}>
          <div>
            <p className="text-[0.562rem] sm:text-[0.75rem] font-semibold">
              Hafta sonu
            </p>
            <p className="text-[0.75rem] sm:text-[0.875rem] font-medium">
              83.884
            </p>
          </div>
          <div>
            <p className="text-[0.562rem] sm:text-[0.75rem] font-semibold">
              Toplam
            </p>
            <p className="text-[#30D849] text-[0.75rem] sm:text-[0.875rem] font-medium">
              1.369.841
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
