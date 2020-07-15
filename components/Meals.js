import React from 'react';
import {View, Text, StyleSheet, Button, ScrollView, Image} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {MEALS} from './dummy-data';
import HeaderButton from './HeaderButton';

const MealsDetails = (props) =>{
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <Text style={{fontFamily: 'open-sans'}}>{selectedMeal.duration}m</Text>
                <Text style={{fontFamily: 'open-sans'}}>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text style={{fontFamily: 'open-sans'}}>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
           <Text style={styles.styles.title}>Ingredients</Text>
           {selectedMeal.ingredients.map(ingredients =>{
               return (<View style={styles.text}><Text key={ingredients}>{ingredients}</Text></View>)
           })}
           <Text style={styles.title}>Steps</Text>
           {selectedMeal.steps.map(steps =>{
               return (<View style={styles.text}><Text key={steps}>{steps}</Text></View>)
           })}

        </ScrollView>
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
            iconName="ios-star" 
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