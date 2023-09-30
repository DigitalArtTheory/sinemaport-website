"use client";
import React, { useCallback , useState  } from "react";



export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  //Handles the opening and closing of our nav
  const handleClick = () => {
      setIsOpen(!isOpen);
  };
}
const Header = () => {
const onFLMLERTextClick = useCallback(() => {
  // Please sync "filmler" to the project
}, []);

const onSEANSLARTextClick = useCallback(() => {
  // Please sync "seanslar" to the project
}, []);

return (
  <header className="pt-[3.87rem] pb-[17.5rem] flex flex-col items-start justify-start gap-[0.81rem] text-left text-[0.75rem] text-subcolor-grey2 font-h6">
    <div className="mx-auto max-w-[71rem]">
    <div className="self-stretch flex flex-col pt-[1rem] px-[0rem] pb-[0rem] items-center justify-start gap-[1.63rem]">
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[0rem] shrink-0 hidden"
        alt=""
      />
      <div className="self-stretch flex md:flex-row flex-col items-center justify-between mx-auto">
        <img className=" max-w-[15rem]"
          src="/imgs/sinemaport-red-LOGO3x.png"
        />
        <div className="flex  md:flex-row flex-col items-center justify-end gap-[1.56rem] pt-4">
          <div className="flex  md:flex-row flex-col items-start justify-start gap-[2.38rem] text-[0.88rem]">
            <div className="relative">ANASAYFA</div>
            <div
              className="relative font-medium cursor-pointer"
              onClick={onFLMLERTextClick}
            >
              FİLMLER
            </div>
            <div
              className="relative font-medium cursor-pointer"
              onClick={onSEANSLARTextClick}
            >
              SEANSLAR
            </div>
          </div>
          <div className="flex flex-row gap-[1rem]">
          <div className="rounded-3xl bg-[#D82121] flex flex-col py-[0.38rem] px-[1rem] items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-[0.5rem]">
              <div className="relative font-medium min-w-[3rem]">Üye Ol</div>
              <img className=" max-w-[2rem]"
                src="/icons/user.png"
              />
            </div>
          </div>
          <div className="rounded-3xl bg-[#D82121] flex flex-col py-[0.38rem] px-[1rem] items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-[0.5rem]">
              <div className="relative font-medium min-w-[3rem]">Giriş Yap</div>
              <img className=" max-w-[2rem]"
                src="/icons/login.png"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <hr className="border-[#D9D9D9]"/>
    <br/>
    <div className="self-stretch rounded-3xl [background:linear-gradient(-90deg,_rgba(216,_33,_33,_0),_#d82121)] h-[3rem] flex flex-col py-[0.5rem] px-[1.5rem] box-border items-start justify-center text-[0.88rem] text-white">
      <div className="self-stretch flex flex-row items-center justify-start">
        <div className="flex-1 flex flex-row items-center justify-start gap-[2rem]">
          <div className="flex flex-row items-center justify-start gap-[0.5rem]">
            <img
                src="/icons/search-normal.png"
            />
            <div className="relative font-medium">Ara</div>
          </div>
          <div className="relative font-medium">
            Film, Haber, Yazar, Seans, Fragman
          </div>
        </div>
      </div>
    </div>
    </div>
  </header>
);
};
export default Header;