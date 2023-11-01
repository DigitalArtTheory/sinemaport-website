import Sponsor from "@/app/components/Sponsor/Sponsor";
import BeymenAd2 from "@/app/elements/Beymen/BeymenAd2";
import Sırala from "@/app/elements/Sırala/Sırala";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="mt-3 md:mt-20 px-[1.5rem] sm:px-[6rem] md:px-[9.5rem]">
        <div className="layout">
          <div className="mt-6 md:mt-10 flex flex-col md:flex-row">
            <div className=" flex flex-col gap-[1.5rem]">
              <div className="w-[4.625rem] h-[4.625rem]">
                <Image
                  src="/imgs/yazar.png"
                  alt="yazar"
                  width={100}
                  height={100}
                  className="rounded-full w-full h-full"
                />
              </div>
              <div>
                <p className="text-white text-[0.75rem] sm:text-[0.875rem] italic font-medium">
                  Yazar: Özden Sevgi Diler
                </p>
                <h4 className="text-white text-[0.75rem] sm:text-[0.875rem] font-bold mt-[0.75rem] lg:mt-[1rem]">
                  Barbie geldi, dertler bitti (!)
                </h4>
                <p className="text-white text-[0.625rem] sm:text-[0.8125rem] font-light mt-[1rem] lg:mt-[1.5rem]">
                  2023 yazının en çok beklenen filmlerinden biri olan “Barbie”,
                  son aylarda kaçmanın mümkün olmadığı, her yeri pembeye boyayan
                  çılgın bir pazarlama kampanyasının ardından nihayet sinema
                  salonlarında yerini aldı. Barbie’yi yaratan oyuncak firması
                  Mattel’in uzun yıllardır hayata geçirmeye çalıştığı proje,
                  birkaç yaratıcı el değişikliğinden sonra; Margot Robbie’nin
                  önce yapımcılığı sonra başrolü üstlenmesiyle ivme kazandı,
                  yönetmen koltuğunun “Lady Bird” ve “Little Women” filmleriyle
                  kalbimizi kazanan Greta Gerwig’e emanet edilmesiyle ise yüksek
                  bir beklenti oluşturdu. “Barbie”, temelinde bir "ürün filmi",
                  ancak Gerwig’in ve senaryoyu birlikte kaleme aldığı Noah
                  Baumbach’ın sayesinde film, iki saatlik bir oyuncak reklamı
                  olmanın ötesine geçmeyi başarıyor.
                </p>
              </div>
              <div>
                <div className="w-full h-auto md:h-[22.5rem]">
                  <Image
                    alt="abc"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                    // fill
                    src="https://s3-alpha-sig.figma.com/img/ddbf/1ab0/272662c7c254393cc3bc3571105235eb?Expires=1699228800&Signature=JVE8h8HUeWDN-IDcH5bhstqNY9hMmxXPuBj9eJzHyQmZ3rjNbZQl0irCn~sJy9t56E9bKTQpRnh-w8ej14~DNtyZ0F8azCTcjiPtLGCUkeCrDgWzCBtMqpTfyOrpcL8gIxKdH-RidXfbbuVjlUT2nlz2dC3pYRp69oDZ~C0OgAQqLBQ6iaOrcbcFbFGfLilqtNZfvtfYSVhvbefgI9aCZRqrJWX0VUG-hSGgCqa-0kvaF2KCtHtB1iFBUUxKyDUXJNhzHxhQq229gsnSYVhQd3autF4pwESquDuzWQcpGFpdQjk8HjS2UrBqMc8qcKQ95GvZPZ-EwTYjmOHzZOFa0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  />
                </div>
                <p>Paylaş Icon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BeymenAd2 />
      Slider Video
      <Sponsor />
    </div>
  );
};

export default page;
