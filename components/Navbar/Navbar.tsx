import React from "react";
import "./styles.css";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link href="/">flowt</Link>
      </div>
      <div className="links">
        <Link href="/" className="p-8">
          Home
        </Link>
        <Link href="/" className="p-8">
          Solutions
        </Link>
        <Link href="/" className="p-8">
          Pricing
        </Link>
        <Link href="/" className="p-8">
          Developers
        </Link>
      </div>
      <div className="buttons">
        <button className="log_in">Log In</button>
        <button className="btn_1">Publish App</button>
      </div>
      <Sheet>
        <SheetTrigger className="min-[1435px]:hidden text-2xl">☰</SheetTrigger>
        <SheetContent className="sheet">
          {" "}
          <Link href="/" className="p-8 ">
            Home
          </Link>
          <Link href="/" className="p-8">
            Solutions
          </Link>
          <Link href="/" className="p-8">
            Pricing
          </Link>
          <Link href="/" className="p-8">
            Developers
          </Link>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
