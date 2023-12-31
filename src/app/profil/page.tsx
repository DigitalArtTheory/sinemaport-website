import Image from "next/image";
import Header from "../components/Header/Header";
import Bilgiler from "../components/Bilgiler/Bilgiler";
import FavoriFilmler from "../components/FavoriFilmler/FavoriFilmler";
import Sponsor from "../components/Sponsor/Sponsor";

export default function Profil() {
  return (
    <div className="px-[1.5rem] sm:px-[6rem] md:px-[9.5rem]">
      <div className="layout">
        <Bilgiler />
        <FavoriFilmler />
        <Sponsor />
      </div>
    </div>
  );
}
