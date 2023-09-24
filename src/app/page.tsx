"use client";
import Image from "next/image";
import addData from "@/app/firebase/firestore/addData";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import Carousel from "./components/Carousel/Carousel";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import FilmCard from "./components/FilmCard/FilmCard";

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
    <div>
      <Header />
      <Carousel />
      <br />
      <div className="flex mx-auto flex-wrap gap-[0.5rem] max-w-[20.5rem] sm:max-w-[71.25rem]">
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
      </div>
      <br />
      <RegisterForm />
      <br />
      <LoginForm />
      <br />
      <Footer />
    </div>
  );
}
