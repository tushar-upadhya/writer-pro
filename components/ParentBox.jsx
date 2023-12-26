"use client";

import { useEffect, useState } from "react";
import ToolBox from "./ToolBox";
import { PLACEHOLDER } from "@/utils/util";

const ParentBox = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (localStorage.getItem("WriterPro-lastSave")) {
      setText(localStorage.getItem("WriterPro-lastCode"));
    }
  }, []);

  const [letterCount, setLetterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [lineCount, setLineCount] = useState(0);
  const [memory, setMemory] = useState(0);
  const [textSize, setTextSize] = useState(0);

  useEffect(() => {
    setLetterCount(text.length);
    localStorage.setItem("proWriter-lastSave", text);
    if (text.length > 0 && text != " ") {
      setWordCount(text.match(/(\w+)/g)?.length || 0);
      setLineCount(text.split(/\r\n|\r|\n/)?.length || 0);

      setMemory(Math.round((text.length * 0.001 + Number.EPSILON) * 100) / 100);
    } else {
      setWordCount(0);
      setLineCount(0);
      setMemory(0);
    }
  }, [text]);

  const decreaseTextSize = () => {
    if (textSize > 1) {
      setTextSize(textSize - 1);
    }
  };

  const increaseTextSize = () => {
    if (textSize < 5) {
      setTextSize(textSize + 1);
    }
  };
  useEffect(() => {
    let textAreaStyle = document.getElementById("textarea").style;
    if (textSize === 1) {
      textAreaStyle.fontSize = "0.875rem";
      textAreaStyle.lineHeight = "1.25rem";
    }
    if (textSize === 2) {
      textAreaStyle.fontSize = "1rem";
      textAreaStyle.lineHeight = "1.5rem";
    }
    if (textSize === 3) {
      textAreaStyle.fontSize = "1.125rem";
      textAreaStyle.lineHeight = "1.75rem";
    }
    if (textSize === 4) {
      textAreaStyle.fontSize = "1.25rem";
      textAreaStyle.lineHeight = "1.75rem";
    }
    if (textSize === 5) {
      textAreaStyle.fontSize = "1.5rem";
      textAreaStyle.lineHeight = "2rem";
    }
  }, [textSize]);

  return (
    <>
      <div className="flex flex-col pb-14 md:pb-0 md:flex-row">
        <div className="self-start py-4 my-2">
          <textarea
            name=""
            id="textarea"
            cols="30"
            rows="10"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={PLACEHOLDER}
            className="pr-2 text-xl bg-transparent outline-none selection:bg-fuchsia-500 selection:text-fuchsia-50"
          ></textarea>
        </div>
        {/* Text Stats */}
        <div className="flex flex-col items-center justify-center w-full text-center text-stats h-max">
          <p className="flex flex-row text-3xl font-normal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
            Statistics
          </p>
          <div className="flex flex-col">
            <p className="mt-4">{letterCount} characters</p>
            <p className="mt-4">{wordCount} words</p>
            <p className="mt-4">{lineCount} lines</p>
            <p className="mt-4">{memory} Kb</p>
          </div>
          <p className="flex flex-row text-3xl font-normal mt-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            Text Size
          </p>
          <div className="flex flex-row mt-2">
            <div
              className="mx-1 transition-all duration-100 ease-in-out transform cursor-pointer hover:scale-105 active:scale-100"
              onClick={decreaseTextSize}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div
              className="mx-1 transition-all duration-100 ease-in-out transform cursor-pointer hover:scale-105 active:scale-100"
              onClick={increaseTextSize}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ToolBox text={text} setText={setText} />
    </>
  );
};

export default ParentBox;
