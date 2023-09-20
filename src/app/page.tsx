"use client";
import Image from "next/image";
import addData from "@/app/firebase/firestore/addData";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import Carousel from "./components/Carousel/Carousel";

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
      <LoginForm />
      <div>Hello World</div>
      <Footer />
    </div>
  );
}
