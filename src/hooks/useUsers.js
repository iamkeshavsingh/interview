import { useEffect, useState } from "react";
import { blogAxiosProtected } from "../utils/axios";
import { userType } from "../utils/enum";

function useUsers() {
  const [users, setUsers] = useState({});
  const [type, setType] = useState(null);

  useEffect(() => {
    blogAxiosProtected.get("/users/").then((response) => {
      var userList = response.data;
      if (userList.length > 1) {
        return setType(userType.admin);
      }
      setType(userType.normal);
      setUsers(userList[0]);
    });
  }, []);

  return {
    users,
    type,
  };
}

export default useUsers;
