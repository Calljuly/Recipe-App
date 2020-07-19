import React from 'react';
import {useSelector} from 'react-redux';
import { StyleSheet, View, Text} from 'react-native';
import {CATEGORIES} from './dummy-data';
import Colors from './Colors';
import CategoryScreen from './Category';
import Category from './ClassCategory';
import MealsItem from './MealsItem';
import MealsScreen from './Meals';
import List from './List';


const CategoryMenuScreen = (props) => {

    const categoryId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state =>{
        return state.meals.filteredMeals
    });

    const display = availableMeals.filter(item => item.categoryId.indexOf(categoryId) >= 0 );
    if(display.length === 0|| !display){
        return (
            <View style={styles.content}>
                <Text>No meals found, check your filters</Text>
            </View>

        );
    }
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
    },
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default CategoryMenuScreen;