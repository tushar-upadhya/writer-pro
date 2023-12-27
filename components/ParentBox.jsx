"use client";

import { useEffect, useState } from "react";
import ToolBox from "./ToolBox";
import TextEditor from "./TextEditor";
import TextStats from "./TextStats";

const ParentBox = () => {
  const [text, setText] = useState("");
  const [letterCount, setLetterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [lineCount, setLineCount] = useState(0);
  const [memory, setMemory] = useState(0);
  const [textSize, setTextSize] = useState(0);

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
    if (localStorage.getItem("WriterPro-lastSave")) {
      setText(localStorage.getItem("WriterPro-lastCode"));
    }
  }, []);

  useEffect(() => {
    setLetterCount(text.length);
    localStorage.setItem("proWriter-lastSave", text);
    if (text.length > 0 && text !== " ") {
      setWordCount(text.match(/(\w+)/g)?.length || 0);
      setLineCount(text.split(/\r\n|\r|\n/)?.length || 0);

      setMemory(Math.round((text.length * 0.001 + Number.EPSILON) * 100) / 100);
    } else {
      setWordCount(0);
      setLineCount(0);
      setMemory(0);
    }
  }, [text]);

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
        <TextEditor text={text} setText={setText} />
        <TextStats
          letterCount={letterCount}
          wordCount={wordCount}
          lineCount={lineCount}
          memory={memory}
          textSize={textSize}
          decreaseTextSize={decreaseTextSize}
          increaseTextSize={increaseTextSize}
        />
      </div>
      <ToolBox text={text} setText={setText} />
    </>
  );
};

export default ParentBox;
