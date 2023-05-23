import { useNavigate } from "react-router-dom";

export default function NavEnd() {
  const navigation = useNavigate();

  const handleGetStarted = () => {
    navigation("/login");
  };

  return (
    <div className="navbar-end">
      <a>Hi {"<user>"} </a>
      <a className="btn btn-primary">Logout</a>
      <a className="btn btn-secondary" onClick={handleGetStarted}>
        Get started
      </a>
    </div>
  );
}
