"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  //Handles the opening and closing of our nav
  const setNavbarOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header className="layout w-full relative">
      <div className="flex justify-between items-center pt-4 pb-[0.75rem] sm:pb-[1.62rem]">
        <Link href="/">
          <div className="max-w-[8rem] sm:max-w-[11rem]">
            <Image
              src="/imgs/sinemaport-red-LOGO3x.png"
              alt="logo"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
        </Link>
        <nav
          className={`hidden md:flex items-center gap-[1.63rem] ${
            !isOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="flex items-start justify-start gap-[2.38rem] text-[0.88rem]">
            <Link href="/">
              <div>ANASAYFA</div>
            </Link>
            <Link href="/filmler">
              <div>FİLMLER</div>
            </Link>
            <Link href="/seanslar">
              <div>SEANSLAR</div>
            </Link>
          </div>
          <div className="flex gap-[1rem]">
            <Link href="/register">
              <div className="rounded-3xl bg-[#D82121] flex py-[0.3rem] px-[0.9rem] items-center justify-center gap-[0.5rem]">
                <div className="text-sm">Üye Ol</div>
                <img src="/icons/user.png" />
              </div>
            </Link>
            <Link href="/login">
              <div className="rounded-3xl bg-[#D82121] flex py-[0.3rem] px-[0.9rem] items-center justify-center gap-[0.5rem]">
                <div className="text-sm">Giriş Yap</div>
                <img src="/icons/login.png" />
              </div>
            </Link>
          </div>
        </nav>

        <Overlay isOpen={isOpen} />
        <div className="flex md:hidden absolute right-0">
          <button
            className=" flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
            onClick={setNavbarOpen}
          >
            <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <span
                className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                  isOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
                  isOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>
      <hr className="border-[#D9D9D9] layout" />
    </header>
  );
};
export default Header;

function Overlay({ isOpen }) {
  return (
    <div
      className={`${
        isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }
    fixed inset-0 w-full h-full z-10 py-[1.31rem] bg-[#D82121] bg-opacity-100 transform delay-100 transition-all duration-300`}
    >
      <div className="flex flex-col layout h-full">
        <div className="max-w-[8rem]">
          <Image
            src="/imgs/mobileLogo.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="h-full mt-[1.88rem]">
          <div className="flex gap-[0.5rem] px-[1rem] py-[0.375rem] rounded-[5rem] bg-[#292D32] max-w-fit">
            <p>Volkan</p>
            <div className="w-[1.5rem] h-[1.5rem]">
              <Image
                src="/imgs/profilImg.png"
                alt="vlk"
                width={100}
                height={100}
                className="w-full h-full rounded-full"
              />
            </div>
          </div>

          <div className="flex flex-col h-[calc(100%-36px)] justify-between pt-[1.56rem] overflow-y-hidden">
            <div className="flex flex-col gap-[1.88rem] text-[0.875rem]">
              <Link href="/">
                <div>ANASAYFA</div>
              </Link>
              <Link href="/filmler">
                <div>FİLMLER</div>
              </Link>
              <Link href="/seanslar">
                <div>SEANSLAR</div>
              </Link>
            </div>

            <div className="flex flex-col gap-[1.88rem] text-[0.875rem] font-medium">
              <div className="w-[13rem] h-[0.4375rem] bg-[#292D32] rounded-full"></div>
              <Link href="/">
                <p>Profil</p>
              </Link>
              <Link href="/">
                <p>Ayarlar</p>
              </Link>
              <Link href="/">
                <p>Çıkış Yap</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* 
<div className="self-stretch rounded-3xl [background:linear-gradient(-90deg,_rgba(216,_33,_33,_0),_#d82121)] h-[3rem] flex flex-col py-[0.5rem] px-[1.5rem] box-border items-start justify-center text-[0.88rem] text-white">
  <div className="self-stretch flex flex-row items-center justify-start">
    <div className="flex-1 flex flex-row items-center justify-start gap-[2rem]">
      <div className="flex flex-row items-center justify-start gap-[0.5rem]">
        <img src="/icons/search-normal.png" />
        <div className="relative font-medium">Ara</div>
      </div>
      <div className="relative font-medium">
        Film, Haber, Yazar, Seans, Fragman
      </div>
    </div>
  </div>
</div> */
}
