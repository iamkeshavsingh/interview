import { useSelector } from "react-redux";

function useUsers() {

  const { userDetails, userType } = useSelector(({ user }) => user);

  return {
    users: userDetails,
    type: userType,
  };
}

export default useUsers;
