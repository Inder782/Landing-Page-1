import React from "react";
import "./styles.css";
import Image from "next/image";
const Section = () => {
  return (
    <section className="sec_1">
      <div className="col_1">
        <h1>App Builder</h1>
        <span>For iOs & Android</span>
        <p>
          Our powerful app builder will help you build your desired app in
          minutes without coding knowledge and once your app is ready, you can
          publish it on Google Play and App Store.
        </p>
        <div className="buttons">
          <button className="publish_btn ">Publish App</button>
          <div className="flex justify-center gap-2">
            <Image
              src="./play-circle.svg"
              width={25}
              height={25}
              alt="play-logo"
            />
            <button className="view_demo">View Demo</button>
          </div>
        </div>
      </div>
      <Image
        src="/mobile_1.png"
        width={290}
        height={600}
        alt="phone"
        className="phone"
      />
      <span className="eclipse" />
      <div className="purple">
        <span className="line_purple" />
        <Image
          src="/line_purple.png"
          width={67}
          height={67}
          alt="line"
          className="purple_img"
        />
      </div>
      <div className="golden_line">
        <Image
          src="/line_golden.png"
          width={67}
          height={67}
          alt="line"
          className="golden"
        />
        <span className="line_golden" />
      </div>
      <div className="magenta">
        <Image
          src="/line_magenta.png"
          width={67}
          height={67}
          alt="line"
          className="magenta"
        />
        <span className="line_magenta" />
      </div>
    </section>
  );
};

export default Section;
