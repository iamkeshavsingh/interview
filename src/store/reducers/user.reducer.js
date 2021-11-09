import { MARK_POST_VIEWED } from "../actions/user/user.constant";

const INIT_STATE = {
  userDetails: {},
  postViewed: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case MARK_POST_VIEWED:
      return { ...state, postViewed: [...state.postViewed, action.id] };
    default:
      return state;
  }
}

export default reducer;
