import React, { useCallback } from "react";


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
        src="/divider.svg"
      />
      <div className="self-stretch flex flex-row items-center justify-between">
        <img
          src="/imgs/sinemaport-red-LOGO.png"
        />
        <div className="flex flex-row items-center justify-end gap-[1.56rem]">
          <div className="flex flex-row items-start justify-start gap-[2.38rem] text-[0.88rem]">
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
          <div className="rounded-61xl bg-mcolor-red flex flex-col py-[0.38rem] px-[1rem] items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-[0.5rem]">
              <div className="relative font-medium">Üye Ol</div>
              <img
                src="/icons/user.png"
              />
            </div>
          </div>
          <div className="rounded-61xl bg-mcolor-red flex flex-col py-[0.38rem] px-[1rem] items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-[0.5rem]">
              <div className="relative font-medium">Giriş Yap</div>
              <img
                src="/icons/login.png"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[0.06rem] shrink-0"
        alt=""
        src="/divider1.svg"
      />
    </div>
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