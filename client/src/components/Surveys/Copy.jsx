import React from "react";
import { AiFillCopy } from "react-icons/ai";

export default function Copy() {
  return (
    <div className="tooltip" data-tip="Copy">
      <button className="btn btn-square">
        <AiFillCopy className="w-6 h-6" />
      </button>
    </div>
  );
}
