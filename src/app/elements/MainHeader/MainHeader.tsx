import React from "react";
import styles from "./MainHeader.module.css";

const MainHeader: React.FC<{
  header: string;
  color: "red" | "green" | null;
}> = ({ header, color }) => {
  return (
    <div className="flex flex-col gap-[0.44rem]">
      <h2
        className={`text-${color} font-bold text-[1rem] sm:text-[1.25rem]`}
        // style={{ color: `${color}` }}
      >
        {header}
      </h2>
      <div
        className={`${
          color === "green"
            ? "bg-[#30DB49]"
            : color === "red"
            ? "bg-[#D82121]"
            : "bg-[#e9e9e9]"
        } h-[0.25rem] w-[4.625rem] rounded-3xl`}
      ></div>
    </div>
  );
};

export default MainHeader;
