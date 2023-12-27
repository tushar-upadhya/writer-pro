import { PLACEHOLDER } from "@/utils/utilPlaceHolder";

const TextEditor = ({ text, setText }) => {
  return (
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
  );
};

export default TextEditor;
