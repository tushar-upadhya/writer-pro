"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Broadcast = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    axios.get("https://itsvg.in/api/broadcast").then((res) => {
      if (res.data.title) {
        setTitle(res.data.title);
        setLink(res.data.link);
        setIsVisible(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 15000);
      }
    });
  }, []);

  return (
    <>
      {isVisible && (
        <div className="h-8">
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-8 text-xs text-white transition-all ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:text-sm md:text-base">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Broadcast;
