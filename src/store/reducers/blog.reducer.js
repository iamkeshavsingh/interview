import { FETCH_BLOG_SUCCESS, INCREASE_BLOG_VIEW } from "../actions/blogs/blogs.constant";

const INIT_STATE = {
  blogs: null,
};


function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FETCH_BLOG_SUCCESS:
      return { ...state, blogs: action.data };
    case INCREASE_BLOG_VIEW:
      var id = action.id;
      var newBlogs = [...state.blogs];
      var selectedBlog = newBlogs.find(blog => blog.id == id);
      selectedBlog.number_of_views += 1;
      return { ...state, blogs: newBlogs };
    default: return state;
  }
}

export default reducer;