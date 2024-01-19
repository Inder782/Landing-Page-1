import React from "react";
import "./styles.css";
import Image from "next/image";
const Section_3 = () => {
  return (
    <section className="section_3">
      <Image
        src="/mobile_sec_3.png"
        width={290}
        height={600}
        alt="phone"
        className="phone_bottom"
      />
    </section>
  );
};

export default Section_3;
