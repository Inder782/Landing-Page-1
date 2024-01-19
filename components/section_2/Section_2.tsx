import React from "react";
import "./styles.css";
import Image from "next/image";

const Section_2 = () => {
  return (
    <div className="section">
      <span className="blue_eclipse" />
      <Image
        src="/Macbook.png"
        width={1008}
        height={555}
        alt="macbook"
        className="macbook"
      />
    </div>
  );
};

export default Section_2;
