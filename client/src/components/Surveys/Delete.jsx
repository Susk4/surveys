import React from "react";
import { AiFillDelete } from "react-icons/ai";

export default function Delete() {
  return (
    <div className="tooltip" data-tip="Delete">
      <button className="btn btn-square">
        <AiFillDelete className="w-6 h-6" />
      </button>
    </div>
  );
}
