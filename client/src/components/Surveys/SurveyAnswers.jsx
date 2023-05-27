import React from "react";

import { AiFillBell } from "react-icons/ai";

export default function SurveyAnswers() {
  return (
    <div className="tooltip" data-tip="Answers">
      <button className="btn btn-square">
        <AiFillBell className="w-6 h-6" />
      </button>
    </div>
  );
}
