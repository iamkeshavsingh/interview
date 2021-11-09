import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function withAuth(Component) {
  return function () {
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate({
          pathname: "/",
        });
        return null;
      }
    }, []);
    return <Component />;
  };
}

export default withAuth;
