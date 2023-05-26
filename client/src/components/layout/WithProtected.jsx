import { useSelector } from "react-redux";
import { getLoggedInUser } from "../../state/authSlice";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const WithProtected = ({ children }) => {
  let user = useSelector(getLoggedInUser);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
