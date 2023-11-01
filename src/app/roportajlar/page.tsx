import React from "react";
import Sırala from "../elements/Sırala/Sırala";
import Image from "next/image";
import yazar from "/public/imgs/yazar.png";

const page = () => {
  const roportajlar = [
    {
      yazar: "Özden Sevgi Diler",
      baslık: "Barbie geldi, dertler bitti (!)",
      excerpt:
        '2023 yazının en çok beklenen filmlerinden biri olan “Barbie”, son aylarda kaçmanın mümkün olmadığı, her yeri pembeye boyayan çılgın bir pazarlama kampanyasının ardından nihayet sinema salonlarında yerini aldı. Barbie’yi yaratan oyuncak firması Mattel’in uzun yıllardır hayata geçirmeye çalıştığı proje, birkaç yaratıcı el değişikliğinden sonra; Margot Robbie’nin önce yapımcılığı sonra başrolü üstlenmesiyle ivme kazandı, yönetmen koltuğunun “Lady Bird” ve “Little Women” filmleriyle kalbimizi kazanan Greta Gerwig’e emanet edilmesiyle ise yüksek bir beklenti oluşturdu. “Barbie”, temelinde bir "ürün filmi", ancak Gerwig’in ve senaryoyu birlikte kaleme aldığı Noah Baumbach’ın sayesinde film, iki saatlik bir oyuncak reklamı olmanın ötesine geçmeyi başarıyor.',
    },
    {
      yazar: "Özden Sevgi Diler",
      baslık: "Barbie geldi, dertler bitti (!)",
      excerpt:
        '2023 yazının en çok beklenen filmlerinden biri olan “Barbie”, son aylarda kaçmanın mümkün olmadığı, her yeri pembeye boyayan çılgın bir pazarlama kampanyasının ardından nihayet sinema salonlarında yerini aldı. Barbie’yi yaratan oyuncak firması Mattel’in uzun yıllardır hayata geçirmeye çalıştığı proje, birkaç yaratıcı el değişikliğinden sonra; Margot Robbie’nin önce yapımcılığı sonra başrolü üstlenmesiyle ivme kazandı, yönetmen koltuğunun “Lady Bird” ve “Little Women” filmleriyle kalbimizi kazanan Greta Gerwig’e emanet edilmesiyle ise yüksek bir beklenti oluşturdu. “Barbie”, temelinde bir "ürün filmi", ancak Gerwig’in ve senaryoyu birlikte kaleme aldığı Noah Baumbach’ın sayesinde film, iki saatlik bir oyuncak reklamı olmanın ötesine geçmeyi başarıyor.',
    },
    {
      yazar: "Özden Sevgi Diler",
      baslık: "Barbie geldi, dertler bitti (!)",
      excerpt:
        '2023 yazının en çok beklenen filmlerinden biri olan “Barbie”, son aylarda kaçmanın mümkün olmadığı, her yeri pembeye boyayan çılgın bir pazarlama kampanyasının ardından nihayet sinema salonlarında yerini aldı. Barbie’yi yaratan oyuncak firması Mattel’in uzun yıllardır hayata geçirmeye çalıştığı proje, birkaç yaratıcı el değişikliğinden sonra; Margot Robbie’nin önce yapımcılığı sonra başrolü üstlenmesiyle ivme kazandı, yönetmen koltuğunun “Lady Bird” ve “Little Women” filmleriyle kalbimizi kazanan Greta Gerwig’e emanet edilmesiyle ise yüksek bir beklenti oluşturdu. “Barbie”, temelinde bir "ürün filmi", ancak Gerwig’in ve senaryoyu birlikte kaleme aldığı Noah Baumbach’ın sayesinde film, iki saatlik bir oyuncak reklamı olmanın ötesine geçmeyi başarıyor.',
    },
  ];

  return (
    <div className="mt-3 md:mt-20 px-[1.5rem] sm:px-[6rem] md:px-[9.5rem]">
      <div className="layout">
        <h1>Röportajlar</h1>
        <Sırala />
        {roportajlar.map((rop) => (
          <div className="mt-6 md:mt-10 flex flex-col md:flex-row">
            <div className=" flex flex-col gap-[1.5rem]">
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
                <p className="text-white text-[0.75rem] sm:text-[0.875rem] italic font-medium">
                  Yazar: {rop.yazar}
                </p>
                <h4 className="text-white text-[0.75rem] sm:text-[0.875rem] font-bold mt-[0.75rem] lg:mt-[1rem]">
                  {rop.baslık}
                </h4>
                <p className="text-white text-[0.625rem] sm:text-[0.8125rem] font-light mt-[1rem] lg:mt-[1.5rem]">
                  {rop.excerpt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
