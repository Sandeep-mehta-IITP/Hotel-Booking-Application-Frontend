import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const OwnerRoute = ({ children }) => {
  const { isAuthenticated, userData } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // optional role check (future ready)
  if (userData?.role !== "hotelOwner") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default OwnerRoute;
