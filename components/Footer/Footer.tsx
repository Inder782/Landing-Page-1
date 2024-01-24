import React from "react";
import "./styles.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="headings ">
        <div className="flex flex-col gap-8">
          <h1 className="font-bold">Categories</h1>
          <ol>User Experience</ol>
          <ol>User Interface</ol>
          <ol>Digital Media</ol>
          <ol>Lifestyle</ol>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="font-bold">Products</h1>
          <ol>User Experience</ol>
          <ol>User Interface</ol>
          <ol>Digital Media</ol>
          <ol>Lifestyle</ol>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="font-bold">Solutions</h1>
          <ol>User Experience</ol>
          <ol>User Interface</ol>
          <ol>Digital Media</ol>
          <ol>Lifestyle</ol>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="font-bold">Resources</h1>
          <ol>User Experience</ol>
          <ol>User Interface</ol>
          <ol>Digital Media</ol>
          <ol>Lifestyle</ol>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="font-bold">Support</h1>
          <ol>User Experience</ol>
          <ol>User Interface</ol>
          <ol>Digital Media</ol>
          <ol>Lifestyle</ol>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="font-bold">Company</h1>
          <ol>User Experience</ol>
          <ol>User Interface</ol>
          <ol>Digital Media</ol>
          <ol>Lifestyle</ol>
        </div>
      </div>
      <div className="bottom ">
        <h1 className="year">Flowt @ 2023</h1>
        <h1 className="year">Terms of Service</h1>
        <h1 className="year">Privacy Policy</h1>
        <h1 className="year">Manage Cookies</h1>
        <div className="flex gap-3">
          <Image
            src="/icons/facebook.svg"
            width={25}
            height={25}
            alt="facebook"
          />
          <Image
            src="/icons/instagram.svg"
            width={25}
            height={25}
            alt="instagram"
          />
          <Image
            src="/icons/linkedin.svg"
            width={25}
            height={25}
            alt="linkedin"
          />
          <Image
            src="/icons/twitter.svg"
            width={25}
            height={25}
            alt="twitter"
          />
          <Image
            src="/icons/youtube.svg"
            width={25}
            height={25}
            alt="youtube"
          />
        </div>
        <div className="stores">
          <Image
            src="/stores_logo/app_store.svg"
            width={95}
            height={25}
            alt="app"
          />
          <Image
            src="/stores_logo/Button.svg"
            width={95}
            height={25}
            alt="app"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
