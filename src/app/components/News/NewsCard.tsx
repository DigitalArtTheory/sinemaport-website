import React from "react";
import styles from "../News/NewsCard.module.css";
import Link from "next/link";
import Image from "next/image";
import haberCardImg from "../../../../public/imgs/newsCard.png";

const NewsCard = () => {
  return (
    <div className={`${styles.bgIm} relative w-full mt-[0.75rem]`}>
      <Image
        src={haberCardImg}
        alt="haberImg"
        className="absolute -z-10 inset-0 w-full h-full object-cover"
        width={100}
        height={100}
      />
      <div className="flex flex-col gap-[0.5rem] p-[0.5rem] w-[9.77rem]">
        <p className="text-white text-[0.625rem] font-normal mt-5">
          Barbie 53 milyon dolarla liderliğini sürdürdü, Meg 2 açılışını ikinci
          sırada yaptı
        </p>
        <Link href="/#" className="text-white text-[0.5625rem]">
          Detaya Git...
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
