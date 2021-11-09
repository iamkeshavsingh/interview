import { blogAxiosProtected } from "../../../utils/axios";
import { SAVE_USER_DETAILS, MARK_POST_VIEWED } from "./user.constant";



export const fetchUserDetails = () => {
  return async function (dispatch) {
    const userDetails = await blogAxiosProtected.get('/users/');
    dispatch(saveUser(userDetails.data));
  }
}

export const saveUser = (user) => {
  return {
    type: SAVE_USER_DETAILS,
    user,
  };
};

export const markPostAsViwed = (id) => {
  return {
    type: MARK_POST_VIEWED,
    id: id,
  };
};
