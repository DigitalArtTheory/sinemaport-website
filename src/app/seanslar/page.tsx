import Image from "next/image";
import Header from "../components/Header/Header";

export default function Seanslar() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-start justify-start">
        <div className="mx-[2rem] mb-3">
          <h2>Seanslar</h2>
          <p>
            Sinema salonlarında gösterimde olan tüm filmlerin seans bilgileri
          </p>
        </div>
        <div className="mx-auto flex-col justify-center items-center gap-2 inline-flex">
          <button className="self-stretch h-12 px-3 py-2 rounded-3xl border border-red-600 gap-2 flex justify-between items-center hover:bg-red-600">
            <div className="justify-center items-center gap-2 flex">
              <div className="text-white text-xs font-medium">İL :</div>
              <div className="Stanbul text-white text-xs font-medium">
                İSTANBUL
              </div>
            </div>
            <div className="w-[1.5rem] h-[1.5rem]">
              <Image
                src="/icons/arrow-circle-down.svg"
                alt="arrow"
                width={100}
                height={100}
              />
            </div>
          </button>
          <button className="self-stretch h-12 px-3 py-2 rounded-3xl border border-red-600 gap-2 flex justify-between items-center hover:bg-red-600">
            <div className="justify-center items-center gap-2 flex">
              <div className="text-white text-xs font-medium">İLÇE :</div>
              <div className="text-white text-xs font-medium">BAHÇELİEVLER</div>
            </div>
            <div className="w-[1.5rem] h-[1.5rem]">
              <Image
                src="/icons/arrow-circle-down.svg"
                alt="arrow"
                width={100}
                height={100}
              />
            </div>
          </button>
          <br />
          <div className="justify-start items-start flex">
            <div className="w-[87.16px] h-[48.79px] relative">
              <Image
                src="/icons/union-selected.svg"
                alt="arrow"
                width={100}
                height={100}
              />
              <div className="left-[17px] top-[5px] absolute text-center">
                <span className="text-gray-200 text-[10px] font-normal leading-[5px]">
                  çarşamba
                  <br />
                </span>
                <span className="text-gray-200 text-xl font-normal leading-[5px]">
                  16
                  <br />
                </span>
                <span className="text-gray-200 text-[10px] font-normal leading-[5px]">
                  Ağustos
                </span>
              </div>
            </div>
            <div className="Group37 w-[86.07px] h-[48.82px] relative">
              <Image
                src="/icons/union.svg"
                alt="arrow"
                width={100}
                height={100}
              />
              <div className="left-[16.84px] top-[5px] absolute text-center">
                <span className="text-gray-200 text-[10px] font-normal leading-[9.57px]">
                  Perşembe
                  <br />
                </span>
                <span className="text-gray-200 text-xl font-normal leading-[19.14px]">
                  17
                  <br />
                </span>
                <span className="text-gray-200 text-[10px] font-normal leading-[9.57px]">
                  Ağustos
                </span>
              </div>
            </div>
            <div className="w-[93.31px] h-[47.54px] relative">
              <Image
                src="/icons/union.svg"
                alt="arrow"
                width={100}
                height={100}
              />
              <div className="left-[26.77px] top-[5px] absolute text-center">
                <span className="text-gray-200 text-[10px] font-normal leading-[9.57px]">
                  Cuma
                  <br />
                </span>
                <span className="text-gray-200 text-xl font-normal leading-[19.14px]">
                  18
                  <br />
                </span>
                <span className="text-gray-200 text-[10px] font-normal leading-[9.57px]">
                  Ağustos
                </span>
              </div>
            </div>
            <div className="w-[89.78px] h-[47.87px] relative">
              <Image
                src="/icons/union.svg"
                alt="arrow"
                width={100}
                height={100}
              />
              <div className="left-[20.46px] top-[5px] absolute text-center">
                <span className="text-gray-200 text-[10px] font-normal leading-[9.57px]">
                  Cumartesi
                  <br />
                </span>
                <span className="text-gray-200 text-xl font-normal leading-[19.14px]">
                  19
                  <br />
                </span>
                <span className="text-gray-200 text-[10px] font-normal leading-[9.57px]">
                  Ağustos
                </span>
              </div>
            </div>
          </div>
          <div className="justify-start items-start flex">
            <div className="w-[87.16px] h-[48.79px] relative">
              <Image
                src="/icons/union.svg"
                alt="arrow"
                width={100}
                height={100}
              />
              <div className="left-[22px] top-[4.18px] absolute text-center">
                <span className="text-gray-200 text-[10px] font-normal leading-[9.57px]">
                  Pazar
                  <br />
                </span>
                <span className="text-gray-200 text-xl font-normal leading-[19.14px]">
                  20
                  <br />
                </span>
                <span className="text-gray-200 text-[10px] font-normal leading-[9.57px]">
                  Ağustos
                </span>
              </div>
            </div>
            <div className="w-[86.07px] h-[48.88px] relative">
              <Image
                src="/icons/union.svg"
                alt="arrow"
                width={100}
                height={100}
              />
              <div className="left-[18.84px] top-[4.18px] absolute text-center">
                <span className="text-gray-200 text-[10px] font-normal leading-[9.57px]">
                  Pazartesi
                  <br />
                </span>
                <span className="text-gray-200 text-xl font-normal leading-[19.14px]">
                  21
                  <br />
                </span>
                <span className="text-gray-200 text-[10px] font-normal leading-[9.57px]">
                  Ağustos
                </span>
              </div>
            </div>
            <div className="w-[86.07px] h-[48.88px] relative">
              <Image
                src="/icons/union.svg"
                alt="arrow"
                width={100}
                height={100}
              />
              <div className="left-[21.77px] top-[4.18px] absolute text-center">
                <span className="text-gray-200 text-[10px] font-normal leading-[9.57px]">
                  Salı
                  <br />
                </span>
                <span className="text-gray-200 text-xl font-normal leading-[19.14px]">
                  22
                  <br />
                </span>
                <span className="text-gray-200 text-[10px] font-normal leading-[9.57px]">
                  Ağustos
                </span>
              </div>
            </div>
            <div className="w-[86.07px] h-[48.88px] relative">
              <Image
                src="/icons/union.svg"
                alt="arrow"
                width={100}
                height={100}
              />
              <div className="left-[18.70px] top-[4.18px] absolute text-center">
                <span className="text-gray-200 text-[10px] font-normal leading-[9.57px]">
                  Çarşamba
                  <br />
                </span>
                <span className="text-gray-200 text-xl font-normal leading-[19.14px]">
                  23
                  <br />
                </span>
                <span className="text-gray-200 text-[10px] font-normal leading-[9.57px]">
                  Ağustos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
