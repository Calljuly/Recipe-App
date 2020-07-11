import React from 'react'
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform} from 'react-native'
import {CATEGORIES} from './dummy-data'
import Colors from './Colors'


const CategoryScreen = (props) =>{

    const renderGrid = (itemData) => {
        return (
            <TouchableOpacity onPress={() =>{
                props.navigation.navigate({
                    routeName: 'CategoryMenu',
                    params:{
                        categoryId : itemData.item.id
                    }
                });
            }}>
            <View style={styles.gridItem}><Text>{itemData.item.title}</Text></View>
            </TouchableOpacity>
            );
    }
    return (
        <FlatList data={CATEGORIES} 
        style={styles.screen} 
        contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}} 
        renderItem={renderGrid}
        keyExtractor={(item, index) => item.id}
        numColums={2}>

          
        </FlatList>
    );
}
CategoryScreen.navigationOptions={
    headerTitle: 'Meals category',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.Primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.Primary
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    gridItem:{
        flex:1,
        margin: 15,
        height: 10
    }

});
export default CategoryScreen;