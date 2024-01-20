import React from "react";
import "./styles.css";
import Image from "next/image";
const Section_4 = () => {
  return (
    <section className="section_4">
      <h1 className="heading">Our Top Partners</h1>
      <div className="logos">
        <Image src={"/logos/logo_1.svg"} width={138} height={39} alt="logo" />
        <Image src={"/logos/logo_2.svg"} width={138} height={39} alt="logo" />
        <Image src={"/logos/logo_3.svg"} width={138} height={39} alt="logo" />
        <Image src={"/logos/logo_4.svg"} width={138} height={39} alt="logo" />
        <Image src={"/logos/logo_5.svg"} width={138} height={39} alt="logo" />
      </div>
      <div className="logos_2">
        <Image src={"/logos/logo_6.svg"} width={138} height={39} alt="logo" />
        <Image src={"/logos/logo_7.svg"} width={82} height={39} alt="logo" />
        <Image src={"/logos/logo_8.svg"} width={99} height={39} alt="logo" />
        <Image src={"/logos/logo_9.svg"} width={70} height={44} alt="logo" />
        <Image src={"/logos/logo_10.svg"} width={138} height={39} alt="logo" />
      </div>
    </section>
  );
};

export default Section_4;
