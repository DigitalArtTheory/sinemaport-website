import Image from "next/image";
import Header from "../components/Header/Header";
import SeanslarSection from "../components/SeanslarSection/SeanslarSection";
import BeymenAd2 from "../elements/Beymen/BeymenAd2";
import Haberler from "../components/Haberler/Haberler";
import Sponsor from "../components/Sponsor/Sponsor";

export default function Seanslar() {
  return (
    <div>
      <SeanslarSection />
      <BeymenAd2 />
      <Haberler />
      <Sponsor />
    </div>
  );
}
