import Image from "next/image";
import React from "react";
import styles from "../Compare/Compare.module.css";
import MainHeader from "@/app/elements/MainHeader/MainHeader";

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
          <div className={`${styles.colGap} flex gap-[0.75rem]`}>
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
          <div className={`${styles.colGap} flex  gap-[0.75rem]`}>
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

export default function CompareSection() {
  return (
    <div className="px-[1.5rem] sm:px-[6rem] mt-[2rem] lg:mt-[5rem] md:px-[9.5rem]">
      <div className="layout flex flex-col gap-[1.2rem] sm:gap-[2rem] justify-center">
        <MainHeader color="red" header="KARŞILAŞTIR" />
        <div className="flex flex-col gap-[1.12rem] md:flex-row md:min-h-[28.1259rem]">
          <div className="flex gap-[0.5rem] md:gap-[3.85rem] md:flex-1">
            <ImageContainerOne imgLink="https://s3-alpha-sig.figma.com/img/7514/060b/cb14624670fc867e67ab500d7ee18e3e?Expires=1698019200&Signature=W5ApVsvEMVFIMWIFEg6Y34t3ToYjPJdub-ldgNN-3gz385V1v1mp0xvU1yFiTvDxFZDYqQgrbO3AN8rbTgggy~IXzvwAQFkraebAqf4A6PHD5WzJIVHDc~vmWuROimuqObkRmU7imbOAB6e6UsNqjh5uV0JQcx1SOl9jM3AC4g4SJBXAHDYzGMshG8zoj4wB-bXVBr3e2hUZqoii53MrF0v9yB7F-catWDKYvQMcfvh3OTmbVeBoq5WYEz6Hg33e97KKB8QxS9ij1XytiIc2hmRD7xWnpbK0l9hUx80saKQ~tOhPJZa4AqOUbW6HhxA19WnOFRxwt9D~iLIejkllyQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            <ImageContainerTwo imgLink="https://s3-alpha-sig.figma.com/img/6a90/5793/72ebb9174e135d3dc6a065c2ff1e9157?Expires=1698019200&Signature=RIH-4lVRwnsj9CWjAH~WMxVUdJ8cyVi9PKJySY9AQu8RCimMDLtiJj9oWWC1-EatokSqdkyVflVazOgJv6fYvtpKjoqQjbe5llnbja3eZjogAtbSAovq6abGXdAQHsdw~r85JULQu9nRO~K~4K9~sR2o5Q~askSAe96UHnVPbiajoAQ0G2Lip38z3Pll5GbeSn91qPIf3~XAYyAJ9RdiM-35-am7u5JEq~g9fRE0DUMGnPHwjeqBQk0Ac~egcqFMKb0D7yaTYDnlXUZLKsFX-mSVkkg6U-N6fW16Y~NQXMwcz8cnHPzEjsJ9dNFoVZh3XpSDtLKP3meUvbPXOTbwag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          </div>
          <div className="flex gap-[0.5rem] md:gap-[1.56rem] md:flex-1">
            <InfoContainerOne title="ÖRÜMCEK ADAM" />
            <InfoContainerTwo title="MISSION: IMPOSSIBLE" />
          </div>
        </div>
      </div>
    </div>
  );
}

