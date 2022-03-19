import React, {useContext, useState} from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const {addBlogPost} = useContext(Context);
    return (<View>
        <Text style={style.label}>Enter title: </Text>
        <TextInput value={title} onChangeText={text => setTitle(text)} style={style.input}/>
        <Text style={style.label}>Enter content: </Text>
        <TextInput value={content } onChangeText={text => setContent(text)} style={style.input}/>
        <Button title="Add Blog Post" onPress={() => addBlogPost(title, content, () => {navigation.navigate('Index');})}/>

    </View>);
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


export default CreateScreen;