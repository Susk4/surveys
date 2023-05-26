import { useNavigate } from "react-router-dom";

export default function NavCenter() {
  const navigation = useNavigate();

  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <a onClick={() => navigation("/surveys")}>My Surveys</a>
        </li>
        <li>
          <a onClick={() => navigation("/answers")}>Answers</a>
        </li>
      </ul>
    </div>
  );
}
