
import { blogAxios } from "../../../utils/axios"
import { FETCH_BLOG_SUCCESS, INCREASE_BLOG_VIEW } from "./blogs.constant"

export const fetchBlogs = () => {
    return async function (dispatch) {
        blogAxios.get('/post/')
            .then(response => {
                dispatch(fetchBlogsSuccess(response.data));
            })
    }
}

export const increaseViewOfPost = (id) => {
    return {
        type: INCREASE_BLOG_VIEW,
        id
    };
}

function fetchBlogsSuccess(data) {
    return {
        type: FETCH_BLOG_SUCCESS,
        data
    }
}