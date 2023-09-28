import Image from "next/image";
import Header from "../components/Header/Header";

export default function Profil() {
  return (
    <div className="max-w-[20.5rem] sm:max-w-[71rem] mx-auto">
      <Header />
      <div>
        <h2 className="text-[1.5rem] font-semibold text-[#d82121]" font->
          Profil
        </h2>

        <div className="mt-[2.31rem] flex flex-col sm:flex-row">
          <div className="w-[5.625rem] h-[5.625rem]">
            <Image
              src="/imgs/profilImg.png"
              className="rounded-full w-full h-full"
              alt="prfil img"
              width={150}
              height={150}
            />
          </div>
          <p className="text-[1.25rem]">Volkan Çavuşoğlu</p>
          <p className="text-[0.625rem]">cavusogluvolkan@gmail.com</p>
        </div>

        <div className="mt-[2.44rem]">
          <h3 className="">Kişisel Bilgilerim</h3>
          <form className="space-y-4">
            <div>
              <label className="block ">Adınız</label>
              <input
                type="text"
                className="border border-[#D82121] px-4 py-6 w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block ">Soyadınız</label>
              <input
                type="text"
                className="border border-[#D82121] px-4 py-6 w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block ">Cinsiyetiniz</label>
              <select className="border border-[#D82121] px-4 py-6 w-full focus:outline-none focus:ring focus:border-blue-300">
                <option>Belirtmek İstemiyorum</option>
                <option>Erkek</option>
                <option>Kadın</option>
              </select>
            </div>
            <div className="flex space-x-4">
              <div>
                <label className="block ">Gün</label>
                <select className="border border-[#D82121] px-4 py-6 w-full focus:outline-none focus:ring focus:border-blue-300">
                  {/* Add options for days */}
                </select>
              </div>
              <div>
                <label className="block ">Ay</label>
                <select className="border border-[#D82121] px-4 py-6 w-full focus:outline-none focus:ring focus:border-blue-300">
                  {/* Add options for months */}
                </select>
              </div>
              <div>
                <label className="block ">Yıl</label>
                <select className="border border-[#D82121] px-4 py-6 w-full focus:outline-none focus:ring focus:border-blue-300">
                  {/* Add options for years */}
                </select>
              </div>
            </div>
            <div>
              <label className="block ">Telefon</label>
              <input
                type="tel"
                className="border border-[#D82121] px-4 py-6 w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block ">Mail Adresiniz</label>
              <input
                type="email"
                className="border border-[#D82121] px-4 py-6 w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block ">Mevcut Şifreniz</label>
              <input
                type="password"
                className="border border-[#D82121] px-4 py-6 w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block ">Yeni Şifreniz</label>
              <input
                type="password"
                className="border border-[#D82121] px-4 py-6 w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#D82121] text-white font-semibold py-6 px-4 border-[#D82121] hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Kaydet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
