import React, {useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Button, ScrollView, Image} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from './HeaderButton';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavorite} from '../store/mealsAction';

const MealsDetails = (props) => {
    
    const mealId = props.navigation.getParam('mealId');
    const availableMeals = useSelector(state =>{
        return state.meals.meals
    });
    const favoriteMeals = useSelector(state => 
        {return state.meals.favoriteMeals.some(meal => meal.id === mealId)});
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);
    const dispatch = useDispatch();

    const toggleFavoriteHandler  = useCallback(() =>{
        dispatch(toggleFavorite(mealId));
    },[dispatch, mealId]);

    useEffect(() =>{
        props.navigation.setParams({toggleFav : toggleFavoriteHandler});
    }, [toggleFavoriteHandler]);
    useEffect(() =>{
        props.navigation.setParams({isFavorite : favoriteMeals});
    },[favoriteMeals]);
    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <Text style={{fontFamily: 'open-sans'}}>{selectedMeal.duration}m</Text>
                <Text style={{fontFamily: 'open-sans'}}>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text style={{fontFamily: 'open-sans'}}>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
           <Text style={styles.title}>Ingredients</Text>
           {selectedMeal.ingredients.map(ingredients =>{
               return (<View key={ingredients} style={styles.text}><Text>{ingredients}</Text></View>)
           })}
           <Text style={styles.title}>Steps</Text>
           {selectedMeal.steps.map(steps =>{
               return (<View key={steps} style={styles.text}><Text>{steps}</Text></View>)
           })}

        </ScrollView>
    );
}
MealsDetails.navigationOptions = (data) =>{
    const selectedMeal = data.navigation.getParam('mealTitle');
    const handler = data.navigation.getParam('toggleFav');
    const isFav = data.navigation.getParam('isFavorite');

    return {
        headerTitle: selectedMeal,
        headerRight :() =>{ return (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
            title="Favorite" 
            iconName={isFav ? "ios-star" : "ios-star-outline"} 
            onPress={handler} />
        </HeaderButtons>);}}
    
}
const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontFamily: 'open-sans',
        fontSize: 22,
        textAlign: 'center'
    },
    image:{
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    text : {
        marginVertical: 10,marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});
export default MealsDetails;