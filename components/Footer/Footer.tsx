import React from "react";
import "./styles.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="footer ">
      <div className="headings ">
        <div className="flex flex-col gap-8">
          <h1 className="font-bold">Categories</h1>
          <Link href="/">User Experience</Link>
          <Link href="/">User Interface</Link>
          <Link href="/">Digital Media</Link>
          <Link href="/">Lifestyle</Link>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="font-bold">Products</h1>
          <Link href="/">Pricing</Link>
          <Link href="/">Overview</Link>
          <Link href="/">Browse</Link>
          <Link href="/">Accessbility</Link>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="font-bold">Solutions</h1>
          <Link href="/">Brain Storming</Link>
          <Link href="/">Ideation</Link>
          <Link href="/">Wireframing</Link>
          <Link href="/">Research</Link>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="font-bold">Resources</h1>
          <Link href="/">Help Center</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Tutorials</Link>
          <Link href="/">FAQs</Link>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="font-bold">Support</h1>
          <Link href="/">Contact Us</Link>
          <Link href="/">Developers</Link>
          <Link href="/">Deocumentation</Link>
          <Link href="/">Integeration</Link>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="font-bold">Company</h1>
          <Link href="/">About</Link>
          <Link href="/">Press</Link>
          <Link href="/">Events</Link>
          <Link href="/">Request Demo</Link>
        </div>
      </div>
      <div className="bottom ">
        <Link href="/">
          <h1 className="year">Flowt @ 2023</h1>
        </Link>
        <Link href="/">
          <h1 className="year">Terms of Service</h1>
        </Link>
        <Link href="/">
          <h1 className="year">Privacy Policy</h1>
        </Link>
        <Link href="/">
          {" "}
          <h1 className="year">Manage Cookies</h1>
        </Link>

        <div className="flex gap-3">
          <Link href="/">
            <Image
              src="/icons/facebook.svg"
              width={25}
              height={25}
              alt="facebook"
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/instagram.svg"
              width={25}
              height={25}
              alt="instagram"
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/linkedin.svg"
              width={25}
              height={25}
              alt="linkedin"
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/twitter.svg"
              width={25}
              height={25}
              alt="twitter"
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/youtube.svg"
              width={25}
              height={25}
              alt="youtube"
            />
          </Link>
        </div>
        <div className="stores">
          <Link href="/">
            <Image
              src="/stores_logo/app_store.svg"
              width={95}
              height={25}
              alt="app"
            />
          </Link>
          <Link href="/">
            <Image
              src="/stores_logo/Button.svg"
              width={95}
              height={25}
              alt="app"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
