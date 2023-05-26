import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser, logout } from "../../state/authSlice";

export default function NavEnd() {
  const navigation = useNavigate();
  const user = useSelector(getLoggedInUser);
  const dispatch = useDispatch();

  const handleGetStarted = () => {
    navigation("/login");
  };

  if (!user) {
    return (
      <div className="navbar-end flex gap-2">
        <p className="text-lg">You need to login!</p>
        <a className="btn btn-secondary" onClick={handleGetStarted}>
          Get started
        </a>
      </div>
    );
  }

  return (
    <div className="navbar-end flex gap-2">
      <p className="text-lg">
        Hi <span className="font-bold">{user.email}</span>
      </p>
      <a className="btn btn-primary btn-md" onClick={() => dispatch(logout())}>
        Logout
      </a>
    </div>
  );
}
