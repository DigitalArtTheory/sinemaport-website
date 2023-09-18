import React from "react";
import notification from "../../../../public/icons/notification.svg";
import facebook from "../../../../public/icons/facebook.svg";
import instagram from "../../../../public/icons/instagram.svg";
import twitter from "../../../../public/icons/twitter.svg";
import whatsapp from "../../../../public/icons/whatsapp.svg";
import youtube from "../../../../public/icons/youtube.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pt-[3.87rem] pb-[17.5rem] bg-gradient-to-b from-red-600 to-red-600 mix-blend-screen">
      <div className="mx-auto max-w-[34.56rem]">
        <div className="flex gap-[36px] items-center">
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
        <div className="flex items-center">
          <div className="flex items-center justify-center mt-[2.25rem] border-solid border-[1px] rounded-3xl px-[1.5rem] py-[1rem]">
            <div className="mr-[2.5rem]">Bizi takip edin</div>
            <div className="flex gap-[0.5rem]">
              <a href="" className="w-[1.125rem]">
                <Image src={facebook} width={100} height={100} alt="facebook" />
              </a>
              <a href="">
                <Image
                  src={instagram}
                  width={100}
                  height={100}
                  alt="instagram"
                />
              </a>
              <a href="">
                <Image src={twitter} width={100} height={100} alt="x" />
              </a>
              <a href="">
                <Image src={whatsapp} width={100} height={100} alt="whatsapp" />
              </a>
              <a href="">
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
