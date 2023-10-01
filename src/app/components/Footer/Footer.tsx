import React from "react";
import notification from "../../../../public/icons/notification.svg";
import Image from "next/image";
import styles from "../Footer/Footer.module.css";
import bgImage from "../../../../public/imgs/footerBg.png";
import BiziTakipEdin from "@/app/elements/BiziTakipEdin/BiziTakipEdin";

const Footer = () => {
  return (
    <footer
      className={`${styles.footer} w-full relative pt-[3.87rem] pb-[17.5rem] `}
    >
      <Image src={bgImage} className="-z-10 object-cover" alt="bgImage" fill />
      <div className="mx-auto max-w-[20.25rem] md:max-w-[34.56rem]">
        <div className="flex flex-wrap justify-center gap-[36px] items-center w-full md:flex-nowrap">
          <a>Hakkımızda</a>
          <a>Sık Sorulan Sorular</a>
          <a>Reklam Verin</a>
          <div className="flex gap-1">
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
        <BiziTakipEdin bColor={"#e9e9e9"} />
      </div>
    </footer>
  );
};

export default Footer;
