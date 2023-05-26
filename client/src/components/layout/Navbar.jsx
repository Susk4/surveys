import NavCenter from "./NavCenter";
import NavEnd from "./NavEnd";
import NavStart from "./NavStart";
import { useSelector } from "react-redux";
import { getLoggedInUser } from "../../state/authSlice";

export default function Navbar() {
  const user = useSelector(getLoggedInUser);

  return (
    <div className="navbar bg-base-100">
      <NavStart />
      {user && <NavCenter />}
      <NavEnd />
    </div>
  );
}
