import React from "react";
import styles from "../RegisterForm/RegisterForm.module.css";
import { useState, useEffect } from "react";

const RegisterForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(!isChecked);
  }, [isChecked]);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      console.log("Form submitted successfully");
    } else {
      alert("Please accept the policy to submit the form.");
    }
  };

  return (
    <div
      className={`${styles.form} relative w-full mb-10 px-[1.5rem] py-[2rem] max-w-[30.25rem] md:mt-[5.12rem]`}
    >
      <div className="absolute top-0 left-0 blur-md -z-10 w-full h-full"></div>
      <form action="" className="">
        <div className="text-center flex flex-col gap-[0.44rem]">
          <div>
            <input className={styles.input} placeholder="Ad" type="text" />
          </div>
          <div>
            <input className={styles.input} placeholder="Soyad" type="text" />
          </div>
          <div>
            <input
              className={styles.input}
              placeholder="Mail Adresi"
              type="email"
            />
          </div>
          <div>
            <input
              className={styles.input}
              placeholder="Telefon Numarası"
              type="tel"
            />
          </div>
          <div>
            <input
              className={styles.input}
              type="password"
              placeholder="Şifre Oluştur"
            />
          </div>
          <label className="flex gap-[0.5rem] items-center justify-end px-[1rem] py-[0.4rem]">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className={styles.customCheckbox}
            />
            Sözleşmeyi Okudum
          </label>
          <div className="flex justify-end gap-[0.5rem] mt-[2.03rem]">
            <button className="py-[0.38rem] px-[1rem]">Geri</button>
            <button
              type="submit"
              disabled={isButtonDisabled}
              className="py-[0.38rem] px-[1rem] text-[#606367] bg-[#30D849] rounded-full"
            >
              Kaydet
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
