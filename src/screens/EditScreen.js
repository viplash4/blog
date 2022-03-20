import React, {useState, useContext} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({navigation}) => {
    const {state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));
    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View>
            <Text>Edit title:</Text>
            <TextInput value={title} onChangeText={(newTitle) => setTitle(newTitle)}/>
            <Text>Edit content:</Text>
            <TextInput value={content} onChangeText={(newContent) => setContent(newContent)}/>
        </View>
    );
};

const style = StyleSheet.create({});

export default EditScreen;