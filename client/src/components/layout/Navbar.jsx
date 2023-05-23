import NavCenter from "./NavCenter";
import NavEnd from "./NavEnd";
import NavStart from "./NavStart";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <NavStart />
      <NavCenter />
      <NavEnd />
    </div>
  );
}
