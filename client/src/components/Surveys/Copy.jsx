import React from "react";
import { AiFillCopy } from "react-icons/ai";

export default function Copy({ surveyHash }) {
  const baseUrl = "https://localhost:5173/surveys/";
  const handleOnClick = () => {
    navigator.clipboard.writeText(baseUrl + surveyHash);
  };
  return (
    <div className="tooltip" data-tip="Copy">
      <button className="btn btn-square" onClick={() => handleOnClick()}>
        <AiFillCopy className="w-6 h-6" />
      </button>
    </div>
  );
}
