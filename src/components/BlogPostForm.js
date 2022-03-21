import React, {useState, useContext} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';


const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return (<View>
        <Text style={style.label}>Enter title: </Text>
        <TextInput value={title} onChangeText={text => setTitle(text)} style={style.input}/>
        <Text style={style.label}>Enter content: </Text>
        <TextInput value={content } onChangeText={text => setContent(text)} style={style.input}/>
        <Button title="Save Blog Post" onPress={() => onSubmit(title, content)}/>

    </View>);
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
    }
};

const style = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        margin: 5,
        padding:5
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5
    }
});


export default BlogPostForm;