import Navbar from "@/components/Navbar/Navbar";
import Section from "@/components/section_1/Section";
import Section_2 from "@/components/section_2/Section_2";
import Section_3 from "@/components/section_3/Section_3";
import Section_4 from "@/components/section_4/Section_4";
import Section_5 from "@/components/section_5/Section_5";
import Section_6 from "@/components/section_6/Section_6";
import Section_7 from "@/components/section_7/Section_7";
import Section_8 from "@/components/section_8/Section_8";

import React from "react";

const page = () => {
  return (
    <div className="max-sm:overflow-hidden max-md:overflow-hidden max-lg:overflow-hidden">
      <Navbar />
      <Section />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <Section_7 />
      <Section_8 />
    </div>
  );
};

export default page;
