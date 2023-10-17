"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./Bilgiler.module.css";

const Bilgiler = () => {
  const [profileInfos, setProfileInfos] = useState({
    ad: "Volkan",
    soyad: "Çavuşoğlu",
    cinsiyet: "Belirtmek İstemiyorum",
    doğumTarihi: {
      gün: "01",
      ay: "04",
      yıl: "1995",
    },
    telefon: "+90 532 165 38 97",
    email: "cavusoglu.volkan@gmail.com",
    şifre: "deneme123",
  });
  const [formValues, setFormValues] = useState(profileInfos);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("doğumTarihi")) {
      const field = name.split(".")[1];
      setFormValues((prev) => ({
        ...prev,
        doğumTarihi: { ...prev.doğumTarihi, [field]: value },
      }));
    } else {
      setFormValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfileInfos(formValues);
    console.log(profileInfos);
  };

  return (
    <div className={`${styles.profil} py-3 md:py-12`}>
      <h2 className="text-[1.5rem] md:text-[2rem] font-semibold text-red" font->
        Profil
      </h2>

      <div className="mt-[2.31rem] flex flex-col md:flex-row md:items-center md:gap-6 md:justify-start">
        <div className="w-[5.625rem] h-[5.625rem]">
          <Image
            src="/imgs/profilImg.png"
            className="rounded-full w-full h-full"
            alt="prfil img"
            width={150}
            height={150}
          />
        </div>
        <div className="md:flex md:gap-4 mt-2 md:mt-0">
          <p className="text-[1.25rem] md:text-[1.75rem]">{profileInfos.ad}</p>
          <p className="text-[1.25rem] md:text-[1.75rem]">
            {profileInfos.soyad}
          </p>
        </div>
        <p className="text-[0.625rem] md:text-[1.75rem] mt-2 md:mt-0">
          {profileInfos.email}
        </p>
      </div>

      <div className="mt-[2.44rem] md:mt-[5rem]">
        <form className="flex flex-col gap-[1.75rem]">
          <div className="flex flex-col md:flex-row gap-[1.75rem] md:gap-[4.7rem]">
            <div className="w-full">
              <h3 className="text-[1.5rem] font-semibold md:text-[2rem]">
                Kişisel Bilgilerim
              </h3>
              <div>
                <label className="block text-[1.125rem]">Adınız :</label>
                <input
                  name="ad"
                  value={formValues.ad}
                  onChange={handleInputChange}
                  type="text"
                  className="border border-[#D82121] px-4 py-6 w-full focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block ">Soyadınız :</label>
                <input
                  name="soyad"
                  type="text"
                  value={formValues.soyad}
                  onChange={handleInputChange}
                  className="border border-[#D82121] px-4 py-6 w-full focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block ">Cinsiyetiniz :</label>
                <select
                  name="cinsiyet"
                  value={formValues.cinsiyet}
                  onChange={handleInputChange}
                  className="border border-[#D82121] px-4 py-6 w-full focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option>Belirtmek İstemiyorum</option>
                  <option>Erkek</option>
                  <option>Kadın</option>
                </select>
              </div>
              <label className="block ">Doğum Tarihiniz :</label>
              <div className="flex space-x-4">
                {/* <p className="block ">Doğum Tarihiniz :</p> */}
                <div>
                  {/* <label className="block ">Gün</label> */}
                  <select
                    name="doğumTarihi.gün"
                    value={formValues.doğumTarihi.gün}
                    onChange={handleInputChange}
                    className="border border-[#D82121] px-4 py-6 w-full focus:outline-none focus:ring focus:border-blue-300"
                  >
                    {/* Add options for days */}
                  </select>
                </div>
                <div>
                  {/* <label className="block ">Ay</label> */}
                  <select
                    name="doğumTarihi.ay"
                    value={formValues.doğumTarihi.ay}
                    onChange={handleInputChange}
                    className="border border-[#D82121] px-4 py-6 w-full focus:outline-none focus:ring focus:border-blue-300"
                  >
                    {/* Add options for months */}
                  </select>
                </div>
                <div>
                  {/* <label className="block ">Yıl</label> */}
                  <select
                    name="doğumTarihi.yıl"
                    value={formValues.doğumTarihi.yıl}
                    onChange={handleInputChange}
                    className="border border-[#D82121] px-4 py-6 w-full focus:outline-none focus:ring focus:border-blue-300"
                  >
                    {/* Add options for years */}
                  </select>
                </div>
              </div>
            </div>

            <div className="w-full">
              <h3 className="text-[1.5rem] font-semibold md:text-[2rem]">
                Hesap Bilgilerim
              </h3>
              <div>
                <label className="block ">Telefon :</label>
                <input
                  name="telefon"
                  value={formValues.telefon}
                  onChange={handleInputChange}
                  type="tel"
                  className="border border-[#D82121] px-4 py-6 w-full focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block ">Mail Adresiniz :</label>
                <input
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  type="email"
                  className="border border-[#D82121] px-4 py-6 w-full focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block ">Mevcut Şifreniz :</label>
                <input
                  name="şifre"
                  value={formValues.şifre}
                  type="password"
                  className="border border-[#D82121] px-4 py-6 w-full focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block ">Yeni Şifreniz :</label>
                <input
                  name="şifre"
                  value={formValues.şifre}
                  onChange={handleInputChange}
                  type="password"
                  className="border border-[#D82121] px-4 py-6 w-full focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-[#D82121] text-white font-semibold py-6 px-4 border-[#D82121] hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bilgiler;
