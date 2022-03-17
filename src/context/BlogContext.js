import React, { useState} from 'react';

const BlogContext = React.createContext();


export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, {title: `Blog post #${blogPosts.length + 1}`}]);
    };
    return (<BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
        {children}
    </BlogContext.Provider>);
    const editBlogPost = () => {};
    const deleteBlogPost = () => {};
};

export default BlogContext;