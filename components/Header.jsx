"use client";

import { useEffect } from "react";

import image from "../assets/header.svg";
import Image from "next/image";

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

  const fuchsia = () => {
    document.documentElement.classList.add("fuchsia");
    document.documentElement.classList.remove("cyan");
    document.documentElement.classList.remove("rose");
    document.documentElement.classList.remove("amber");
    document.documentElement.classList.remove("green");
    localStorage.setItem("favTheme", "fuchsia");
  };

  const cyan = () => {
    document.documentElement.classList.add("cyan");
    document.documentElement.classList.remove("fuchsia");
    document.documentElement.classList.remove("rose");
    document.documentElement.classList.remove("amber");
    document.documentElement.classList.remove("green");
    localStorage.setItem("favTheme", "cyan");
  };

  const rose = () => {
    document.documentElement.classList.add("rose");
    document.documentElement.classList.remove("cyan");
    document.documentElement.classList.remove("fuchsia");
    document.documentElement.classList.remove("amber");
    document.documentElement.classList.remove("green");
    localStorage.setItem("favTheme", "rose");
  };

  const amber = () => {
    document.documentElement.classList.add("amber");
    document.documentElement.classList.remove("cyan");
    document.documentElement.classList.remove("fuchsia");
    document.documentElement.classList.remove("fuchsia");
    document.documentElement.classList.remove("green");
    localStorage.setItem("favTheme", "amber");
  };

  const green = () => {
    document.documentElement.classList.add("green");
    document.documentElement.classList.remove("cyan");
    document.documentElement.classList.remove("fuchsia");
    document.documentElement.classList.remove("amber");
    document.documentElement.classList.remove("fuchsia");
    localStorage.setItem("favTheme", "green");
  };

  return (
    <div>
      <div className="flex flex-row">
        <p className="text-4xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          Writer Pro
        </p>

        <div className="absolute flex flex-row pt-2 right-4 md:pt-0">
          <div
            className="w-4 h-4 m-1 rounded-full cursor-pointer active:scale-90 bg-fuchsia-400"
            onClick={fuchsia}
          ></div>
          <div
            className="w-4 h-4 m-1 rounded-full cursor-pointer active:scale-90 bg-cyan-400"
            onClick={cyan}
          ></div>
          <div
            className="w-4 h-4 m-1 rounded-full cursor-pointer active:scale-90 bg-rose-400"
            onClick={rose}
          ></div>
          <div
            className="w-4 h-4 m-1 rounded-full cursor-pointer active:scale-90 bg-amber-400"
            onClick={amber}
          ></div>
          <div
            className="w-4 h-4 m-1 bg-green-400 rounded-full cursor-pointer active:scale-90"
            onClick={green}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
