import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLoggedInUser } from "../../state/authSlice";

export default function Home() {
  const user = useSelector(getLoggedInUser);
  const navigation = useNavigate();

  const handleGetStarted = () => {
    navigation("/login");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center gap-8">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
        Welcome to Surveys📊
      </h1>
      <p className="text-xl md:text-2xl lg:text-3xl ">
        Create, Collect, and Analyze with Ease
      </p>

      <div className="mx-auto grid grid-cols-2 max-w-5xl gap-10 ">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold ">
            Create Stunning Surveys in Minutes
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mt-2 ">
            Say goodbye to complicated survey tools! With Surveys, you can
            effortlessly design visually appealing surveys that capture the
            attention of your audience.
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  ">
            Review Results with Powerful Analytics
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mt-2">
            Uncover meaningful patterns and actionable insights from your survey
            data. Surveys's robust analytics engine provides you with real-time,
            comprehensive reports and visualizations.
          </p>
        </div>
      </div>
      {!user && (
        <a className="btn btn-secondary" onClick={handleGetStarted}>
          Get started
        </a>
      )}
    </div>
  );
}
