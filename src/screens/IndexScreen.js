import React, {useContext} from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context);
    return (<View>
        

        <Button title='add Post' onPress={addBlogPost}/>
        <FlatList
            data={state}
            keyExtractor={blogPost => blogPost.title}
            renderItem={({ item }) => {
                return(
                    <TouchableOpacity onPress={() => navigation.navigate('Show',{id: item.id})}>
                        <View style={style.blogRow}>
                            <Text style={style.title}>{ item.title } - {item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather name='trash' style={style.icon}/>
                            </TouchableOpacity>
                            
                        </View>
                    </TouchableOpacity>
                );
            }}
        />
    </View>);
};


IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30} />
          </TouchableOpacity>
        ),
      };
};



const style = StyleSheet.create({
    blogRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray'
        
        
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});


export default IndexScreen;

//Rabotaet ahueesh