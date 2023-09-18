"use client";
import Image from "next/image";
import addData from "@/app/firebase/firestore/addData";
import Footer from "./components/Footer/Footer";

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
      <div>Hello World</div>
      <Footer />
    </div>
  );
}
