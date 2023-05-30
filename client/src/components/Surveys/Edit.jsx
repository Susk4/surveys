import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import Alert from "../NewSurvey/Alert";
import { usePatchSurveyMutation } from "../../state/surveysApiSlice";

export default function Edit({ surveyName, surveyContent, surveyId }) {
  const [surveyData, setSurveyData] = useState(
    surveyName + "\n\n" + surveyContent
  );
  const [errors, seterrors] = useState([]);

  const [patchSurvey] = usePatchSurveyMutation();

  const handleOnChange = (e) => {
    setSurveyData(e.target.value);
  };
  const submitSurvey = async () => {
    const newErrors = [];
    if (surveyData === "") {
      newErrors.push("Survey structure can not be empty.");
    }
    const title = surveyData.split("\n\n")[0];
    const dataSlice = surveyData.split("\n\n").slice(1);

    if (dataSlice.length === 0) {
      newErrors.push("Survey structure must contain at least one page");
    }
    if (
      dataSlice.some((page) => {
        const questions = page.split("\n").slice(1);

        return questions.length === 0;
      })
    ) {
      newErrors.push(
        "Survey structure must contain at least one question per page"
      );
    }
    seterrors(newErrors);
    if (newErrors.length === 0) {
      const body = {
        name: title,
        content: surveyData.substring(surveyData.indexOf("\n\n") + 2),
      };
      console.log(surveyId, body);

      await patchSurvey({ id: surveyId, ...body }).unwrap();
      try {
      } catch (error) {
        newErrors.push("Register error");
        setErrors(newErrors);
      }
    }
  };
  return (
    <div className="tooltip" data-tip="Edit">
      <label
        htmlFor={`edit-survey-modal${surveyId}`}
        className="btn btn-square"
      >
        <AiFillEdit className="w-6 h-6" />
      </label>
      <input
        type="checkbox"
        id={`edit-survey-modal${surveyId}`}
        className="modal-toggle"
      />
      <label
        htmlFor={`edit-survey-modal${surveyId}`}
        className="modal cursor-pointer"
      >
        <label className="modal-box relative flex flex-col gap-3" htmlFor="">
          <h3 className="text-lg font-bold">Edit survey</h3>
          <div className="flex flex-col gap-2">
            <textarea
              className={`textarea textarea-bordered  textarea-lg w-full h-64 ${
                errors.length != 0 ? "textarea-error" : "textarea-secondary"
              }`}
              placeholder="Type survey structure"
              onChange={handleOnChange}
              defaultValue={surveyData}
            ></textarea>
            {errors.map((e) => (
              <Alert title={e} />
            ))}
          </div>
          <div className="flex flex-row justify-end">
            <button
              className="btn btn-secondary"
              onClick={() => submitSurvey()}
            >
              Submit changes
            </button>
          </div>
        </label>
      </label>
    </div>
  );
}
