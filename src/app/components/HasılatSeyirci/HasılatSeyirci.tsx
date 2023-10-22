import React from "react";
import FilmCard from "../FilmCard/FilmCard";
import MainHeader from "@/app/elements/MainHeader/MainHeader";

const HasılatSeyirci = () => {
  return (
    <div className="pt-[3.25rem] pb-[0.75rem] sm:py-[2rem] px-[1.5rem] sm:px-[6rem] md:px-[9.5rem]">
      <div className="layout ">
        <MainHeader color="green" header="Hasılat & Seyirci" />
        {/* <div className="flex mx-auto flex-wrap gap-[0.5rem]"> */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[0.5rem] md:gap-4 mt-[0.75rem] sm:mt-[1.5rem]">
          <FilmCard
            nameNum="1. Oppenheimer"
            source="https://s3-alpha-sig.figma.com/img/7071/06e4/a604af2d2c6b4c05df1155f4e36007e7?Expires=1698624000&Signature=gjje1hIMp6bGiQN3lgMjWMIdKf~n3Ox5n~cvPk2PYcoAiOt3v-vfWC2M7mtjtuJg9~My1Wh2zX6QMpeCJ0lBngoS60B~XA~4x8N9WeSnR5XofGhgmoiq6-mF0MiFwk9FrvHZP7GTCnTo6WABA71tFFp7taXyr5W5julv6boHdSsuKgpno2aK0atQOz5nQqGT4wXvLafYgaswRtPUjTr8kkQHji76wDz8IJInbtXO8dWiVAXeyKLcvQ-I7uTzIzyMF0ovQxCDB87Ytt0OL~LQ2RDp9ekk2uNJlIxT3QPnKo~i6b44MVG30-zoqg7TH8bM4V8ObWpIBSwwUAHd7V7ilw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <FilmCard
            nameNum="3. LIFE PI"
            source="https://s3-alpha-sig.figma.com/img/fef6/86cd/b3ef0dc9cdbe642bce3c719ed05a8d0d?Expires=1698624000&Signature=etGXC~Xwb8syh-OacUD-xowo-KtsH6uzEUYD4dbm0e~Yho2kGZLC66VTRkGnRwDFquG-1a-snT1zMBriQTCsPyPgMCHHAAKpxmWlYRfp4wVjDcm3leZgzpLnncyGwNo-aqIY0h1cgbJ2yiAhXISqd9s02eCkJT1EWhx1XAtJYC3R9KpJBdLpGYwKN0o0X-xuYGsUHL~ZEdMvDZL6aN~8XyntrdRHkfGZrakRdaay3d3Dh28wS0C28ABXifJf6ei7CcB-OMZfGM6s8GGtM5VcLN2OZF1s1vRwst0MoedN7rhsoM93dvp43hNU45P-zOkIHVI738QOMM2n0EddAKmovQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <FilmCard
            nameNum="5. Mission Impossible"
            source="https://s3-alpha-sig.figma.com/img/6a90/5793/72ebb9174e135d3dc6a065c2ff1e9157?Expires=1698624000&Signature=BRJbG1m6pNml6QZ3NsNiaKpfphFRqawTh0AIjCo75OdUToQ1Gq7Bf0MXzrIcChmvftpNHO9SkppcxixZiI45wPRW9TfJjn2esVYW0d8gPpWrrp35j8uNY-1-YFCvVkNkAdohhy1J3yURieX3mPyhGaej7XUNWG7LAFU~9RXTMblSlqF1CGDe~EJr054Fg6f8tVYGmr~cU8CkEM5r7BdgEuJAYqKvqnDreNvUa1piBxhPRmGeRaCzSsJJQ8sXhbBETjhTR0Kug00pL8KRUIlVTyvkttNsZALLxhkJFMogiaM3QXSXWhD~bmotbNoDsGAQad7CCaE0k-Z~qBKjhhsOKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <FilmCard
            nameNum="2. Yanlış Anlama"
            source="https://s3-alpha-sig.figma.com/img/a93f/06fa/bb99d26861e7383a3b4d7777a02253c8?Expires=1698624000&Signature=E0xR-ke~Hu~ULXJu1vwB7m~QmjVHjaqlrLWE9Xdcwnqh68eOc5o3oqylje2gkkSPiEtUFYVs~AQ~12DLWHtSqQemUTF2Qo3XU3DDnixCrVKDWAHa9zpJCpBy~nSegaB-ztPHLStPrlbg705rSZyIBoEWG2S9TbiuA29MtC7BMwpi4vOdfARB6dSBYKvCz7LAGijxmC6nnGM6x3OpmoByp0XGVZtyuNriAKjaC3UGTERMpmuxlZk39rbkCWBTaISF8coEJfrENlRVERYv60u8odLTC9AHgcXn~Y71FpIqpVnilQx42cQ48NSacrY7AlT1VzeM3fm9EC9~4ArQeE7nKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <FilmCard
            nameNum="4. Geri Sayım"
            source="https://s3-alpha-sig.figma.com/img/4cc5/03df/e64f96f314de8e480055c8c814dd268e?Expires=1698624000&Signature=FwObwc3k4D6bGEuN8MGcpaEe6S7xG-iV9gQED48xtZF2P-HuE8EVdx7olJ6VfhIphjeRPiks2-D3fVZwxJYBwYhjlD5VEQKuPrUbT~hsvTMuKdI8r1dPOQBzWaVbHY1aUUJO~7EyKSxAsEWzbd-XweXm1-svEQDi1XZuS8QqfD0XKRqSZxxsmy2KEASUYe62yF2z6ZmebOszWzuKuKivjj7idgCAvUGlfyidXk30L78xXRNn8lxevREFS3HVM2Yq3ojNjzzzbj3QAl5L0sEeUzbl6c3Nxnc~r3r5kybW4fZbSWLhnPDpYex8KXgKITh~AVBzuydMGPj0v58AJ-5QDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <FilmCard
            nameNum="6. Hareket Sekiz"
            source="https://s3-alpha-sig.figma.com/img/f35d/d819/6015d9b63e1d48c37778df64de0d0e36?Expires=1698624000&Signature=oA67mBZMMXhdDM9M1xxgSbhunO~49tPPZr2MpPvN8Qj31lX9ZoYZfR2eKkEiaAFwpQC89Vknhn~TMFBIl~FUYEwjW6d7Mct9EsrsbMySHdUl~VFQjjEFEJ2MUTJAUWSaATNVtSPNmC8fSSugf1eqdOai8WFQOvMWi8-px3zH4lBsYwUi9SCOLssHRai8IUevLUo8mkGHdGjdy5aHm1aC6VvQJu0oNqoCUavIkmXS-XeSEo1kaNPJ7~TaGIUCNHk1050XjZ1cQplM5cYpHjAARXP0IDy-AbF5RoeSWw3VE~1nhlYk9pBh4BlGcWc-kYS6xhA8cjy--VIGmAFkGT4OlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
        </div>
      </div>
    </div>
  );
};

export default HasılatSeyirci;
