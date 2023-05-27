import { useGetSurveysQuery } from "../../state/surveysApiSlice";
import { getLoggedInUser } from "../../state/authSlice";
import { useSelector } from "react-redux";

import Delete from "./Delete";
import Edit from "./Edit";
import Copy from "./Copy";
import SurveyAnswers from "./SurveyAnswers";

export default function Surveys() {
  const user = useSelector(getLoggedInUser);

  console.log(user.id);
  const { data, isLoading } = useGetSurveysQuery(user.id);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (!data) {
    return <div>No surveys to display</div>;
  }

  return (
    <div className="overflow-x-auto flex justify-center p-2">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th className="w-12"></th>
            <th>Name</th>
            <th>Date of creation</th>
            <th className="flex justify-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((survey, index) => {
            return (
              <tr>
                <th>{index}</th>
                <td>{survey.name}</td>
                <td>{new Date(survey.createdAt).toDateString()}</td>
                <td className="flex justify-end gap-2">
                  <Delete />
                  <Edit />
                  <Copy />
                  <SurveyAnswers />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