const ImageContainerOne = ({ imgLink }) => {
  return (
    <div className="flex flex-col flex-1 gap-[0.75rem] md:gap-[1.4rem] md:justify-end">
      <div className="max-w-[10rem] md:max-w-[15.5rem] relative md:order-last">
        <svg
          className="absolute -right-[3rem] bottom-4 -z-10 w-full"
          xmlns="http://www.w3.org/2000/svg"
          // width="252"
          // height="284"
          viewBox="0 0 252 284"
          fill="none"
        >
          <path
            d="M207.51 90.211C181.223 62.739 154.647 34.2119 127.183 7.54901C123.725 4.12194 118.58 0.671054 114.256 0.722541C77.6764 1.03128 42.3907 5.03679 6.40062 10.0458C4.79748 10.3234 2.49002 11.6045 0.839419 12.2193C48.1732 50.6113 93.7553 90.7802 136.904 135.344C99.7958 181.175 68.743 230.208 40.1431 283.592C42.6925 283.703 47.0992 283.953 49.2642 283.683C79.4283 277.841 108.851 275.93 139.605 274.788C143.065 274.649 147.319 273.321 149.603 270.425C184.138 226.434 219.127 184.101 250.244 136.833C251.037 135.643 251.268 134.446 251.89 133.141C236.239 119.444 222.232 105.621 207.551 90.3617L207.51 90.211ZM107.338 100.506C106.28 98.6895 105.257 97.5114 104.679 95.4013C106.378 95.4754 107.265 97.177 107.338 100.506ZM115.015 222.379C113.116 222.09 111.78 221.808 111.763 219.706C111.539 216.85 112.339 215.172 114.888 215.283C114.905 217.385 114.833 219.674 115.056 222.53L115.015 222.379ZM128.74 258.644C127.996 255.931 129.037 254.457 131.865 254.222C130.415 256.078 128.888 257.145 128.74 258.644ZM133.068 210.135C132.175 208.921 131.359 208.497 130.631 207.886C130.987 207.14 131.637 206.962 131.637 206.962C132.323 207.422 133.346 208.6 133.553 209.354L133.198 210.099L133.068 210.135ZM147.479 219.31L146.307 219.631C146.307 219.631 145.136 219.952 144.409 219.341C144.409 219.341 144.243 218.738 144.764 218.596C145.935 218.274 146.101 218.877 147.272 218.556L147.479 219.31ZM153.001 223.629C153.001 223.629 151.623 223.197 150.452 223.518C150.807 222.772 150.601 222.019 150.601 222.019C151.772 221.698 151.937 222.3 153.315 222.733C153.315 222.733 153.211 223.032 153.001 223.629ZM152.456 146.637C152.439 144.534 153.032 142.103 153.459 139.069C155.54 142.063 156.563 143.241 157.662 145.209C157.235 148.243 155.336 147.954 152.456 146.637ZM148.912 94.938C148.912 94.938 148.764 96.4373 148.929 97.0402C146.603 99.785 144.189 102.716 141.584 106.996C140.84 104.283 140.468 102.926 140.823 102.181C140.434 98.7219 144.169 93.9701 148.168 92.225L148.912 94.938ZM174.683 177.167C174.683 177.167 175.039 176.421 174.832 175.667C175.559 176.278 176.375 176.703 177.712 176.984C175.742 178.983 175.576 178.38 174.683 177.167ZM181.493 120.359C181.921 117.325 181.827 114.434 181.604 111.578C181.604 111.578 181.811 112.331 182.331 112.189C181.177 114.612 185.511 117.151 181.493 120.359ZM218.4 155.939C217.119 151.267 217.174 146.876 216.708 142.628C220.316 144.555 221.005 151.659 218.4 155.939Z"
            fill="#D82121"
          />
        </svg>
        <Image
          alt="filmImg"
          width={500}
          height={500}
          className="w-full h-full"
          src={imgLink}
        />
      </div>
      <div className="flex items-center gap-[0.5rem]">
        <div className="w-4">
          <img src="/icons/search-normal.png" />
        </div>
        <p className={styles.hsNumberFont}>Değiştir</p>
      </div>
    </div>
  );
};

