import React, {useContext} from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import {Context} from '../context/BlogContext';

const IndexScreen = () => {
    const {state, addBlogPost} = useContext(Context);
    return (<View>
        

        <Button title='add Post' onPress={addBlogPost}/>
        <FlatList
            data={state}
            keyExtractor={blogPost => blogPost.title}
            renderItem={({ item }) => {
                return <Text>{ item.title }</Text>
            }}
        />
    </View>);
};

const style = StyleSheet.create({
    
});


export default IndexScreen;

//Rabotaet ahueesh