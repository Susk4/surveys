import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDeleteSurveyMutation } from "../../state/surveysApiSlice";

export default function Delete({ surveyId, refetch }) {
  const [surveyDelete] = useDeleteSurveyMutation();
  const handleOnclick = async () => {
    try {
      await surveyDelete(surveyId).unwrap();
    } catch (error) {
      console.error(error);
    }
    refetch();
  };

  return (
    <div className="tooltip" data-tip="Delete">
      <button className="btn btn-square" onClick={() => handleOnclick()}>
        <AiFillDelete className="w-6 h-6" />
      </button>
    </div>
  );
}
