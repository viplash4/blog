import React, {useContext, useState} from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm'; 

const CreateScreen = ({navigation}) => {
    

    const {addBlogPost} = useContext(Context);

    return <BlogPostForm onSubmit={ (title, content) =>{
        addBlogPost(title,content, () => navigation.navigate('Index'))
    }}/>
    
};


const style = StyleSheet.create({
    
});


export default CreateScreen;