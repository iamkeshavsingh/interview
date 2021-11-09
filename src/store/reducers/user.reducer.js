import { userType } from "../../utils/enum";
import { MARK_POST_VIEWED, SAVE_USER_DETAILS } from "../actions/user/user.constant";

const INIT_STATE = {
  userDetails: [],
  postViewed: [],
  userType: null
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case MARK_POST_VIEWED:
      return { ...state, postViewed: [...state.postViewed, action.id] };
    case SAVE_USER_DETAILS:
      return { ...state, userDetails: action.user, userType: action.user.length > 1 ? userType.admin : userType.normal };
    default:
      return state;
  }
}

export default reducer;
