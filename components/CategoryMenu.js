import React from 'react'
import {View, Text, StyleSheet, Button, Platform, FlatList} from 'react-native'
import {CATEGORIES, MEALS} from './dummy-data'
import Colors from './Colors'
import CategoryScreen from './Category'
import Category from './ClassCategory'
import MealsItem from './MealsItem'
import MealsScreen from './Meals'

const CategoryMenuScreen = (props) =>{

    const renderItemData = (itemData) => {

        return (
        <MealsItem 
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity} 
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        click={() => {
            console.log(props.navigation);
            props.navigation.navigate({
                routeName: 'MealsScreen',
                params: {
                    mealId: itemData.item.id
                }
              
            });
        }} />
        );
    }
    const categoryId = props.navigation.getParam('categoryId');
    const display = MEALS.filter(item => item.categoryId.indexOf(categoryId) >= 0 );

    return (
        <View style={styles.screen}>
            <FlatList data={display} 
            renderItem={renderItemData}
            keyExtractor={(item, index) => item.id}
            style={{width:'100%'}}/>
        </View>
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