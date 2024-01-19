import Navbar from "@/components/Navbar/Navbar";
import Section from "@/components/section_1/Section";
import Section_2 from "@/components/section_2/Section_2";
import Section_3 from "@/components/section_3/Section_3";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Section />
      <Section_2 />
      <Section_3 />
    </div>
  );
};

export default page;
