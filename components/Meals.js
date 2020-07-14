import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {MEALS} from './dummy-data';
import HeaderButton from './HeaderButton';

const MealsDetails = (props) =>{
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go back to top " onPress={() =>{
                props.navigation.popToTop();
            }}/>
        </View>
    );
}
MealsDetails.navigationOptions = (data) =>{
    const mealId = data.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: selectedMeal.title,
        headerRight :() =>{ return (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
            title="Favorite" 
            icon-name="ios-star" 
            onPress={() =>{
                console.log('Mark as a favorite!');
            }} />
        </HeaderButtons>);}}
    
}
const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default MealsDetails;