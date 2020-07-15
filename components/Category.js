import React from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform} from 'react-native';
import {CATEGORIES} from './dummy-data';
import Colors from './Colors';
import CategoryGridTile from './CategoryGridTile';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from './HeaderButton';

const CategoryScreen = (props) =>{

    const renderGrid = (itemData) => {
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
CategoryScreen.navigationOptions=(data) =>{

    return {
    headerTitle: 'Meals category',
    headerLeft : () =>{
        return (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                data.navigation.toggleDrawer();
            }} />
        </HeaderButtons>);
    }
}
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});
export default CategoryScreen;