import React from 'react'
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform} from 'react-native'
import {CATEGORIES} from './dummy-data'
import Colors from './Colors'
import CategoryGridTile from './CategoryGridTile'

const CategoryScreen = (props) =>{

    const renderGrid = (itemData) => {
        console.log(itemData.item.id);
        return <CategoryGridTile 
        title={itemData.item.title} 
        color={itemData.item.color}
        click={() =>{
            props.navigation.navigate({
            routeName: 'CategoryMenu',
            params:{
                categoryId : itemData.item.id
            }
        
        })}} />
    }
    return (
        <FlatList data={CATEGORIES} 
        renderItem={renderGrid}
        keyExtractor={(item, index) => item.id}
        numColumns={2}/> 
    );
}
CategoryScreen.navigationOptions={
    headerTitle: 'Meals category'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});
export default CategoryScreen;