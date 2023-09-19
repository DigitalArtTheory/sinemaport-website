import React from "react";
import notification from "../../../../public/icons/notification.svg";
import facebook from "../../../../public/icons/facebook.svg";
import instagram from "../../../../public/icons/instagram.svg";
import twitter from "../../../../public/icons/twitter.svg";
import whatsapp from "../../../../public/icons/whatsapp.svg";
import youtube from "../../../../public/icons/youtube.svg";
import Image from "next/image";
import styles from "../Footer/Footer.module.css";
import bgImage from "../../../../public/imgs/footerBg.png";

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
        <div className="flex items-center justify-center w-full md:justify-start">
          <div className="flex items-center justify-center mt-[2.25rem] border-[#E9E9E9] border-solid border-[1px] rounded-full px-[1.5rem] py-[1rem]">
            <div className="mr-[2.5rem]">Bizi takip edin</div>
            <div className="flex gap-[0.5rem]">
              <a href="" className="w-[1.125rem]">
                <Image src={facebook} width={100} height={100} alt="facebook" />
              </a>
              <a href="" className="w-[1.125rem]">
                <Image
                  src={instagram}
                  width={100}
                  height={100}
                  alt="instagram"
                />
              </a>
              <a href="" className="w-[1.125rem]">
                <Image src={twitter} width={100} height={100} alt="x" />
              </a>
              <a href="" className="w-[1.125rem]">
                <Image src={whatsapp} width={100} height={100} alt="whatsapp" />
              </a>
              <a href="" className="w-[1.125rem]">
                <Image src={youtube} width={100} height={100} alt="youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
