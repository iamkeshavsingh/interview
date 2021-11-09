import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../store/actions/blogs/blogs.action";

function useBlogById(id) {
    const blogs = useSelector(({ blogs }) => blogs.blogs);
    const dispatch = useDispatch();


    useEffect(() => {
        if (blogs == null) dispatch(fetchBlogs());
    }, []);

    return blogs?.find(blog => blog.id == id);
}


export default useBlogById;