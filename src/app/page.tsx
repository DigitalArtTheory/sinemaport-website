"use client";
import Image from "next/image";
import addData from "@/app/firebase/firestore/addData";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import Carousel from "./components/Carousel/Carousel";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import FilmCard from "./components/FilmCard/FilmCard";
import NewsCard from "./components/News/NewsCard";
import Rekorlar from "./components/Rekorlar/Rekorlar";
import Roportaj from "./components/Roportajlar/Roportaj";
import Compare from "./components/Compare/Compare";
import Trailer from "./components/Trailer/Trailer";
import Search from "./elements/Search/Search";

export default function Home() {
  const handleForm = async () => {
    const data = {
      name: "John snow",
      house: "Stark",
    };

    const { result, error } = await addData("users", "user-id", data);

    if (error) {
      return console.log(error);
    }
  };

  return (
    <div className="px-[2.5rem]">
      <Header />
      <Search />
      <Carousel />
      <br />
      Hasılat & Seyirci
      <hr />
      <br />
      <div className="flex mx-auto flex-wrap gap-[0.5rem] max-w-[20.5rem] sm:max-w-[71.25rem]">
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
      </div>
      Haberler
      <hr />
      <div className="max-w-[20.5rem] md:max-w-[71rem] mx-auto">
        <div className="w-[20.375rem]">
          <Image
            src="/imgs/haberImg.png"
            alt="haberimg"
            height={100}
            width={400}
            className=""
          />
        </div>
        <div className="mt-[0.75rem]">
          <div className="flex flex-col gap-[1rem]">
            <h2>
              1 Eylül'de sinemalarda gösterime girecek Ölümüne Aşk filminden
              fragman yayınlandı
            </h2>
            <p>
              Okan Ege Ergüven'in yönetmen koltuğunda oturduğu Ölümüne Aşk'tan
              fragman yayınlandı. Film, 1 Eylül'de sinemalarda gösterime
              girecek.
            </p>
          </div>
          <div className="flex flex-col mt-[0.37rem] gap-[0.25rem]">
            <p>7 Ağustos 2023 19:23</p>
            <p>Haberi Paylaş</p>
          </div>
        </div>
        <div className="flex flex-col gap-[0.75rem]">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
      <br />
      Seyirci Rekorları
      <hr />
      <Rekorlar />
      <br />
      <div className="bg-[#292D32]">
        <Roportaj />
      </div>
      <br />
      Karşılaştır
      <hr />
      <br />
      <div className="flex mx-auto flex-wrap gap-[0.5rem] max-w-[20.5rem] sm:max-w-[71.25rem] justify-center">
        <div className="flex flex-col">
          <div className="flex">
            <img src="/icons/search-normal.png" />
            <p>Değiştir</p>
          </div>
          <br />
          <Compare />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <img src="/icons/search-normal.png" />
            <p>Değiştir</p>
          </div>
          <br />
          <Compare />
        </div>
      </div>
      <br />
      <Trailer />
      <br />
      <RegisterForm />
      <br />
      <LoginForm />
      <br />
      <Footer />
    </div>
  );
}
