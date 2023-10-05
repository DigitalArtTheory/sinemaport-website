"use client";
import Image from "next/image";
import addData from "@/app/firebase/firestore/addData";
import LoginForm from "./components/LoginForm/LoginForm";
import Carousel from "./components/Carousel/Carousel";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import FilmCard from "./components/FilmCard/FilmCard";
import NewsCard from "./components/News/NewsCard";
import Rekorlar from "./components/Rekorlar/Rekorlar";
import Roportaj from "./components/Roportajlar/Roportaj";
import Trailer from "./components/Trailer/Trailer";
import MainHeader from "./elements/MainHeader/MainHeader";
import HasılatSeyirci from "./components/HasılatSeyirci/HasılatSeyirci";
import Haberler from "./components/Haberler/Haberler";
import Yazarlar from "./components/Yazarlar/Yazarlar";

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
    <div className="">
      <Carousel />
      <HasılatSeyirci />
      <Haberler />
      <Rekorlar />
      <div className="bg-[#292D32]">
        <Roportaj />
      </div>
      <div className="bg-[#606367]">
        <Yazarlar />
      </div>
      <br />
      <Trailer />
    </div>
  );
}
