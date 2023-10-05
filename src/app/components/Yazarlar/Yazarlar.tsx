import MainHeader from "@/app/elements/MainHeader/MainHeader";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import yazar from "../../../../public/imgs/profilImg.png";

const Yazarlar = () => {
  return (
    <div className="layout">
      <MainHeader color="" header="YAZARLAR" />
      <div className="flex flex-col md:flex-row gap-[1rem]">
        <div className="flex flex-col gap-[0.75rem]">
          <div className="w-[4.625rem] h-[4.625rem]">
            <Image
              src={yazar}
              alt="yazar"
              width="0"
              height="0"
              className="rounded-full w-full h-full"
            />
          </div>
          <div>
            <p className="text-white text-[0.75rem] italic font-medium">
              Yazar: Özden Sevgi Diler
            </p>
            <h4 className="text-white text-[0.75rem] font-bold mt-[0.75rem]">
              Barbie geldi, dertler bitti (!)
            </h4>
            <p className="text-white text-[0.625rem] font-light mt-[0.75rem]">
              2023 yazının en çok beklenen filmlerinden biri olan “Barbie”, son
              aylarda kaçmanın mümkün olmadığı, her yeri pembeye boyayan çılgın
              bir pazarlama kampanyasının ardından nihayet sinema salonlarında
              yerini aldı. Barbie’yi yaratan oyuncak firması Mattel’in uzun
              yıllardır hayata geçirmeye çalıştığı proje, birkaç yaratıcı el
              değişikliğinden sonra; Margot Robbie’nin önce yapımcılığı sonra
              başrolü üstlenmesiyle ivme kazandı, yönetmen koltuğunun “Lady
              Bird” ve “Little Women” filmleriyle kalbimizi kazanan Greta
              Gerwig’e emanet edilmesiyle ise yüksek bir beklenti oluşturdu.
              “Barbie”, temelinde bir "ürün filmi", ancak Gerwig’in ve senaryoyu
              birlikte kaleme aldığı Noah Baumbach’ın sayesinde film, iki
              saatlik bir oyuncak reklamı olmanın ötesine geçmeyi başarıyor.
            </p>
          </div>
          <p className=" text-white text-[0.5rem] font-medium underline">
            Devamını Oku...
          </p>
          <div>
            <Link className="" href={"#"}>
              ←
            </Link>
            <Link href={"#"}>→</Link>
          </div>
        </div>

        <div className="flex flex-col gap-[1rem]">
          <div className="flex flex-col gap-[0.75rem]">
            <h4 className="text-white text-[0.75rem] font-bold">
              Barbie geldi, dertler bitti (!)
            </h4>
            <p className="text-white text-[0.625rem] font-light">
              2023 yazının en çok beklenen filmlerinden biri olan “Barbie”, son
              aylarda kaçmanın mümkün olmadığı, her yeri pembeye boyayan çılgın
              bir pazarlama kampanyasının ardından nihayet sinema salonlarında
              yerini aldı.
            </p>
            <p className="text-white text-[0.75rem] italic font-medium">
              Yazar: Özden Sevgi Diler
            </p>
            <p className=" text-white text-[0.5rem] font-medium underline">
              Devamını Oku...
            </p>
          </div>
          <div className="flex flex-col gap-[0.75rem]">
            <h4 className="text-white text-[0.75rem] font-bold">
              Barbie geldi, dertler bitti (!)
            </h4>
            <p className="text-white text-[0.625rem] font-light">
              2023 yazının en çok beklenen filmlerinden biri olan “Barbie”, son
              aylarda kaçmanın mümkün olmadığı, her yeri pembeye boyayan çılgın
              bir pazarlama kampanyasının ardından nihayet sinema salonlarında
              yerini aldı.
            </p>
            <p className="text-white text-[0.75rem] italic font-medium">
              Yazar: Özden Sevgi Diler
            </p>
            <p className=" text-white text-[0.5rem] font-medium underline">
              Devamını Oku...
            </p>
          </div>
          <div className="flex flex-col gap-[0.75rem]">
            <h4 className="text-white text-[0.75rem] font-bold">
              Barbie geldi, dertler bitti (!)
            </h4>
            <p className="text-white text-[0.625rem] font-light">
              2023 yazının en çok beklenen filmlerinden biri olan “Barbie”, son
              aylarda kaçmanın mümkün olmadığı, her yeri pembeye boyayan çılgın
              bir pazarlama kampanyasının ardından nihayet sinema salonlarında
              yerini aldı.
            </p>
            <p className="text-white text-[0.75rem] italic font-medium">
              Yazar: Özden Sevgi Diler
            </p>
            <p className=" text-white text-[0.5rem] font-medium underline">
              Devamını Oku...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yazarlar;
