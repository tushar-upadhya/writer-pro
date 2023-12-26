"use client";

import { magicSpell } from "@/utils/magicSpell";
import { useState } from "react";
import Templates from "./Templates";

const ToolBox = ({ text, setText }) => {
  const [isTemplateVisible, setIsTemplateVisible] = useState(false);

  const lowerCase = () => {
    setText(text.toLowerCase());
  };

  const upperCase = () => {
    setText(text.toUpperCase());
  };

  const capitalize = () => {
    let str = text;
    str = str.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);

    // Word Counts
    // Split the string into an array of characters
    str.split("").forEach((char, i) => {
      // Check if the current character is a period and the next character is a space
      // Also check if the current index is less than the length of the string minus 2
      if (char === "." && str.charAt(i + 1) === " " && i + 2 < str.length) {
        // If the conditions are met, capitalize the character after the space
        // This is done by taking the substring before the character to be capitalized
        // Then adding the capitalized character
        // And finally adding the rest of the string after the capitalized character
        str =
          str.substring(0, i + 2) +
          str.charAt(i + 2).toUpperCase() +
          str.substring(i + 3);
      }
    });
    // Set the text to the modified string
    setText(str);
  };

  const textFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "WriterPro.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <>
      <div className="fixed bottom-0 flex flex-col flex-wrap items-center justify-start w-full h-16 max-w-full px-2 -ml-4 overflow-x-auto overflow-y-hidden select-none md:flex-row md:justify-center bg-zinc-900">
        {/* Magic Spell */}
        <div
          className="inline-flex flex-col items-center justify-center cursor-pointer w-28"
          onClick={magicSpell}
          title="Add relevant characters to your text to make it even more longer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
          Magic Spell
        </div>
        {/* Lowercase */}
        <div
          className="inline-flex flex-col items-center justify-center cursor-pointer w-28"
          onClick={lowerCase}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
            />
          </svg>
          lowercase
        </div>
        {/* Uppercase */}
        <div
          className="inline-flex flex-col items-center justify-center ml-2 cursor-pointer w-28"
          onClick={upperCase}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          UPPERCASE
        </div>
        {/* capitalize */}
        <div
          className="inline-flex flex-col items-center justify-center ml-2 cursor-pointer w-28"
          onClick={capitalize}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z" />
          </svg>
          Capitalise
        </div>
        {/* Save TXT */}
        <div
          className="inline-flex flex-col items-center justify-center w-24 ml-2 cursor-pointer"
          onClick={textFile}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3"
            />
          </svg>
          Save as .txt
        </div>
        {/* Temlpate */}
        <div
          className="inline-flex flex-col items-center justify-center w-24 ml-2 cursor-pointer h-max"
          onClick={() => setIsTemplateVisible(!isTemplateVisible)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            />
          </svg>
          Templates
        </div>
        {isTemplateVisible && (
          <Templates
            setText={setText}
            onClose={() => setIsTemplateVisible(false)}
          />
        )}
        {/* Contribute */}
        <a
          className="inline-flex flex-col items-center justify-center w-24 ml-2 cursor-pointer"
          href="https://github.com/VishwaGauravIn/pro-writer"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="-0.5 -1 17 17"
            stroke="currentColor"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          Contribute
        </a>
        {/* About */}
        <a
          className="inline-flex flex-col items-center justify-center w-24 ml-2 cursor-pointer"
          href="https://itsvg.in"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          About Us
        </a>
      </div>
    </>
  );
};

export default ToolBox;
