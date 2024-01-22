import React from "react";
import "./styles.css";
import Image from "next/image";

const Section_8 = () => {
  return (
    <section
      className="section_8
  "
    >
      <div className="content_sec_8">
        <h1 className="title_sec_8">Launch your app today</h1>
        <p className="p_sec_8">
          Stay on top of your competition with a great performing app. <br />
          Your time and energy are not wasted.
        </p>
        <button className="button_sec8">Publish App</button>
      </div>
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

      <div className="golden_line_8">
        {" "}
        <Image
          src="/section_8/golden_top.svg"
          width={67}
          height={250}
          alt="golden_top_sec_8"
          className="golden_top_sec_8"
        />
        <span className="vertical_line_golden_sec_8" />
        <div className="golden_line_bottom">
          <Image
            src="/section_8/golden_bottom.svg"
            width={66}
            height={35}
            alt="golden_top_sec_8"
            className="golden_bottom_sec_8"
          />
        </div>
      </div>
      <div className="magenta_line_8">
        {" "}
        <Image
          src="/section_8/magenta_top.svg"
          width={67}
          height={250}
          alt="magenta_top_sec_8"
          className="magenta_top_sec_8"
        />
        <span className="magenta_line_vertical_sec_8" />
        <div className="magenta_line_bottom">
          <Image
            src="/section_8/magenta_bottom.svg"
            width={66}
            height={35}
            alt="golden_top_sec_8"
            className="magenta_bottom_sec_8"
          />
        </div>
      </div>
    </section>
  );
};

export default Section_8;
