import {
  CaseLower,
  CaseSensitive,
  CaseUpper,
  Github,
  Save,
  LayoutPanelTop,
} from "lucide-react";

const CommonButton = ({ onClick, type }) => {
  let Icon, buttonText;

  switch (type) {
    case "lowercase":
      Icon = CaseLower;
      buttonText = "lowercase";
      break;

    case "uppercase":
      Icon = CaseUpper;
      buttonText = "UPPERCASE";
      break;

    case "capitalize":
      Icon = CaseSensitive;
      buttonText = "Capitalize";
      break;

    case "save":
      Icon = Save;
      buttonText = "Save as .txt";
      break;

    case "code":
      Icon = Github;
      buttonText = "Source Code";
      break;

    case "templates":
      Icon = LayoutPanelTop;
      buttonText = "Templates";
      break;

    default:
      Icon = null;
      buttonText = "";
  }

  return (
    <div
      className="inline-flex flex-col items-center justify-center ml-2 cursor-pointer w-28 transition-all duration-200 hover:text-[#EFEFEF]"
      onClick={onClick}
    >
      <Icon className="w-6 h-6 " />
      {buttonText}
    </div>
  );
};

export default CommonButton;
