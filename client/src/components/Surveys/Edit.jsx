import React from "react";
import { AiFillEdit } from "react-icons/ai";

export default function Edit() {
  return (
    <div className="tooltip" data-tip="Edit">
      <button className="btn btn-square">
        <AiFillEdit className="w-6 h-6" />
      </button>
    </div>
  );
}
