import React from "react";
import styles from "../Form/Form.module.css";
import Link from "next/link";

const Form = () => {
  return (
    <div
      className={`${styles.form} relative px-[1.5rem] py-[2rem] mb-10 w-full max-w-[30.25rem] md:mt-[5.12rem]`}
    >
      <div className="absolute top-0 left-0 blur-md -z-10 w-full h-full"></div>
      <form action="" className="">
        <div className="text-center flex flex-col gap-[0.44rem]">
          <div>
            <input
              className={styles.input}
              placeholder="Kullanıcı Adı"
              type="text"
            />
          </div>
          <div>
            <input
              className={styles.input}
              type="password"
              placeholder="Şifre"
            />
          </div>
          <a href="#" className="text-right mt-[1rem] underline">
            Parolamı Unuttum
          </a>
          <div className="flex justify-end gap-[0.5rem] mt-[2.03rem]">
            <Link href="/register" className="py-[0.38rem] px-[1rem]">
              Üye Ol
            </Link>
            <button className="py-[0.38rem] px-[1rem] bg-[#D82121] rounded-full">
              Giriş Yap
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
