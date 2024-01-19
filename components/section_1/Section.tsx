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
      <span className="glow_circle" />

      <div className="line_purple">
        <Image
          src="/purple_line.svg"
          width={65}
          height={65}
          alt="purple"
          className="purple_curve"
        />
        <span className="vertical_line_pruple" />
        <span className="bottom_line_purple" />{" "}
        <Image
          src="/bottom_eclipse_purple.svg"
          width={67}
          height={65}
          alt="purple"
          className="bottom_purple"
        />
      </div>

      <div className="line_golden">
        <Image
          src="/golden_line.svg"
          width={67}
          height={67}
          alt="line"
          className="golden_curve"
        />
        <span className="vertical_line_golden" />
      </div>
      <div className="line_magenta">
        <Image
          src="/magenta_line.svg"
          width={67}
          height={67}
          alt="line"
          className="magenta_curve"
        />

        <div className="vertical_line_magenta" />
      </div>
    </section>
  );
};

export default Section;
