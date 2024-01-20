import React from "react";
import "./styles.css";
import Image from "next/image";

const Section_6 = () => {
  return (
    <section className="section_6">
      <Image
        src="/Mobile_phone_sec_6/iPhone_sec_6.svg"
        width={283}
        height={575}
        alt="iphone_sec_6"
      />
      <Image
        src="/Mobile_phone_sec_6/pic_sec_6.svg"
        width={283}
        height={575}
        alt="iphone_sec_6"
        className="pic_sec_6"
      />
      <div className="sec_6_headings">
        <h1 className="title_sec_6">Sagittis sapien viverra</h1>
        <p className="p_sec_6">
          Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor
          tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate
          facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna
          massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus
          bibendum risus auctor lacus tristique arcu. Arcu hac cursus faucibus
          id. Eu integer parturient risus magna eget massa. Risus molestie
          tempor, faucibus non ultricies. Nam vel mattis quis dui, condimentum
          mi volutpat ut aliquam.
        </p>
      </div>
    </section>
  );
};

export default Section_6;
