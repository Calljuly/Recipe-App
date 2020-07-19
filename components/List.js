import React from 'react';
import {View, FlatList, StyleSheet } from 'react-native';
import MealsItem from './MealsItem';
import {useSelector } from 'react-redux';

const List = (props) =>{
    const favMeals = useSelector(state => state.meals.favoriteMeals);
    const renderItem = (itemData) =>{
        const isFav = favMeals.find(meal => meal.id === itemData.item.id);
        return (

            <MealsItem 
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity} 
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
            click={() => {
            props.navigation.navigate({
                routeName: 'MealsScreen',
                params: {
                    mealId: itemData.item.id,
                    mealTitle: itemData.item.title,
                    isFav : isFav
                }
              
            });
        }} />
        );
    }
    return (
        <View style={{...styles.screen, ...props.styles}}>
            <FlatList 
            keyExtractor={item => item.id}
            data={props.data}
            renderItem={renderItem}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default List;