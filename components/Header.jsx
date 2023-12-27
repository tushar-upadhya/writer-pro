"use client";

import { useEffect } from "react";

import Image from "next/image";
import logo from "../assets/logo.png";
import { amber, cyan, fuchsia, green, rose } from "@/utils/utilColor";

const Header = () => {
  useEffect(() => {
    if (localStorage.getItem("favTheme") === "fuchsia") {
      fuchsia();
    }
    if (localStorage.getItem("favTheme") === "cyan") {
      cyan();
    }
    if (localStorage.getItem("favTheme") === "rose") {
      rose();
    }
    if (localStorage.getItem("favTheme") === "amber") {
      amber();
    }
    if (localStorage.getItem("favTheme") === "green") {
      green();
    }
  }, []);

  return (
    <div>
      <div className="flex flex-row">
        <p className="text-4xl">
          <a href="https://tusharupadhyay.vercel.app/" target="_blank">
            <Image
              src={logo}
              height={50}
              width={50}
              alt="logo"
              className="w-12 h-12 ml-2"
            />
          </a>
          Writer Pro
        </p>

        <div className="absolute flex flex-row pt-2 right-4 md:pt-0">
          <div
            className="w-4 h-4 m-1 rounded-full cursor-pointer active:scale-90 bg-fuchsia-400 hover:scale-110"
            onClick={fuchsia}
          />
          <div
            className="w-4 h-4 m-1 rounded-full cursor-pointer active:scale-90 bg-cyan-400 hover:scale-110"
            onClick={cyan}
          />
          <div
            className="w-4 h-4 m-1 rounded-full cursor-pointer active:scale-90 bg-rose-400 hover:scale-110"
            onClick={rose}
          />
          <div
            className="w-4 h-4 m-1 rounded-full cursor-pointer active:scale-90 bg-amber-400 hover:scale-110"
            onClick={amber}
          />
          <div
            className="w-4 h-4 m-1 bg-green-400 rounded-full cursor-pointer active:scale-90 hover:scale-110"
            onClick={green}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
