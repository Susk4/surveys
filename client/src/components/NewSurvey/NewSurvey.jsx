import React from "react";
import { useState } from "react";
import Alert from "./Alert";
import { useCreateSurveyMutation } from "../../state/surveysApiSlice";

export default function NewSurvey() {
  const [surveyData, setSurveyData] = useState("");
  const [errors, seterrors] = useState(["Default error"]);

  const [createSurvey] = useCreateSurveyMutation();

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
    console.log(dataSlice);
    if (dataSlice.length === 0) {
      newErrors.push("Survey structure must contain at least one page");
    }
    if (
      dataSlice.some((page) => {
        const questions = page.split("\n").slice(1);
        console.log(questions);
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
      console.log(body);
      await createSurvey(body).unwrap();
      try {
      } catch (error) {
        newErrors.push("Register error");
        setErrors(newErrors);
      }
    }
  };
  return (
    <>
      <label htmlFor="survey-modal" className="btn btn-secondary">
        New Survey
      </label>
      <input type="checkbox" id="survey-modal" className="modal-toggle" />
      <label htmlFor="survey-modal" className="modal cursor-pointer">
        <label className="modal-box relative flex flex-col gap-3" htmlFor="">
          <h3 className="text-lg font-bold">Add new Survey</h3>
          <div className="flex flex-col gap-2">
            <textarea
              className={`textarea textarea-bordered  textarea-lg w-full h-64 ${
                errors.length != 0 ? "textarea-error" : "textarea-secondary"
              }`}
              placeholder="Type survey structure"
              onChange={handleOnChange}
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
              Submit New Survey
            </button>
          </div>
        </label>
      </label>
    </>
  );
}
