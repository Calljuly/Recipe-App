import React from 'react'
import {View, Text, StyleSheet, Button, Platform, FlatList} from 'react-native'
import {CATEGORIES, MEALS} from './dummy-data'
import Colors from './Colors'
import CategoryScreen from './Category'
import Category from './ClassCategory'
import MealsItem from './MealsItem'
import MealsScreen from './Meals'
import List from './List'

const CategoryMenuScreen = (props) => {

    const categoryId = props.navigation.getParam('categoryId');
    const display = MEALS.filter(item => item.categoryId.indexOf(categoryId) >= 0 );

    return (
        <List 
        styles={{width: '100%'}}
        data={display}
        navigation={props.navigation} />
    );
}

CategoryMenuScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedMeals = CATEGORIES.find(item => item.id === catId);
    return {
        headerTitle: selectedMeals.title
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default CategoryMenuScreen;