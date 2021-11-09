import { useNavigate } from "react-router-dom";

function withAuth(Component) {
  return function () {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    if (!token) {
      navigate({
        pathname: "/auth",
      });
      return null;
    }
    return <Component />;
  };
}

export default withAuth;
