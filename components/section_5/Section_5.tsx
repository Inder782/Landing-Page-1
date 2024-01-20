import React from "react";
import "./styles.css";
import Image from "next/image";
const Section_5 = () => {
  return (
    <section className="section_5">
      <div className="text">
        <h1 className="title_sec_5">Turpis risus facilisi</h1>
        <p className="para_sec_5">
          Augue feugiat mi, massa amet. Id purus aliquam bibendum purus dictum
          elementum nullam odio tellus. Imperdiet feugiat est odio fames magna
          orci. Augue purus aliquam, placerat vestibulum dictum pellentesque
          molestie. Facilisis pretium porta congue proin.
        </p>
      </div>
      <div className="images_sec_5">
        <Image src="/Macbook_2.svg" width={1500} height={290} alt="macbook_2" />
        <Image
          src="/Picture.svg"
          width={300}
          height={155}
          alt="picture"
          className="picture"
        />
      </div>
    </section>
  );
};

export default Section_5;
