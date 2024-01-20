import React from "react";
import "./styles.css";
import Image from "next/image";

const Section_7 = () => {
  return (
    <section className="section_7">
      <div className="body_sec_7">
        <h1 className="title_sec_7">Non commodo nec</h1>
        <p className="para_sec_7">
          Laoreet amet, lacus sed faucibus. Nec, natoque semper rutrum dui.
          Curabitur in commodo pretium lacinia feugiat. A ultricies quis
          commodo, nisl, vestibulum, feugiat dolor. Tincidunt orci consequat,
          pellentesque leo dui nunc ac, amet. A proin pulvinar nec nibh
          bibendum. Nec mi mattis vulputate dictum platea pharetra, id id.
        </p>
      </div>
      <div className="images_sec_7">
        <Image
          src="/section_7_mobile/iPhone_sec_7.svg"
          width={255}
          height={255}
          alt="sec_7_mobile_1"
          className="sec_7_mobile_1"
        />
        <Image
          src="/section_7_mobile/iPhone_sec_7_2.svg"
          width={255}
          height={255}
          alt="sec_7_mobile_2"
          className="sec_7_mobile_2"
        />
        <Image
          src="/section_7_mobile/screen_sec_7.svg"
          width={255}
          height={255}
          alt="screen_sec_7"
          className="screen_sec_7"
        />
      </div>
    </section>
  );
};

export default Section_7;
