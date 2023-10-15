import React from "react";
import Slider from "../components/Carousel/Carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieGallery from "../components/MovieGallery/MovieGallery";
import BeymenAd from "../elements/Beymen/BeymenAd";
import BeymenAd2 from "../elements/Beymen/BeymenAd2";
import FFragmanlar from "../components/FFragmanlar/FFragmanlar";
import Sponsor from "../components/Sponsor/Sponsor";

const page = () => {
  return (
    <div>
      <MovieGallery sectionHeader="Vizyondakiler" />
      <BeymenAd />
      <MovieGallery sectionHeader="Gelecek Program" />
      <BeymenAd2 />
      <FFragmanlar />
      <Sponsor />
    </div>
  );
};

export default page;
