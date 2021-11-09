import { combineReducers } from "redux";

import user from "./user.reducer";
import blog from './blog.reducer';

const rootReducer = combineReducers({
  user: user,
  blogs: blog
});

export default rootReducer;
