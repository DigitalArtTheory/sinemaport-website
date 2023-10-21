import Haberler from "@/app/components/Haberler/Haberler";
import Sponsor from "@/app/components/Sponsor/Sponsor";
import BeymenAd from "@/app/elements/Beymen/BeymenAd";
import BeymenAd2 from "@/app/elements/Beymen/BeymenAd2";
import Image from "next/image";
import React from "react";

const page = () => {
  const filmKadro = [
    {
      name: "Cemal Hünal",
      src: "https://s3-alpha-sig.figma.com/img/77a6/f593/b979200297be858bba74b9a30b1b5175?Expires=1698624000&Signature=ALBc5Is2RlZq8etvIbZliYjOcjjW0Ex99rJOe78kkGNF5Fels7jbGyGR2Sf6BeB39gZJAgNpoibDhPBjLfEgza0QwcbUZiU8UtKwiFIfmbXJpXGWYKMPteEKiTjDCXMa7fTdwVt-Sz~0UWXCDxuKcyLdwKFFnGg4PBQMh3jTBKsNwUFdWkeaxe~nFM027FOiCjIPZeinDe~3FTkwMdFF5uv3g7oNTfiXORJxDB~K8nXGytFFF9KUfcBmx1j6HL2LFHN0zO5sXCHqjxs7iqydQkVWxEVf0AyNbNGJuHLTVOcm7KdYDvLcVtSi4-wFUiRusDvlMJBIf7~uhiLzYHezNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      name: "Cemal Hünal",
      src: "https://s3-alpha-sig.figma.com/img/77a6/f593/b979200297be858bba74b9a30b1b5175?Expires=1698624000&Signature=ALBc5Is2RlZq8etvIbZliYjOcjjW0Ex99rJOe78kkGNF5Fels7jbGyGR2Sf6BeB39gZJAgNpoibDhPBjLfEgza0QwcbUZiU8UtKwiFIfmbXJpXGWYKMPteEKiTjDCXMa7fTdwVt-Sz~0UWXCDxuKcyLdwKFFnGg4PBQMh3jTBKsNwUFdWkeaxe~nFM027FOiCjIPZeinDe~3FTkwMdFF5uv3g7oNTfiXORJxDB~K8nXGytFFF9KUfcBmx1j6HL2LFHN0zO5sXCHqjxs7iqydQkVWxEVf0AyNbNGJuHLTVOcm7KdYDvLcVtSi4-wFUiRusDvlMJBIf7~uhiLzYHezNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      name: "Cemal Hünal",
      src: "https://s3-alpha-sig.figma.com/img/77a6/f593/b979200297be858bba74b9a30b1b5175?Expires=1698624000&Signature=ALBc5Is2RlZq8etvIbZliYjOcjjW0Ex99rJOe78kkGNF5Fels7jbGyGR2Sf6BeB39gZJAgNpoibDhPBjLfEgza0QwcbUZiU8UtKwiFIfmbXJpXGWYKMPteEKiTjDCXMa7fTdwVt-Sz~0UWXCDxuKcyLdwKFFnGg4PBQMh3jTBKsNwUFdWkeaxe~nFM027FOiCjIPZeinDe~3FTkwMdFF5uv3g7oNTfiXORJxDB~K8nXGytFFF9KUfcBmx1j6HL2LFHN0zO5sXCHqjxs7iqydQkVWxEVf0AyNbNGJuHLTVOcm7KdYDvLcVtSi4-wFUiRusDvlMJBIf7~uhiLzYHezNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      name: "Cemal Hünal",
      src: "https://s3-alpha-sig.figma.com/img/77a6/f593/b979200297be858bba74b9a30b1b5175?Expires=1698624000&Signature=ALBc5Is2RlZq8etvIbZliYjOcjjW0Ex99rJOe78kkGNF5Fels7jbGyGR2Sf6BeB39gZJAgNpoibDhPBjLfEgza0QwcbUZiU8UtKwiFIfmbXJpXGWYKMPteEKiTjDCXMa7fTdwVt-Sz~0UWXCDxuKcyLdwKFFnGg4PBQMh3jTBKsNwUFdWkeaxe~nFM027FOiCjIPZeinDe~3FTkwMdFF5uv3g7oNTfiXORJxDB~K8nXGytFFF9KUfcBmx1j6HL2LFHN0zO5sXCHqjxs7iqydQkVWxEVf0AyNbNGJuHLTVOcm7KdYDvLcVtSi4-wFUiRusDvlMJBIf7~uhiLzYHezNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      name: "Cemal Hünal",
      src: "https://s3-alpha-sig.figma.com/img/77a6/f593/b979200297be858bba74b9a30b1b5175?Expires=1698624000&Signature=ALBc5Is2RlZq8etvIbZliYjOcjjW0Ex99rJOe78kkGNF5Fels7jbGyGR2Sf6BeB39gZJAgNpoibDhPBjLfEgza0QwcbUZiU8UtKwiFIfmbXJpXGWYKMPteEKiTjDCXMa7fTdwVt-Sz~0UWXCDxuKcyLdwKFFnGg4PBQMh3jTBKsNwUFdWkeaxe~nFM027FOiCjIPZeinDe~3FTkwMdFF5uv3g7oNTfiXORJxDB~K8nXGytFFF9KUfcBmx1j6HL2LFHN0zO5sXCHqjxs7iqydQkVWxEVf0AyNbNGJuHLTVOcm7KdYDvLcVtSi4-wFUiRusDvlMJBIf7~uhiLzYHezNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      name: "Cemal Hünal",
      src: "https://s3-alpha-sig.figma.com/img/77a6/f593/b979200297be858bba74b9a30b1b5175?Expires=1698624000&Signature=ALBc5Is2RlZq8etvIbZliYjOcjjW0Ex99rJOe78kkGNF5Fels7jbGyGR2Sf6BeB39gZJAgNpoibDhPBjLfEgza0QwcbUZiU8UtKwiFIfmbXJpXGWYKMPteEKiTjDCXMa7fTdwVt-Sz~0UWXCDxuKcyLdwKFFnGg4PBQMh3jTBKsNwUFdWkeaxe~nFM027FOiCjIPZeinDe~3FTkwMdFF5uv3g7oNTfiXORJxDB~K8nXGytFFF9KUfcBmx1j6HL2LFHN0zO5sXCHqjxs7iqydQkVWxEVf0AyNbNGJuHLTVOcm7KdYDvLcVtSi4-wFUiRusDvlMJBIf7~uhiLzYHezNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ];

  return (
    <div>
      <div className="mt-3 md:mt-20 px-[1.5rem] sm:px-[6rem] md:px-[9.5rem]">
        <div className="layout">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <h1 className="text-[1.5rem] font-semibold md:text-[2rem]">
              Genel Bakış
            </h1>
            <div className="flex gap-6 text-[1rem] text-[gray] font-semibold">
              <p>Fragmanlar</p>
              <p>Foto Galeri</p>
            </div>
          </div>

          {/* Mobile Info Card */}
          <div className="md:hidden flex flex-col gap-6 mt-[1.4rem]">
            <h1 className="text-[1.5rem] font-semibold">Yanlış Anlama</h1>
            <div className="w-full">
              <Image
                alt="a"
                width={100}
                height={100}
                className="w-full h-full"
                src="https://s3-alpha-sig.figma.com/img/5bc3/6407/c29aa8bacdf307a22bf3bb359996e53b?Expires=1698624000&Signature=mUQcqDvgwLzN3K2KP2FgG2QsB9gACe~0K1dSV~qmmy-mvBzDuYELRn2wMENf7YOblV5qD0SwGIFvHrqBdKQVPcv437odgt96DqmqaEaaOQeW3UZ~Jlt-AhLAKBPC18pxrfpJfClWzkWhULT7LQjnNGctshgLpDq2UORbY75BWVgXvO7~DXw-pMLaLneiuO4bi7XpCt5flJEpW1s1BsePSoJcBaPxP0IumE7NUla0GTXiSTbUlcLVZ7CaEZ-wRgOVwX8mDRFN1hRHQ-BRZgU3ZL5-gAy~n8Gr4JOR1vH3s~B8hRsNW~tlrU1gujeQRPoUog1i~Rrvlc0xm6opI7gLCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <p className="text-[1rem]">Puan Ver</p>
                <p className="text-[1rem]">
                  Favoriye Ekle <span>Icon</span>
                </p>
              </div>
              <p>Yıldız puanlama sistemi * * * * * </p>
              <p className="text-[1rem]">3.0</p>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <p className="text2 text-[gray]">Filmin Türü</p>
                  <p className="text3">Komedi</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text2 text-[gray]">Yönetme</p>
                  <p className="text3">Aykut Taşkan</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text2 text-[gray]">Görüntü Yönetmen</p>
                  <p className="text3">Cengizhan Durmaz</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text2 text-[gray]">Senaryo</p>
                  <p className="text3">Yazı İşleri</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text2 text-[gray]">Oyuncular</p>
                  <p className="text3">
                    Cemal Hünal, Yılmaz Gruda, M.Fatih Özkan
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <p className="text2 text-[gray]">Vizyon Tarihi</p>
                  <p className="text3">11 Ağustos 2023</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text2 text-[gray]">Dağıtım</p>
                  <p className="text3">Dada Vision</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text2 text-[gray]">Stüdyo</p>
                  <p className="text3">Dada Yapım</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-3">
                <h4 className="text-[0.75rem] font-bold">Seyirci</h4>
                <div className="flex gap-3">
                  <div>
                    <p className="text-[0.75rem] font-bold">Hafta Sonu</p>
                    <p className="text-[0.875rem] font-medium">83.884</p>
                  </div>
                  <div>
                    <p className="text-[0.75rem] font-bold">Toplam</p>
                    <p className="text-[0.875rem] font-medium text-green">
                      1.369.841
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="text-[0.75rem] font-bold">Hasılat</h4>
                <div className="flex gap-3">
                  <div>
                    <p className="text-[0.75rem] font-bold">Hafta Sonu</p>
                    <p className="text-[0.875rem] font-medium">10.310.618</p>
                  </div>
                  <div>
                    <p className="text-[0.75rem] font-bold">Toplam</p>
                    <p className="text-[0.875rem] font-medium text-green">
                      149.385.779
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Info Card */}
          <div className="md:flex mt-10 gap-4">
            <div className="max-w-[23rem] w-full">
              <Image
                alt=""
                width={100}
                height={100}
                className="w-full h-full"
                src="https://s3-alpha-sig.figma.com/img/5bc3/6407/c29aa8bacdf307a22bf3bb359996e53b?Expires=1698624000&Signature=mUQcqDvgwLzN3K2KP2FgG2QsB9gACe~0K1dSV~qmmy-mvBzDuYELRn2wMENf7YOblV5qD0SwGIFvHrqBdKQVPcv437odgt96DqmqaEaaOQeW3UZ~Jlt-AhLAKBPC18pxrfpJfClWzkWhULT7LQjnNGctshgLpDq2UORbY75BWVgXvO7~DXw-pMLaLneiuO4bi7XpCt5flJEpW1s1BsePSoJcBaPxP0IumE7NUla0GTXiSTbUlcLVZ7CaEZ-wRgOVwX8mDRFN1hRHQ-BRZgU3ZL5-gAy~n8Gr4JOR1vH3s~B8hRsNW~tlrU1gujeQRPoUog1i~Rrvlc0xm6opI7gLCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>

            <div className="flex flex-col gap-[3.12rem]">
              <div className="flex flex-col gap-4">
                <h2 className="text-[2.5rem] font-semibold">Yanlış Anlama</h2>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-4 max-w-[22.75rem]">
                    <div className="flex flex-col gap-3">
                      <p className="text2 text-[gray]">Filmin Türü</p>
                      <p className="text3">Komedi</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text2 text-[gray]">Yönetme</p>
                      <p className="text3">Aykut Taşkan</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text2 text-[gray]">Görüntü Yönetmen</p>
                      <p className="text3">Cengizhan Durmaz</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text2 text-[gray]">Senaryo</p>
                      <p className="text3">Yazı İşleri</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text2 text-[gray]">Oyuncular</p>
                      <p className="text3">
                        Cemal Hünal, Yılmaz Gruda, M.Fatih Özkan
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                      <p className="text2 text-[gray]">Vizyon Tarihi</p>
                      <p className="text3">11 Ağustos 2023</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text2 text-[gray]">Dağıtım</p>
                      <p className="text3">Dada Vision</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text2 text-[gray]">Stüdyo</p>
                      <p className="text3">Dada Yapım</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex flex-col gap-3">
                  <h4 className="text-[0.75rem] font-bold">Seyirci</h4>
                  <div className="flex gap-3">
                    <div>
                      <p className="text-[0.75rem] font-bold">Hafta Sonu</p>
                      <p className="text-[0.875rem] font-medium">83.884</p>
                    </div>
                    <div>
                      <p className="text-[0.75rem] font-bold">Toplam</p>
                      <p className="text-[0.875rem] font-medium text-green">
                        1.369.841
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-[0.75rem] font-bold">Hasılat</h4>
                  <div className="flex gap-3">
                    <div>
                      <p className="text-[0.75rem] font-bold">Hafta Sonu</p>
                      <p className="text-[0.875rem] font-medium">10.310.618</p>
                    </div>
                    <div>
                      <p className="text-[0.75rem] font-bold">Toplam</p>
                      <p className="text-[0.875rem] font-medium text-green">
                        149.385.779
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[1rem] text-end">
                Favoriye Ekle <span>Icon</span>
              </p>
              <p className="text-[1rem] text-end mt-[1.62rem]">Puan Ver</p>
              <p className="text-end"> * * * * * </p>
              <p className="text-[1rem] text-end">3.0</p>
            </div>
          </div>

          {/* Fin Desktop */}
          <div className="flex flex-col gap-[1.3rem]">
            <h2 className="mt-[1.5rem] text-[1.5rem] md:text-[2rem] font-semibold text-[#FAB64E]">
              Filmin Konusu & Detaylar
            </h2>
            <h4 className="text-[0.875rem] font-semibold">Komedi</h4>
            <p className="text-[0.75rem]">
              Komedi Film, yemek yapma yetisini kaybettiğini düşünen bir şefin,
              Türkiye'den Azerbaycan'a uzanan, yanlış anlamalarla bezeli
              hikâyesini anlatıyor. Ününe fazlasıyla düşkün Şef Ceyhun, onu
              çocuk yaşta yanına alıp bildiklerini öğreten Ahmet Usta ve onların
              yanından hiç ayrılmayan Fazıl, her şeye yeniden başlamak için
              Bakü’ye giderler. Azerbaycan’ın en eski restoranında annesinin
              mirasını devam ettiren Aydan Şef, Ahmet Usta’nın yardımıyla
              annesinin tarifini bulmaya çalışırken, Ceyhun Şef, Azerbaycan’ın
              geleneksel lezzetlerini keşfederek yepyeni bir aşçılık yolculuğuna
              çıkar.
            </p>
          </div>

          <div className="mt-[2.5rem]">
            <h2 className=" text-[1.5rem] md:text-[2rem] font-semibold text-[#FAB64E]">
              Filmin Konusu & Detaylar
            </h2>
            <div className="flex flex-wrap gap-2 mt-6">
              {filmKadro.map((kadro) => (
                <div className="flex flex-col gap-4">
                  <div className="w-[10rem]">
                    <Image
                      className="w-full h-full rounded-lg"
                      alt="a"
                      width={100}
                      height={100}
                      src={kadro.src}
                    />
                  </div>
                  <div className="flex flex-col gap-1 leading-4">
                    <p className="text-[#FAB64E] text-[0.875rem] font-semibold">
                      Oyuncu
                    </p>
                    <p className="text-[0.875rem] font-semibold">
                      {kadro.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BeymenAd2 />

      <Haberler />

      <Sponsor />
    </div>
  );
};

export default page;
