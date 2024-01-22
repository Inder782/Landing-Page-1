import React from "react";
import "./styles.css";
import Image from "next/image";

const Section_8 = () => {
  return (
    <section
      className="section_8
  "
    >
      <span className="ellipse_sec_8" />
      <Image
        src="/section_8/iPhone_sec_8.svg"
        width={350}
        height={598}
        className="phone_sec_8"
        alt="phone_sec_8"
      />
      <div className="purple_line_8">
        <Image
          src="/section_8/purple_top.svg"
          width={67}
          height={250}
          alt="purple_top_sec_8"
          className="purple_top_sec_8"
        />
        <span className="vertical_line_purple_sec_8" />
        <div className="purple_line_bottom">
          <Image
            src="/section_8/purple_bottom.svg"
            width={65}
            height={350}
            alt="purple_top_sec_8"
            className="purple_bottom_sec_8"
          />
        </div>
      </div>

      <div className="golden_line_8"></div>
      <div className="magenta_line_8"></div>
    </section>
  );
};

export default Section_8;