const InfoContainerOne = ({ title }) => {
  return (
    <div className="flex flex-col flex-1 md:order-last">
      <div className="flex flex-col">
        <h3
          className={`font-bold text-[0.75rem] text-[#D82121] md:text-[1.25rem]`}
        >
          {title}
        </h3>
        <div className="flex flex-col gap-[0.94rem] mt-[1.25rem]">
          <div className="seyirci flex flex-col gap-[0.75rem]">
            <p className="text-[0.75rem] font-bold">Seyirci</p>
            <div className={`${styles.colGap} flex gap-[0.75rem]`}>
              <div>
                <p className="text-[0.75rem] font-bold">Hafta sonu</p>
                <p className="text-[0.875rem] font-medium">83.884</p>
              </div>
              <div>
                <p className="text-[0.75rem] font-bold">Toplam</p>
                <p className="text-[#D82121] text-[0.875rem] font-medium">
                  1.369.841
                </p>
              </div>
            </div>
          </div>
          <div className="hasılat flex flex-col gap-[0.75rem]">
            <p className="text-[0.75rem] font-bold">Hasılat</p>
            <div className={`${styles.colGap} flex gap-[0.75rem]`}>
              <div>
                <p className="text-[0.75rem] font-bold">Hafta sonu</p>
                <p className="text-[0.875rem] font-medium">10.310.618</p>
              </div>
              <div>
                <p className="text-[0.75rem] font-bold">Toplam</p>
                <p className="text-[#D82121] text-[0.875rem] font-medium">
                  149.369.841
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[0.75rem]">
            <h3 className={styles.titleFont}>IMDB</h3>
            <p className="font-medium text-[0.875rem] text-[#D82121]">9.3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageContainerTwo = ({ imgLink }) => {
  return (
    <div className="flex flex-col flex-1 gap-[0.75rem] md:gap-[1.4rem]">
      <div className="max-w-[10rem] md:max-w-[15.5rem] relative">
        <svg
          className="absolute -left-[3rem] top-4 -z-10 w-full"
          xmlns="http://www.w3.org/2000/svg"
          // width="289"
          // height="285"
          viewBox="0 0 289 285"
          fill="none"
        >
          <path
            d="M44.3562 141.198C69.7102 102.26 95.174 61.9889 122.122 23.7573C125.501 18.8593 130.896 13.5523 136.094 12.6386C180.044 4.75665 223.273 1.60818 267.572 -0.493521C269.558 -0.521652 272.614 0.497013 274.732 0.86325C226.587 57.6703 180.942 116.217 139.204 179.495C194.027 226.189 242.306 278.095 288.62 335.783C285.587 336.492 280.357 337.786 277.699 337.951C240.201 337.737 204.476 342.079 167.328 347.646C163.146 348.26 157.745 347.623 154.353 344.66C103.032 299.596 51.538 256.627 3.57945 206.856C2.36038 205.605 1.81356 204.218 0.774287 202.791C16.4688 182.803 30.1621 163.034 44.3405 141.389L44.3562 141.198ZM166.836 130.967C167.696 128.546 168.658 126.9 168.878 124.234C166.856 124.706 166.175 126.951 166.836 130.967ZM185.038 279.129C187.25 278.353 188.791 277.713 188.338 275.183C187.964 271.701 186.628 269.866 183.594 270.574C184.047 273.104 184.648 275.837 185.022 279.319L185.038 279.129ZM176.731 325.798C177.013 322.37 175.432 320.834 171.987 321.189C174.144 323.093 176.215 324.03 176.731 325.798ZM160.629 268.491C161.426 266.831 162.31 266.137 163.045 265.239C162.451 264.423 161.63 264.355 161.63 264.355C160.911 265.063 159.949 266.709 159.871 267.661L160.464 268.477L160.629 268.491ZM145.405 282.765L146.882 282.887C146.882 282.887 148.36 283.009 149.095 282.111C149.095 282.111 149.157 281.349 148.501 281.295C147.023 281.173 146.961 281.935 145.483 281.813L145.405 282.765ZM139.751 289.201C139.751 289.201 141.307 288.371 142.784 288.492C142.191 287.677 142.269 286.725 142.269 286.725C140.792 286.603 140.729 287.365 139.173 288.195C139.173 288.195 139.366 288.53 139.751 289.201ZM123.089 196.572C122.636 194.042 121.378 191.255 120.183 187.706C118.361 191.773 117.399 193.419 116.523 196.031C117.718 199.58 119.93 198.804 123.089 196.572ZM115.712 133.657C115.712 133.657 116.227 135.425 116.165 136.187C119.572 138.96 123.128 141.937 127.215 146.491C127.497 143.063 127.638 141.35 127.045 140.534C126.733 136.29 121.185 131.424 115.994 130.229L115.712 133.657ZM103.292 238.269C103.292 238.269 102.698 237.453 102.776 236.501C102.041 237.399 101.158 238.093 99.6177 238.733C102.431 240.69 102.494 239.928 103.292 238.269ZM82.3459 171.552C81.1509 168.002 80.6125 164.507 80.2383 161.025C80.2383 161.025 80.1599 161.977 79.5033 161.923C81.4333 164.575 76.8045 168.603 82.3459 171.552ZM46.0759 222.627C46.5623 216.724 45.5085 211.461 45.1114 206.252C41.2176 209.382 41.989 218.073 46.0759 222.627Z"
            fill="#30D849"
          />
        </svg>
        <Image
          alt="filmImg"
          width={500}
          height={500}
          className="w-full h-full"
          src={imgLink}
        />
      </div>
      <div className="flex items-center gap-[0.5rem]">
        <div className="w-4">
          <img src="/icons/search-normal.png" />
        </div>
        <p className={styles.hsNumberFont}>Değiştir</p>
      </div>
    </div>
  );
};

const InfoContainerTwo = ({ title }) => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col">
        <h3
          className={`font-bold text-[0.75rem] text-[#30D849] md:text-[1.25rem]`}
        >
          {title}
        </h3>
        <div className="flex flex-col gap-[0.94rem] mt-[1.25rem]">
          <div className="seyirci flex flex-col gap-[0.75rem]">
            <p className="text-[0.75rem] font-bold">Seyirci</p>
            <div className={`${styles.colGap} flex gap-[0.75rem]`}>
              <div>
                <p className="text-[0.75rem] font-bold">Hafta sonu</p>
                <p className="text-[0.875rem] font-medium">83.884</p>
              </div>
              <div>
                <p className="text-[0.75rem] font-bold">Toplam</p>
                <p className="text-[#30D849] text-[0.875rem] font-medium">
                  1.369.841
                </p>
              </div>
            </div>
          </div>
          <div className="hasılat flex flex-col gap-[0.75rem]">
            <p className="text-[0.75rem] font-bold">Hasılat</p>
            <div className={`${styles.colGap} flex gap-[0.75rem]`}>
              <div>
                <p className="text-[0.75rem] font-bold">Hafta sonu</p>
                <p className="text-[0.875rem] font-medium">10.310.618</p>
              </div>
              <div>
                <p className="text-[0.75rem] font-bold">Toplam</p>
                <p className="text-[#30D849] text-[0.875rem] font-medium">
                  149.369.841
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[0.75rem]">
            <h3 className={styles.titleFont}>IMDB</h3>
            <p className="font-medium text-[#30D849] text-[0.875rem]">9.3</p>
          </div>
        </div>
      </div>
    </div>
  );
};
