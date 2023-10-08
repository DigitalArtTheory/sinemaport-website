import Image from "next/image";
import React from "react";
import NewsCard from "../News/NewsCard";
import MainHeader from "@/app/elements/MainHeader/MainHeader";

const Haberler = () => {
  return (
    <div className="px-[1.5rem] sm:px-[6rem] md:px-[9.5rem]">
      <div className="layout mx-auto pt-[0.75rem] pb-[0.56rem] sm:py-[2rem] ">
        <MainHeader color="green" header="Haberler" />
        <div className="flex flex-col gap-[0.75rem] lg:gap-4 lg:flex-row mt-[0.75rem] lg:mt-[2rem]">
          <div className="w-[20.375rem] lg:w-[23rem] lg:flex-1">
            <Image
              src="/imgs/haberImg.png"
              alt="haberimg"
              height={100}
              width={400}
              className="w-full h-full lg:object-cover"
            />
          </div>
          <div className="mt-[0.75rem] lg:mt-0 lg:flex-1 lg:flex lg:flex-col lg:justify-between">
            <div className="flex flex-col gap-[1rem]">
              <h2>
                1 Eylül'de sinemalarda gösterime girecek Ölümüne Aşk filminden
                fragman yayınlandı
              </h2>
              <p>
                Okan Ege Ergüven'in yönetmen koltuğunda oturduğu Ölümüne Aşk'tan
                fragman yayınlandı. Film, 1 Eylül'de sinemalarda gösterime
                girecek.
              </p>
            </div>
            <div className="flex flex-col mt-[0.37rem] gap-[0.25rem]">
              <p>7 Ağustos 2023 19:23</p>
              <p>Haberi Paylaş</p>
            </div>
          </div>
          <div className="flex flex-col gap-[0.75rem] lg:flex-1">
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Haberler;
