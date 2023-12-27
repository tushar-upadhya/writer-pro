import { useState } from "react";
import CommonButton from "./common/CommonButton";
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
    setText(text.charAt(0).toUpperCase() + text.slice(1));
  };

  const textFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="fixed bottom-0 flex flex-col flex-wrap items-center justify-start w-full h-16 max-w-full px-2 -ml-4 overflow-x-auto overflow-y-hidden select-none md:flex-row md:justify-center bg-zinc-900">
      <CommonButton onClick={lowerCase} type="lowercase" />

      <CommonButton onClick={upperCase} type="uppercase" />

      <CommonButton onClick={capitalize} type="capitalize" />

      <CommonButton onClick={textFile} type="save" />

      <CommonButton
        onClick={() => setIsTemplateVisible(!isTemplateVisible)}
        type="templates"
      />
      {isTemplateVisible && (
        <Templates
          setText={setText}
          onClose={() => setIsTemplateVisible(false)}
        />
      )}

      <a href="https://github.com/tushar-upadhya/writer-pro" target="_blank">
        <CommonButton type="code" />
      </a>
    </div>
  );
};

export default ToolBox;
