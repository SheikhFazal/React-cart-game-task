import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/home", { replace: true });
    }
  }, [token, navigate]);

  return <>{children}</>;
};

export default PublicRoute;
