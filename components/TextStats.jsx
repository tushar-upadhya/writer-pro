import { PieChart, BarChart2, MinusCircle, PlusCircle } from "lucide-react";

const TextStats = ({
  letterCount,
  wordCount,
  lineCount,
  memory,
  decreaseTextSize,
  increaseTextSize,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center text-stats h-max">
      <p className="flex flex-row text-3xl font-normal">
        <PieChart className="w-8 h-8 mr-1" />
        Statistics
      </p>
      <div className="flex flex-col">
        <p className="mt-4">{letterCount} characters</p>
        <p className="mt-4">{wordCount} words</p>
        <p className="mt-4">{lineCount} lines</p>
        <p className="mt-4">{memory} Kb</p>
      </div>
      <p className="flex flex-row text-3xl font-normal mt-9">
        <BarChart2 className="w-10 h-10 mr-1" />
        Text Size
      </p>
      <div className="flex flex-row mt-2">
        <div
          className="mx-1 transition-all duration-200 hover:text-[#EFEFEF] transform cursor-pointer hover:scale-105 active:scale-100"
          onClick={decreaseTextSize}
        >
          <MinusCircle className="w-8 h-8" />
        </div>
        <div
          className="mx-1 transition-all duration-200 hover:text-[#EFEFEF] ease-in-out transform cursor-pointer hover:scale-105 active:scale-100"
          onClick={increaseTextSize}
        >
          <PlusCircle className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default TextStats;
