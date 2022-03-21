import React, {useState, useContext} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm'; 

const EditScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const {state, editBlogPost } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === id);
    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <BlogPostForm
            initialValues={{title: blogPost.title, content: blogPost.content}}
            onSubmit={(title,content) => {editBlogPost(id,title,content, () => navigation.pop())}}
        />
    );
};

const style = StyleSheet.create({});

export default EditScreen;