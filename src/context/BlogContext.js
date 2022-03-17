import React, { useReducer} from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {

};

export const BlogProvider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    
    return (<BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
        {children}
    </BlogContext.Provider>);
    const editBlogPost = () => {};
    const deleteBlogPost = () => {};
};

export default BlogContext;