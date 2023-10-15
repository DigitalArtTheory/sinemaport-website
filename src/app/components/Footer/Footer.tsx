import React from "react";
import notification from "../../../../public/icons/notification.svg";
import Image from "next/image";
import styles from "../Footer/Footer.module.css";
import bgImage from "../../../../public/imgs/footerBg.png";
import BiziTakipEdin from "@/app/elements/BiziTakipEdin/BiziTakipEdin";

const Footer = () => {
  return (
    <footer
      className={`${styles.footer} w-full relative min-h-[12rem] md:min-h-[28rem] flex justify-center items-center md:items-baseline`}
    >
      <Image src={bgImage} className="-z-10 object-cover" alt="bgImage" fill />
      <div className="mx-auto max-w-[20.25rem] md:max-w-[34.56rem] md:mt-[3.87rem]">
        <div className="flex flex-col md:flex-row font-medium text-[0.625rem] md:text-[0.875rem] justify-center gap-2 md:gap-[2.25rem] items-center w-full">
          <div className=" flex items-center gap-[0.5rem] md:gap-[2.25rem]">
            <a>Hakkımızda</a>
            <a>Sık Sorulan Sorular</a>
          </div>
          <div className=" flex items-center gap-[0.5rem] md:gap-[2.25rem]">
            <a>Reklam Verin</a>
            <div className="flex gap-1 justify-center items-center">
              <a className="">Bildirimleri Aç</a>
              <div className="flex items-center justify-center w-[20px]">
                <Image
                  src={notification}
                  width={100}
                  height={100}
                  alt="notification"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
        <BiziTakipEdin isOnTop={false} position="normal" bColor={"#e9e9e9"} />
      </div>
    </footer>
  );
};

export default Footer;
