"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./SeanslarSection.module.css";
import Link from "next/link";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
    // partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
    // partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 767, min: 320 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    // partialVisibilityGutter: 10,
  },
};

const SeanslarSection = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const cities = ["ISTANBUL", "ANKARA", "IZMIR"];
  const districts = ["BAHÇELİEVLER", "BEYOĞLU", "ŞIŞLI"];

  const sinemaSalon = [
    {
      name: "Bahçelievler Metroport Cine Vip",
      address: "Bahçelievler, D-100 Yanyolu, Bahçelievler/İstanbul",
      films: [
        {
          movieName: "Yanlış Anlama",
          movieType: "Komedi",
          movieImage:
            "https://s3-alpha-sig.figma.com/img/a93f/06fa/bb99d26861e7383a3b4d7777a02253c8?Expires=1698019200&Signature=WIzAlziVjUbfMp8jJCayT5fZMtU1d21-S~C-jBhyBdwyTF~5DAFixSEQWTn3wXZeii6wKpnrJCJjTEzyfhohBE7e33gHLsO14DgAdFrGxmakAuJSOvNuAve7kve2D5eGstYUhcIKH21eUxbRzWOA5YVNomEZDLp4ZDKfbDB29eEi3rDSgjX~NkEeYocFTzJKxh4tD0YHdcloRb-CYb4vOgKzP83KE-n8PkM5kO4AWUR2YLWDJrvVQFgsBjgU0XNmY80F-NMgpWQBcarr6VEZN1VVMG237zc-LQ8Ppx2gDTFgqrhHG4qlcvHxsCb7hM9e~l5dOelYncqtYY1OWlkNMg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          movieName: "Geri Sayım",
          movieType: "Aksiyon",
          movieImage:
            "https://s3-alpha-sig.figma.com/img/4cc5/03df/e64f96f314de8e480055c8c814dd268e?Expires=1698019200&Signature=pq2s8jbgiMIex94GZpLwkBYY90NeRGlFckmw1ds55RorzJnuZNq34joVtmMRM19jrl5M88uaBr~F~nZKT8w2kCVmwkx4I4JBXkMh-i0Oy0VDqXrKG43fUge367CwrKCt2QABvVMVf~2w9t7sRqwUnUFL8DSxvJl52M1Mo~efZJVXm-agKW50OecDSEmP4Fpt8~EFWOAcnUzjHwWheWzvTRuQLsjR6tBvGm1ZEQsklLKRF0Fd8D1p~XXEz8dbY7xsGtY3jXX1rfIVzlzOB8aQENV3bnLI7rjbXXfqNCQWtBPtH~c-HLA8YAfjzky7q1x17BCK8RLYzPEJriBfAcQw9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          movieName: "Hareket Sekiz",
          movieType: "Aksiyon",
          movieImage:
            "https://s3-alpha-sig.figma.com/img/f35d/d819/6015d9b63e1d48c37778df64de0d0e36?Expires=1698019200&Signature=K~HIqiUVEJfxBft4ptIrdjWAWCjKFJHYjOMgjh8rA6rzNcRfiF0LzIkHzYMSufgx4wzCBLhKgGArmybdLHihuLyv3vhqilO1HNTXNDcb4170pyXAfDzu3SLoze0RSVMv~Id4jPptIG1L-VaRImfOzpsCTtaShG52mcNycH1rQxoHoVYMhdIDLm96NOYRnwJoHqVEtrkfNIzvnTvchKyk-oW~j~qUYoOGB8hztvFKwN0Nj3cRvXzKAvzGml~bDTTTF9yVP2Ov9YdJaMQ4d8WODwTrWZ-apSaLy7E9b1H6IXw6GOkC2b5Gadtuuby4esKMJCugs3I0Je4tBN3aYrnnPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          movieName: "Yılmaz Gruda",
          movieType: "Belgelsel",
          movieImage:
            "https://s3-alpha-sig.figma.com/img/7bb0/2d52/90481437b3b211e8365e7b0b8a4af3a2?Expires=1698019200&Signature=WSHiK~cvWivkplaCdLb95ICU86NItChIzuffV4yiUR~ONB7ieZ7f~J7NZUJnkNdm-kh5hf5DW6hb1Hc3oPMp~3Bc7ERpRa8D-eQuuWx0Yt6hkZFuDZr5NrTrsC4~iAsLsMLJc~f-sRTvv4rkyJR8xwk71iRE9n87GT7fucOusSIk1KVvbtGPjxXlkwjJN8SJ2yoxVV2Td2U8m-CzEnZSLcr9OeQM3yAm5IhQ4jrxyswpPhFBVLhSHso5wel-uPS0z7hYqdlKMU6Vx72iSLIwYCIXuoF1O6Bcucfr-7SwOw86mBWC9iui5UfLaFwvS-X00r7UzYgx5-JBPvy0brvvrA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          movieName: "Örümcek Adam",
          movieType: "Bilimkurgu",
          movieImage:
            "https://s3-alpha-sig.figma.com/img/7514/060b/cb14624670fc867e67ab500d7ee18e3e?Expires=1698019200&Signature=W5ApVsvEMVFIMWIFEg6Y34t3ToYjPJdub-ldgNN-3gz385V1v1mp0xvU1yFiTvDxFZDYqQgrbO3AN8rbTgggy~IXzvwAQFkraebAqf4A6PHD5WzJIVHDc~vmWuROimuqObkRmU7imbOAB6e6UsNqjh5uV0JQcx1SOl9jM3AC4g4SJBXAHDYzGMshG8zoj4wB-bXVBr3e2hUZqoii53MrF0v9yB7F-catWDKYvQMcfvh3OTmbVeBoq5WYEz6Hg33e97KKB8QxS9ij1XytiIc2hmRD7xWnpbK0l9hUx80saKQ~tOhPJZa4AqOUbW6HhxA19WnOFRxwt9D~iLIejkllyQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          movieName: "Life Pi",
          movieType: "Dram",
          movieImage:
            "https://s3-alpha-sig.figma.com/img/fef6/86cd/b3ef0dc9cdbe642bce3c719ed05a8d0d?Expires=1698019200&Signature=aka1H0gmNJOR5H5ASum-MmnWkjmdxkkTy8saxIgLWjlRODSB6RRl9sEQma71ZJlztHfPpsZ8omt7JlaQ9J79VtiFj4xtmxG13JFYnx7w65M36GNtbENaB543FIOwxG0gHHg5NuSzLnUuYBz3yBIj2XemxVj0sLOFQINvKEXIyO5kLYN6O~p2SiUinCeO57rfK1Sy~xcCfopJYCDCW7Sz1nOfJPqZZbtQn9UcOLii64FBk~AnVugvhB18-~XTllgfyijOB~Ypyf5fUscHsyfnjFhwuhYRZKxBUipnp~1VOodSWP-gMjQ4c2kogd6AUNVAuylIBwJA4gxu61X54wmHZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
      ],
    },
    {
      name: "Starcity Site",
      address: "Köyaltı Mevkii Merkez Mah. Kavak Sok. No:2 Yenibosna/İstanbul",
      films: [
        {
          movieName: "Geri Sayım",
          movieType: "Aksiyon",
          movieImage:
            "https://s3-alpha-sig.figma.com/img/4cc5/03df/e64f96f314de8e480055c8c814dd268e?Expires=1698019200&Signature=pq2s8jbgiMIex94GZpLwkBYY90NeRGlFckmw1ds55RorzJnuZNq34joVtmMRM19jrl5M88uaBr~F~nZKT8w2kCVmwkx4I4JBXkMh-i0Oy0VDqXrKG43fUge367CwrKCt2QABvVMVf~2w9t7sRqwUnUFL8DSxvJl52M1Mo~efZJVXm-agKW50OecDSEmP4Fpt8~EFWOAcnUzjHwWheWzvTRuQLsjR6tBvGm1ZEQsklLKRF0Fd8D1p~XXEz8dbY7xsGtY3jXX1rfIVzlzOB8aQENV3bnLI7rjbXXfqNCQWtBPtH~c-HLA8YAfjzky7q1x17BCK8RLYzPEJriBfAcQw9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          movieName: "Hareket Sekiz",
          movieType: "Aksiyon",
          movieImage:
            "https://s3-alpha-sig.figma.com/img/f35d/d819/6015d9b63e1d48c37778df64de0d0e36?Expires=1698019200&Signature=K~HIqiUVEJfxBft4ptIrdjWAWCjKFJHYjOMgjh8rA6rzNcRfiF0LzIkHzYMSufgx4wzCBLhKgGArmybdLHihuLyv3vhqilO1HNTXNDcb4170pyXAfDzu3SLoze0RSVMv~Id4jPptIG1L-VaRImfOzpsCTtaShG52mcNycH1rQxoHoVYMhdIDLm96NOYRnwJoHqVEtrkfNIzvnTvchKyk-oW~j~qUYoOGB8hztvFKwN0Nj3cRvXzKAvzGml~bDTTTF9yVP2Ov9YdJaMQ4d8WODwTrWZ-apSaLy7E9b1H6IXw6GOkC2b5Gadtuuby4esKMJCugs3I0Je4tBN3aYrnnPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          movieName: "Yılmaz Gruda",
          movieType: "Belgelsel",
          movieImage:
            "https://s3-alpha-sig.figma.com/img/7bb0/2d52/90481437b3b211e8365e7b0b8a4af3a2?Expires=1698019200&Signature=WSHiK~cvWivkplaCdLb95ICU86NItChIzuffV4yiUR~ONB7ieZ7f~J7NZUJnkNdm-kh5hf5DW6hb1Hc3oPMp~3Bc7ERpRa8D-eQuuWx0Yt6hkZFuDZr5NrTrsC4~iAsLsMLJc~f-sRTvv4rkyJR8xwk71iRE9n87GT7fucOusSIk1KVvbtGPjxXlkwjJN8SJ2yoxVV2Td2U8m-CzEnZSLcr9OeQM3yAm5IhQ4jrxyswpPhFBVLhSHso5wel-uPS0z7hYqdlKMU6Vx72iSLIwYCIXuoF1O6Bcucfr-7SwOw86mBWC9iui5UfLaFwvS-X00r7UzYgx5-JBPvy0brvvrA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          movieName: "Örümcek Adam",
          movieType: "Bilimkurgu",
          movieImage:
            "https://s3-alpha-sig.figma.com/img/7514/060b/cb14624670fc867e67ab500d7ee18e3e?Expires=1698019200&Signature=W5ApVsvEMVFIMWIFEg6Y34t3ToYjPJdub-ldgNN-3gz385V1v1mp0xvU1yFiTvDxFZDYqQgrbO3AN8rbTgggy~IXzvwAQFkraebAqf4A6PHD5WzJIVHDc~vmWuROimuqObkRmU7imbOAB6e6UsNqjh5uV0JQcx1SOl9jM3AC4g4SJBXAHDYzGMshG8zoj4wB-bXVBr3e2hUZqoii53MrF0v9yB7F-catWDKYvQMcfvh3OTmbVeBoq5WYEz6Hg33e97KKB8QxS9ij1XytiIc2hmRD7xWnpbK0l9hUx80saKQ~tOhPJZa4AqOUbW6HhxA19WnOFRxwt9D~iLIejkllyQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          movieName: "Life Pi",
          movieType: "Dram",
          movieImage:
            "https://s3-alpha-sig.figma.com/img/fef6/86cd/b3ef0dc9cdbe642bce3c719ed05a8d0d?Expires=1698019200&Signature=aka1H0gmNJOR5H5ASum-MmnWkjmdxkkTy8saxIgLWjlRODSB6RRl9sEQma71ZJlztHfPpsZ8omt7JlaQ9J79VtiFj4xtmxG13JFYnx7w65M36GNtbENaB543FIOwxG0gHHg5NuSzLnUuYBz3yBIj2XemxVj0sLOFQINvKEXIyO5kLYN6O~p2SiUinCeO57rfK1Sy~xcCfopJYCDCW7Sz1nOfJPqZZbtQn9UcOLii64FBk~AnVugvhB18-~XTllgfyijOB~Ypyf5fUscHsyfnjFhwuhYRZKxBUipnp~1VOodSWP-gMjQ4c2kogd6AUNVAuylIBwJA4gxu61X54wmHZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
      ],
    },
    {
      name: "Airport Cinemas",
      address: "Londra Asfaltı Yan Yol Airport AVM K:4 Yenibosna/İstanbul",
      films: [
        {
          movieName: "Hareket Sekiz",
          movieType: "Aksiyon",
          movieImage:
            "https://s3-alpha-sig.figma.com/img/f35d/d819/6015d9b63e1d48c37778df64de0d0e36?Expires=1698019200&Signature=K~HIqiUVEJfxBft4ptIrdjWAWCjKFJHYjOMgjh8rA6rzNcRfiF0LzIkHzYMSufgx4wzCBLhKgGArmybdLHihuLyv3vhqilO1HNTXNDcb4170pyXAfDzu3SLoze0RSVMv~Id4jPptIG1L-VaRImfOzpsCTtaShG52mcNycH1rQxoHoVYMhdIDLm96NOYRnwJoHqVEtrkfNIzvnTvchKyk-oW~j~qUYoOGB8hztvFKwN0Nj3cRvXzKAvzGml~bDTTTF9yVP2Ov9YdJaMQ4d8WODwTrWZ-apSaLy7E9b1H6IXw6GOkC2b5Gadtuuby4esKMJCugs3I0Je4tBN3aYrnnPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          movieName: "Örümcek Adam",
          movieType: "Bilimkurgu",
          movieImage:
            "https://s3-alpha-sig.figma.com/img/7514/060b/cb14624670fc867e67ab500d7ee18e3e?Expires=1698019200&Signature=W5ApVsvEMVFIMWIFEg6Y34t3ToYjPJdub-ldgNN-3gz385V1v1mp0xvU1yFiTvDxFZDYqQgrbO3AN8rbTgggy~IXzvwAQFkraebAqf4A6PHD5WzJIVHDc~vmWuROimuqObkRmU7imbOAB6e6UsNqjh5uV0JQcx1SOl9jM3AC4g4SJBXAHDYzGMshG8zoj4wB-bXVBr3e2hUZqoii53MrF0v9yB7F-catWDKYvQMcfvh3OTmbVeBoq5WYEz6Hg33e97KKB8QxS9ij1XytiIc2hmRD7xWnpbK0l9hUx80saKQ~tOhPJZa4AqOUbW6HhxA19WnOFRxwt9D~iLIejkllyQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
      ],
    },
  ];

  // Generate the dates from today to +8 days
  const currentDate = new Date();
  const dates = Array.from({ length: 9 }).map((_, i) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + i);

    const dayName = new Intl.DateTimeFormat("tr-TR", {
      weekday: "long",
    }).format(newDate);

    const monthName = new Intl.DateTimeFormat("tr-TR", {
      month: "long",
    }).format(newDate);

    const formattedDate = new Intl.DateTimeFormat("tr-TR", {
      day: "2-digit",
    }).format(newDate);

    return {
      formattedDate,
      dayName,
      monthName,
    };
  });

  return (
    <div className="px-[1.5rem] sm:px-[6rem] md:px-[9.5rem] mt-[0.75rem] md:mt-[0.95rem]">
      <div className="layout">
        <h1 className="text-[1.5rem] md:text-[2rem]">Seanslar</h1>
        <p className="text-[0.75rem] mt-2">
          Sinema salonlarında gösterimde olan tüm filmlerin seans bilgileri
        </p>

        <div className="flex flex-col md:flex-row mt-3 md:mt-6 gap-2 md:gap-[1.5rem]">
          {/* İl select */}
          <div
            className={`${styles.styledSelect} flex items-center max-w-[24rem] w-full justify-between border border-[#D82121] px-3 md:px-6 py-2 rounded-full`}
          >
            <select
              id="city"
              name="city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="flex justify-center items-center bg-transparent w-full h-full outline-none"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  İL: {city}
                </option>
              ))}
            </select>

            <div className="flex items-center justify-center border border-[#D82121] rounded-full">
              <svg
                className="w-4 h-4 text-[#D82121]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 26"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path className="" d="M5 12l5 5 5-5"></path>
              </svg>
            </div>
          </div>
          {/* İlçe select */}
          <div
            className={`${styles.styledSelect} flex items-center max-w-[24rem] w-full justify-between border border-[#D82121] px-3 md:px-6 py-2 rounded-full`}
          >
            <select
              id="city"
              name="city"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="flex justify-center items-center bg-transparent w-full h-full outline-none"
            >
              {districts.map((district) => (
                <option key={district} value={district}>
                  İLÇE: {district}
                </option>
              ))}
            </select>

            <div className="flex items-center justify-center border border-[#D82121] rounded-full">
              <svg
                className="w-4 h-4 text-[#D82121]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 26"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path className="" d="M5 12l5 5 5-5"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Dates for Mobile */}
        <div className="flex flex-wrap md:hidden mt-6">
          {dates.slice(0, 8).map((date) => (
            <button
              className="relative w-1/4"
              key={date.formattedDate}
              onClick={() => setSelectedDate(date.formattedDate)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="87"
                height="49"
                viewBox="0 0 181 101"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M85.8904 58.6377C85.7744 58.7458 85.6584 58.8538 85.5423 58.9618C91.0783 60.1005 100.307 61.4309 109.323 62.7305C115.933 63.6833 122.428 64.6196 127.269 65.4517C122.026 64.5088 114.856 63.38 107.697 62.2531C99.4082 60.9482 91.1356 59.6459 85.8904 58.6377ZM129.03 65.7634C128.893 65.5046 128.782 65.2005 128.693 64.857C128.317 63.7903 129.015 63.417 130.141 63.0437L130.141 62.9904C130.46 64.2567 130.778 65.2162 131.097 66.1616C130.466 66.0324 129.774 65.8996 129.03 65.7634ZM131.103 66.1806C130.472 66.0515 129.781 65.9166 129.037 65.7766C129.474 66.5933 130.171 66.953 131.268 66.6703C131.226 66.5457 131.184 66.4218 131.143 66.2979C131.129 66.2588 131.116 66.2197 131.103 66.1806ZM135.291 67.5236C135.518 67.3383 134.877 67.0692 133.577 66.7364C134.642 67.0287 135.253 67.2933 135.291 67.5236ZM42.5402 95.8963C43.8298 95.9376 45.2485 95.2734 46.4209 94.4259C45.1895 95.7272 43.888 97.0017 42.4998 98.2428C43.1435 98.4028 88.406 98.4562 88.9961 98.4562C91.322 98.6024 93.64 98.7502 95.9531 98.8977C107.137 99.6108 118.207 100.317 129.498 100.803C131.107 100.856 132.984 99.8428 134.272 98.7228C144.303 89.9764 154.174 81.2832 163.937 72.3235L163.884 72.3768C169.302 67.3636 174.773 62.1904 180.084 57.0172C180.002 56.8869 179.93 56.7566 179.859 56.6278C179.697 56.3349 179.54 56.0498 179.279 55.7905C172.121 47.9907 165.001 40.1908 157.875 32.3845C150.531 24.3382 143.18 16.2852 135.774 8.21836C134.808 7.20505 132.984 6.61841 131.536 6.51174C118.554 5.55177 105.787 4.80512 92.6975 4.05847C91.9574 4.01759 64.5634 4.35269 51.3262 4.55946C50.8122 4.01883 50.2975 3.47853 49.7822 2.93857C48.8166 1.92526 47.0463 1.39192 45.5443 1.33859C32.455 0.805271 19.5266 0.378615 6.33006 0.0052906C5.55882 -0.0373066 4.13734 0.192282 3.04967 0.367956C2.77557 0.412228 2.52267 0.453075 2.30671 0.48528C13.882 12.9186 25.4878 25.2912 37.1012 37.6717C40.8806 41.7009 44.6608 45.7309 48.4411 49.7641C44.3641 53.4973 40.3005 57.2439 36.2369 60.9905C32.1734 64.737 28.1098 68.4836 24.0328 72.2169C24.2474 72.3235 24.4619 72.4302 24.6765 72.5902C24.1401 72.6968 23.7646 72.7502 23.4427 72.7502C20.7621 75.2144 18.0815 77.6723 15.4031 80.1282C10.2557 84.8481 5.11624 89.5607 -4.12182e-06 94.2963C0.130867 94.3288 0.270606 94.3658 0.415158 94.404C0.981635 94.5537 1.62201 94.723 2.09214 94.723L2.9914 94.752C10.3893 94.9905 17.7591 95.2282 25.1454 95.4429C25.0322 94.7987 24.8876 94.1496 24.7405 93.4888C24.3939 91.9326 24.0328 90.3115 24.0328 88.5365C26.248 90.3193 26.9594 93.9066 25.2491 95.4459C27.4346 95.5093 29.6216 95.5708 31.8113 95.6296C32.0258 95.4163 32.1868 95.1496 32.4013 94.723L32.7769 95.0963C32.7769 95.2563 32.7232 95.4696 32.6159 95.683C33.9502 95.7043 35.2758 95.7429 36.5998 95.7814C38.576 95.8389 40.5485 95.8963 42.5402 95.8963ZM25.2491 95.4459C25.2199 95.4722 25.19 95.4979 25.1593 95.523C25.1547 95.4963 25.1501 95.4696 25.1454 95.4429C25.18 95.4439 25.2145 95.4449 25.2491 95.4459ZM21.0287 94.723C19.5803 95.0963 18.8293 94.403 18.4537 92.9097L18.4001 92.8564C18.0782 91.7897 18.7756 91.4164 19.9021 91.0431C20.2359 92.3704 20.5697 93.3607 20.9035 94.351C20.9452 94.4747 20.987 94.5985 21.0287 94.723ZM22.1552 88.1631C19.5803 87.7898 16.6298 85.9232 16.2543 84.1099L16.2543 84.0566C15.8788 83.6832 15.8788 82.9899 15.8788 81.4966C17.8043 83.1308 19.4831 84.1518 21.0952 85.1322C21.3245 85.2717 21.5525 85.4104 21.7797 85.5499C21.7797 85.9232 21.7797 86.2965 22.1552 86.6698L22.1552 88.1631ZM20.1637 79.8775C19.7728 79.1625 19.4245 78.5254 19.2048 77.8701C20.7068 76.7501 21.7797 76.3768 22.5307 77.8701C22.2831 78.6086 22.0355 79.1847 21.6803 80.0114C21.4967 80.4385 21.2845 80.9323 21.0287 81.55C20.7394 80.9305 20.4408 80.3844 20.1637 79.8775ZM34.8855 90.3643C34.9664 90.1437 35.0518 89.9111 35.1372 89.6564C35.6379 91.3631 35.3876 92.3408 34.3862 92.5897C34.3862 91.7244 34.6103 91.1138 34.8855 90.3643ZM34.4398 80.8567C34.0643 79.3634 33.6888 77.9234 32.9378 76.4301C34.7736 77.1145 34.6461 78.0578 34.5264 78.9437C34.4503 79.5074 34.3773 80.0478 34.8154 80.4833C34.4398 80.4833 34.4398 80.8567 34.4398 80.8567ZM34.2521 83.4166C34.1582 83.3233 34.0643 83.2299 34.0643 83.0433L34.118 83.0433C34.1433 82.9846 34.1665 82.9283 34.1887 82.8746C34.4491 82.2449 34.5578 81.9819 35.9419 82.6699C35.1909 83.0432 34.8154 83.4166 34.4399 83.7899L34.4398 83.7899C34.4398 83.6033 34.346 83.5099 34.2521 83.4166ZM38.8387 88.1631L39.5897 88.1631L39.5897 88.5365C39.2142 88.5365 39.0265 88.6298 38.8387 88.7231C38.6509 88.8165 38.4632 88.9098 38.0877 88.9098C37.7122 88.9098 37.7122 88.5365 37.7122 88.5365C38.0877 88.1631 38.4632 88.1631 38.8387 88.1631ZM41.6713 85.369C41.8536 85.2939 42.0091 85.2299 42.1647 85.2299C42.415 85.2299 42.5402 85.3543 42.5402 85.6032C42.2533 85.7458 42.076 85.8884 41.9246 86.0102C41.6796 86.2072 41.5023 86.3498 41.0381 86.3498C41.0381 86.3498 41.0381 85.9765 40.6626 85.6032C41.1026 85.6032 41.4136 85.4751 41.6713 85.369ZM78.3128 48.0096C78.0976 47.2704 78.4644 46.99 78.8077 46.7276C78.8101 46.7258 78.8125 46.724 78.8148 46.7221C78.7852 46.7993 78.7561 46.8754 78.7272 46.9508C78.592 47.304 78.4621 47.6433 78.3128 48.0096ZM145.017 62.2583C145.098 62.0377 145.184 61.8051 145.269 61.5504C145.734 63.257 145.484 64.2348 144.518 64.4836C144.518 63.6184 144.742 63.0077 145.017 62.2583ZM144.142 85.2831C143.606 85.2831 143.123 85.2831 142.319 85.5498L142.319 85.0165C142.587 84.7498 143.338 84.4832 143.874 84.4832C143.874 84.4832 144.142 84.7498 144.142 85.2831ZM131.107 94.0829C130.302 95.4162 129.551 96.6962 129.015 98.2428C128.226 96.4787 128.987 95.8952 129.696 95.3525C130.144 95.0092 130.57 94.6821 130.57 94.0829C130.839 94.3496 131.107 94.0829 131.107 94.0829ZM130.034 86.3498C129.551 85.8165 128.747 85.5498 128.747 85.5498L128.747 85.0165C129.035 85.1189 129.252 85.1426 129.441 85.1633C129.743 85.1963 129.972 85.2213 130.302 85.5498C130.302 85.5498 130.034 85.8165 130.034 86.3498ZM132.746 92.8711C132.131 93.1022 131.865 93.2023 131.375 91.7897L131.375 91.7363C132.18 92.003 132.663 92.003 133.199 92.003C133.065 92.1363 133.065 92.2696 133.065 92.403C133.065 92.5363 133.065 92.6696 132.931 92.803C132.866 92.8261 132.804 92.8492 132.746 92.8711ZM134.218 86.4031C133.736 86.4031 133.199 85.8698 133.199 85.8698L132.663 85.3365L132.931 85.0698C133.175 85.3399 133.365 85.4048 133.562 85.4724C133.754 85.5382 133.954 85.6066 134.218 85.8698C134.487 86.1365 134.218 86.4031 134.218 86.4031ZM134.916 44.7508C133.199 44.9997 132.341 44.3953 132.341 42.9375C132.594 43.4057 133.166 43.7279 133.857 44.1177C134.19 44.3052 134.55 44.5083 134.916 44.7508ZM137.584 87.0499C137.35 87.1631 137.105 87.2812 136.847 87.4164C137.741 85.8876 138.617 85.372 139.475 85.8698C138.875 86.4271 138.274 86.717 137.584 87.0499ZM142.319 68.5902C142.319 68.5902 141.943 68.5902 141.568 68.2169C141.943 67.8969 142.319 67.5236 142.694 66.7769L143.07 67.1502C143.07 67.4702 142.694 68.2169 142.319 68.5902ZM144.518 52.8038C144.142 51.3639 143.767 49.9239 143.016 48.4307L143.07 48.3774C144.866 49.0591 144.733 49.9978 144.609 50.8806C144.529 51.448 144.453 51.9924 144.893 52.4306C144.518 52.4306 144.518 52.8039 144.518 52.8039L144.518 52.8038ZM144.33 55.4172C144.236 55.3239 144.142 55.2306 144.142 55.0439C144.176 54.9766 144.207 54.9123 144.236 54.8517C144.53 54.2391 144.649 53.9912 145.966 54.6706C145.269 55.0439 144.893 55.4172 144.518 55.7905C144.518 55.6039 144.424 55.5106 144.33 55.4172ZM148.917 60.1638L149.668 60.1638L149.668 60.5371C149.292 60.5371 149.105 60.6304 148.917 60.7238C148.729 60.8171 148.541 60.9104 148.166 60.9104C147.79 60.9104 147.79 60.5371 147.79 60.5371C148.166 60.1638 148.541 60.1638 148.917 60.1638ZM151.749 57.3696C151.932 57.2946 152.087 57.2305 152.243 57.2305C152.493 57.2305 152.618 57.3549 152.618 57.6038C152.331 57.7464 152.154 57.889 152.003 58.0108C151.758 58.2079 151.58 58.3505 151.116 58.3505C151.116 58.3505 151.116 57.9772 150.741 57.6038C151.181 57.6038 151.492 57.4757 151.749 57.3696Z"
                  fill={
                    selectedDate === date.formattedDate ? "#D82121" : "#000"
                  }
                />
              </svg>
              <div className="absolute inset-0 flex flex-col justify-center">
                <p className="text-[0.625rem]">{date.dayName}</p>
                <p className="text-[1.25rem] font-normal leading-3">
                  {date.formattedDate}
                </p>
                <p className="text-[0.625rem]">{date.monthName}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Dates for Desktop */}
        <div className="hidden md:flex md:flex-wrap mt-8">
          {dates.slice(0, 6).map((date) => (
            <button
              className="relative"
              key={date.formattedDate}
              onClick={() => setSelectedDate(date.formattedDate)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="181"
                height="101"
                viewBox="0 0 181 101"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M85.8904 58.6377C85.7744 58.7458 85.6584 58.8538 85.5423 58.9618C91.0783 60.1005 100.307 61.4309 109.323 62.7305C115.933 63.6833 122.428 64.6196 127.269 65.4517C122.026 64.5088 114.856 63.38 107.697 62.2531C99.4082 60.9482 91.1356 59.6459 85.8904 58.6377ZM129.03 65.7634C128.893 65.5046 128.782 65.2005 128.693 64.857C128.317 63.7903 129.015 63.417 130.141 63.0437L130.141 62.9904C130.46 64.2567 130.778 65.2162 131.097 66.1616C130.466 66.0324 129.774 65.8996 129.03 65.7634ZM131.103 66.1806C130.472 66.0515 129.781 65.9166 129.037 65.7766C129.474 66.5933 130.171 66.953 131.268 66.6703C131.226 66.5457 131.184 66.4218 131.143 66.2979C131.129 66.2588 131.116 66.2197 131.103 66.1806ZM135.291 67.5236C135.518 67.3383 134.877 67.0692 133.577 66.7364C134.642 67.0287 135.253 67.2933 135.291 67.5236ZM42.5402 95.8963C43.8298 95.9376 45.2485 95.2734 46.4209 94.4259C45.1895 95.7272 43.888 97.0017 42.4998 98.2428C43.1435 98.4028 88.406 98.4562 88.9961 98.4562C91.322 98.6024 93.64 98.7502 95.9531 98.8977C107.137 99.6108 118.207 100.317 129.498 100.803C131.107 100.856 132.984 99.8428 134.272 98.7228C144.303 89.9764 154.174 81.2832 163.937 72.3235L163.884 72.3768C169.302 67.3636 174.773 62.1904 180.084 57.0172C180.002 56.8869 179.93 56.7566 179.859 56.6278C179.697 56.3349 179.54 56.0498 179.279 55.7905C172.121 47.9907 165.001 40.1908 157.875 32.3845C150.531 24.3382 143.18 16.2852 135.774 8.21836C134.808 7.20505 132.984 6.61841 131.536 6.51174C118.554 5.55177 105.787 4.80512 92.6975 4.05847C91.9574 4.01759 64.5634 4.35269 51.3262 4.55946C50.8122 4.01883 50.2975 3.47853 49.7822 2.93857C48.8166 1.92526 47.0463 1.39192 45.5443 1.33859C32.455 0.805271 19.5266 0.378615 6.33006 0.0052906C5.55882 -0.0373066 4.13734 0.192282 3.04967 0.367956C2.77557 0.412228 2.52267 0.453075 2.30671 0.48528C13.882 12.9186 25.4878 25.2912 37.1012 37.6717C40.8806 41.7009 44.6608 45.7309 48.4411 49.7641C44.3641 53.4973 40.3005 57.2439 36.2369 60.9905C32.1734 64.737 28.1098 68.4836 24.0328 72.2169C24.2474 72.3235 24.4619 72.4302 24.6765 72.5902C24.1401 72.6968 23.7646 72.7502 23.4427 72.7502C20.7621 75.2144 18.0815 77.6723 15.4031 80.1282C10.2557 84.8481 5.11624 89.5607 -4.12182e-06 94.2963C0.130867 94.3288 0.270606 94.3658 0.415158 94.404C0.981635 94.5537 1.62201 94.723 2.09214 94.723L2.9914 94.752C10.3893 94.9905 17.7591 95.2282 25.1454 95.4429C25.0322 94.7987 24.8876 94.1496 24.7405 93.4888C24.3939 91.9326 24.0328 90.3115 24.0328 88.5365C26.248 90.3193 26.9594 93.9066 25.2491 95.4459C27.4346 95.5093 29.6216 95.5708 31.8113 95.6296C32.0258 95.4163 32.1868 95.1496 32.4013 94.723L32.7769 95.0963C32.7769 95.2563 32.7232 95.4696 32.6159 95.683C33.9502 95.7043 35.2758 95.7429 36.5998 95.7814C38.576 95.8389 40.5485 95.8963 42.5402 95.8963ZM25.2491 95.4459C25.2199 95.4722 25.19 95.4979 25.1593 95.523C25.1547 95.4963 25.1501 95.4696 25.1454 95.4429C25.18 95.4439 25.2145 95.4449 25.2491 95.4459ZM21.0287 94.723C19.5803 95.0963 18.8293 94.403 18.4537 92.9097L18.4001 92.8564C18.0782 91.7897 18.7756 91.4164 19.9021 91.0431C20.2359 92.3704 20.5697 93.3607 20.9035 94.351C20.9452 94.4747 20.987 94.5985 21.0287 94.723ZM22.1552 88.1631C19.5803 87.7898 16.6298 85.9232 16.2543 84.1099L16.2543 84.0566C15.8788 83.6832 15.8788 82.9899 15.8788 81.4966C17.8043 83.1308 19.4831 84.1518 21.0952 85.1322C21.3245 85.2717 21.5525 85.4104 21.7797 85.5499C21.7797 85.9232 21.7797 86.2965 22.1552 86.6698L22.1552 88.1631ZM20.1637 79.8775C19.7728 79.1625 19.4245 78.5254 19.2048 77.8701C20.7068 76.7501 21.7797 76.3768 22.5307 77.8701C22.2831 78.6086 22.0355 79.1847 21.6803 80.0114C21.4967 80.4385 21.2845 80.9323 21.0287 81.55C20.7394 80.9305 20.4408 80.3844 20.1637 79.8775ZM34.8855 90.3643C34.9664 90.1437 35.0518 89.9111 35.1372 89.6564C35.6379 91.3631 35.3876 92.3408 34.3862 92.5897C34.3862 91.7244 34.6103 91.1138 34.8855 90.3643ZM34.4398 80.8567C34.0643 79.3634 33.6888 77.9234 32.9378 76.4301C34.7736 77.1145 34.6461 78.0578 34.5264 78.9437C34.4503 79.5074 34.3773 80.0478 34.8154 80.4833C34.4398 80.4833 34.4398 80.8567 34.4398 80.8567ZM34.2521 83.4166C34.1582 83.3233 34.0643 83.2299 34.0643 83.0433L34.118 83.0433C34.1433 82.9846 34.1665 82.9283 34.1887 82.8746C34.4491 82.2449 34.5578 81.9819 35.9419 82.6699C35.1909 83.0432 34.8154 83.4166 34.4399 83.7899L34.4398 83.7899C34.4398 83.6033 34.346 83.5099 34.2521 83.4166ZM38.8387 88.1631L39.5897 88.1631L39.5897 88.5365C39.2142 88.5365 39.0265 88.6298 38.8387 88.7231C38.6509 88.8165 38.4632 88.9098 38.0877 88.9098C37.7122 88.9098 37.7122 88.5365 37.7122 88.5365C38.0877 88.1631 38.4632 88.1631 38.8387 88.1631ZM41.6713 85.369C41.8536 85.2939 42.0091 85.2299 42.1647 85.2299C42.415 85.2299 42.5402 85.3543 42.5402 85.6032C42.2533 85.7458 42.076 85.8884 41.9246 86.0102C41.6796 86.2072 41.5023 86.3498 41.0381 86.3498C41.0381 86.3498 41.0381 85.9765 40.6626 85.6032C41.1026 85.6032 41.4136 85.4751 41.6713 85.369ZM78.3128 48.0096C78.0976 47.2704 78.4644 46.99 78.8077 46.7276C78.8101 46.7258 78.8125 46.724 78.8148 46.7221C78.7852 46.7993 78.7561 46.8754 78.7272 46.9508C78.592 47.304 78.4621 47.6433 78.3128 48.0096ZM145.017 62.2583C145.098 62.0377 145.184 61.8051 145.269 61.5504C145.734 63.257 145.484 64.2348 144.518 64.4836C144.518 63.6184 144.742 63.0077 145.017 62.2583ZM144.142 85.2831C143.606 85.2831 143.123 85.2831 142.319 85.5498L142.319 85.0165C142.587 84.7498 143.338 84.4832 143.874 84.4832C143.874 84.4832 144.142 84.7498 144.142 85.2831ZM131.107 94.0829C130.302 95.4162 129.551 96.6962 129.015 98.2428C128.226 96.4787 128.987 95.8952 129.696 95.3525C130.144 95.0092 130.57 94.6821 130.57 94.0829C130.839 94.3496 131.107 94.0829 131.107 94.0829ZM130.034 86.3498C129.551 85.8165 128.747 85.5498 128.747 85.5498L128.747 85.0165C129.035 85.1189 129.252 85.1426 129.441 85.1633C129.743 85.1963 129.972 85.2213 130.302 85.5498C130.302 85.5498 130.034 85.8165 130.034 86.3498ZM132.746 92.8711C132.131 93.1022 131.865 93.2023 131.375 91.7897L131.375 91.7363C132.18 92.003 132.663 92.003 133.199 92.003C133.065 92.1363 133.065 92.2696 133.065 92.403C133.065 92.5363 133.065 92.6696 132.931 92.803C132.866 92.8261 132.804 92.8492 132.746 92.8711ZM134.218 86.4031C133.736 86.4031 133.199 85.8698 133.199 85.8698L132.663 85.3365L132.931 85.0698C133.175 85.3399 133.365 85.4048 133.562 85.4724C133.754 85.5382 133.954 85.6066 134.218 85.8698C134.487 86.1365 134.218 86.4031 134.218 86.4031ZM134.916 44.7508C133.199 44.9997 132.341 44.3953 132.341 42.9375C132.594 43.4057 133.166 43.7279 133.857 44.1177C134.19 44.3052 134.55 44.5083 134.916 44.7508ZM137.584 87.0499C137.35 87.1631 137.105 87.2812 136.847 87.4164C137.741 85.8876 138.617 85.372 139.475 85.8698C138.875 86.4271 138.274 86.717 137.584 87.0499ZM142.319 68.5902C142.319 68.5902 141.943 68.5902 141.568 68.2169C141.943 67.8969 142.319 67.5236 142.694 66.7769L143.07 67.1502C143.07 67.4702 142.694 68.2169 142.319 68.5902ZM144.518 52.8038C144.142 51.3639 143.767 49.9239 143.016 48.4307L143.07 48.3774C144.866 49.0591 144.733 49.9978 144.609 50.8806C144.529 51.448 144.453 51.9924 144.893 52.4306C144.518 52.4306 144.518 52.8039 144.518 52.8039L144.518 52.8038ZM144.33 55.4172C144.236 55.3239 144.142 55.2306 144.142 55.0439C144.176 54.9766 144.207 54.9123 144.236 54.8517C144.53 54.2391 144.649 53.9912 145.966 54.6706C145.269 55.0439 144.893 55.4172 144.518 55.7905C144.518 55.6039 144.424 55.5106 144.33 55.4172ZM148.917 60.1638L149.668 60.1638L149.668 60.5371C149.292 60.5371 149.105 60.6304 148.917 60.7238C148.729 60.8171 148.541 60.9104 148.166 60.9104C147.79 60.9104 147.79 60.5371 147.79 60.5371C148.166 60.1638 148.541 60.1638 148.917 60.1638ZM151.749 57.3696C151.932 57.2946 152.087 57.2305 152.243 57.2305C152.493 57.2305 152.618 57.3549 152.618 57.6038C152.331 57.7464 152.154 57.889 152.003 58.0108C151.758 58.2079 151.58 58.3505 151.116 58.3505C151.116 58.3505 151.116 57.9772 150.741 57.6038C151.181 57.6038 151.492 57.4757 151.749 57.3696Z"
                  fill={
                    selectedDate === date.formattedDate ? "#D82121" : "#000"
                  }
                />
              </svg>
              <div className="absolute inset-0 flex flex-col justify-center">
                <p className="text-[0.75rem]">{date.dayName}</p>
                <p className="text-[2.25rem] font-normal leading-8">
                  {date.formattedDate}
                </p>
                <p className="text-[0.75rem]">{date.monthName}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Salonlar */}
        {sinemaSalon.map((salon) => (
          <div className="mt-[1.5rem] md:mt-[4rem]">
            <div className="flex flex-col gap-2 md:gap-4">
              <h2 className="text-[1rem] md:text-[2rem] font-semibold">
                {salon.name}
              </h2>
              <div className="flex justify-between md:justify-normal gap-2 md:gap-4">
                <p className="text-[0.625rem] md:text-[0.75rem]">
                  {salon.address}
                </p>
                <Link
                  className="flex flex-row text-[0.75rem] text-red"
                  href="/"
                >
                  Konum
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="vuesax/linear/location">
                      <g id="location">
                        <path
                          id="Vector"
                          d="M8.00005 8.39414C9.077 8.39414 9.95005 7.5211 9.95005 6.44414C9.95005 5.36719 9.077 4.49414 8.00005 4.49414C6.92309 4.49414 6.05005 5.36719 6.05005 6.44414C6.05005 7.5211 6.92309 8.39414 8.00005 8.39414Z"
                          stroke="#D82121"
                          strokeWidth="1.5"
                        />
                        <path
                          id="Vector_2"
                          d="M2.76256 5.30625C3.99381 -0.106249 12.0126 -0.0999984 13.2376 5.3125C13.9563 8.4875 11.9813 11.175 10.2501 12.8375C8.99381 14.05 7.00631 14.05 5.74381 12.8375C4.01881 11.175 2.04381 8.48125 2.76256 5.30625Z"
                          stroke="#D82121"
                          strokeWidth="1.5"
                        />
                      </g>
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
            <Carousel
              responsive={responsive}
              autoPlay={false}
              swipeable={true}
              draggable={true}
              showDots={false}
              infinite={false}
              partialVisible={true}
              className={styles.customCaro}
            >
              {salon.films.map((film) => (
                <div className="flex flex-col gap-[0.5rem]">
                  <div className="flex flex-col">
                    <div className="max-w-[11.0625rem] min-w-[10rem] w-full">
                      <Image
                        alt="movieImg"
                        width={100}
                        height={100}
                        src={film.movieImage}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="text-[0.875rem] font-semibold md:text-[1rem]">
                      {film.movieName}
                    </div>
                    <div className="text-[0.875rem] font-light md:text-[1rem]">
                      {film.movieType}
                    </div>
                  </div>
                  <button className="w-fit p-[0.5rem] border border-[#D82121] underline text-[0.625rem] md:text-[0.6875rem] font-semibold">
                    Seanslar
                  </button>
                </div>
              ))}
            </Carousel>
            <div className="hidden md:flex md:flex-col md:gap-2">
              <div className="flex items-center gap-4">
                <h4 className="max-w-[3.875rem] w-full underline text-[0.6875rem] font-semibold">
                  Dublaj
                </h4>
                {/* Hours */}
                <div className="p-2 bg-[#292D32] text-[0.6875rem] font-semibold">
                  11:30
                </div>
                <div className="p-2 bg-[#292D32] text-[0.6875rem] font-semibold">
                  11:30
                </div>
                <div className="p-2 bg-[#292D32] text-[0.6875rem] font-semibold">
                  11:30
                </div>
                <div className="p-2 bg-[#606367] text-[0.6875rem] font-semibold">
                  11:30
                </div>
                <div className="p-2 bg-[#606367] text-[0.6875rem] font-semibold">
                  11:30
                </div>
                <div className="p-2 bg-[#606367] text-[0.6875rem] font-semibold">
                  11:30
                </div>
                <div className="p-2 bg-[#606367] text-[0.6875rem] font-semibold">
                  11:30
                </div>
              </div>
              <div className="flex items-center gap-4">
                <h4 className="max-w-[3.875rem] w-full underline text-[0.6875rem] font-semibold">
                  Original
                </h4>
                <div className="p-2 bg-[#292D32] text-[0.6875rem] font-semibold">
                  11:30
                </div>
                <div className="p-2 bg-[#606367] text-[0.6875rem] font-semibold">
                  11:30
                </div>
                <div className="p-2 bg-[#606367] text-[0.6875rem] font-semibold">
                  11:30
                </div>
                <div className="p-2 bg-[#606367] text-[0.6875rem] font-semibold">
                  11:30
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeanslarSection;
