import Image from "next/image";
import React from "react";
import styles from "../Rekorlar/Rekorlar.module.css";
import recordimg from "../../../../public/imgs/footerBg.png";
import MainHeader from "@/app/elements/MainHeader/MainHeader";

const Rekorlar = () => {
  return (
    <div
      className={`${styles.bgColor} relative pt-[1.5rem] pb-[2rem] sm:py-[2rem] px-[1.5rem] sm:px-[6rem] md:px-[9.5rem]`}
    >
      <Image
        src={recordimg}
        className="absolute -z-10 inset-0 w-full h-full object-cover"
        alt="bg"
        fill
      />
      <div className="layout flex flex-col gap-[2rem]">
        <MainHeader color="red" header="Seyirci Rekorları" />
        <div className="flex flex-col gap-[0.75rem] sm:gap-[3rem] lg:flex-row">
          <div className="flex flex-col gap-[1rem]">
            <h2 className="text-white text-[0.875rem] sm:text-[1.125rem] font-semibold">
              Yerli
            </h2>
            <div className="flex flex-row gap-[0.5rem] sm:gap-[1rem] w-full">
              <ol className="list-decimal flex flex-col flex-1 sm:flex-auto gap-[0.75rem] text-[white] text-[0.75rem] sm:text-[1.125rem]">
                <li>Recep İvedik 5</li>
                <li>Recep İvedik 4</li>
                <li>Düğün Dernek</li>
                <li>Fetih 1453</li>
                <li>Müslüm</li>
              </ol>
              <ol
                className="list-decimal flex flex-col flex-1 sm:flex-auto gap-[0.75rem] text-[gray] text-[0.75rem] sm:text-[1.125rem]"
                start={6}
              >
                <li>Düğün Dernek 2: Sünnet</li>
                <li>Ayla</li>
                <li>Bergen</li>
                <li>7.Koğuştaki Mucize</li>
                <li>Arif V 216</li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <h2 className="text-white text-[0.875rem] sm:text-[1.125rem] font-semibold">
              Yabancı
            </h2>
            <div className="flex flex-row gap-[0.5rem] gap w-full">
              <ol className="list-decimal flex flex-col flex-1 sm:flex-auto gap-[0.75rem] text-[white] text-[0.75rem] sm:text-[1.125rem]">
                <li>Titanik</li>
                <li>Hızlı ve Öfkeli 7</li>
                <li>Örğmcek Adam</li>
                <li>Avatar: Suyun Yolu</li>
                <li>Hızlı ve Öfkeli 8</li>
              </ol>
              <ol
                className="list-decimal flex flex-col flex-1 sm:flex-auto gap-[0.75rem] text-[gray] text-[0.75rem] sm:text-[1.125rem]"
                start={6}
              >
                <li>Avengers Endagame</li>
                <li>Ayla</li>
                <li>Bergen</li>
                <li>7.Koğuştaki Mucize</li>
                <li>Arif V 216</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rekorlar;
