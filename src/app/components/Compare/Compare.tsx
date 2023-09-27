import Image from "next/image";
import React from "react";
import styles from "../Compare/Compare.module.css";

const Compare = () => {
  return (
    <div className="flex gap-[0.5rem] mx-auto max-w-[10rem] sm:max-w-[21.375rem] sm:w-full">
      <div className="flex flex-col gap-[0.5rem]">
        <div className="w-[4.75rem]">
          <Image
            src="https://s3-alpha-sig.figma.com/img/7071/06e4/a604af2d2c6b4c05df1155f4e36007e7?Expires=1696204800&Signature=Dg16LP7nI2zMrplMXrhx2CmTdgzMGm3E52CQb67iIApr3a9FQ3f-kt3MchJOEzPyrZmfgsddzx103QcsbvSNSRo~f2ilnxG7M8W-dtygUM73ZRjviZCoR4g9a6Aa3f9JWWxlzTf2mbXPgbThIirFeE97~qpmLua9beiufxekeaZbm6WWI5PH2HKWNqNsjc7qEkVRpaOalBHPeHrXjKrhkxDaR6h1RoCeegU99S48cZRly7FJs0TFJwQv893ADHnqE2IdZBlU1cnzsbnrJejmwYH0tZGldWz-KvDOnS43PVAQO4gz3hH4bO6nmQ9CrochNmTY5ipdp-mqYJW6OHPjHw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width={100}
            height={100}
            className="rounded-lg"
            alt="filmName"
          />
        </div>
      <div className="flex flex-col gap-[0.5rem]">
        <p className="text-[0.625rem] font-semibold">1. Oppenheimer</p>
        <p className="text-[0.625rem] font-bold">Hasılat</p>
        <div className={`${styles.colGap} flex flex-wrap gap-[0.75rem]`}>
          <div>
            <p className="text-[0.562rem] font-semibold">Hafta sonu</p>
            <p className="text-[0.75rem] font-medium">10.310.618</p>
          </div>
          <div>
            <p className="text-[0.562rem] font-semibold">Toplam</p>
            <p className="text-[#30D849] text-[0.75rem] font-medium">
              149.369.841
            </p>
          </div>
        </div>
        <p className="text-[0.625rem] font-bold">Seyirci</p>
        <div className={`${styles.colGap} flex flex-wrap gap-[0.75rem]`}>
          <div>
            <p className="text-[0.562rem] font-semibold">Hafta sonu</p>
            <p className="text-[0.75rem] font-medium">83.884</p>
          </div>
          <div>
            <p className="text-[0.562rem] font-semibold">Toplam</p>
            <p className="text-[#30D849] text-[0.75rem] font-medium">
              1.369.841
            </p>
          </div>
        </div>
        <div className="flex flex-col gap[0.25rem] items-left">
          <p>IMDB</p>
          <p>7.8</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Compare;
