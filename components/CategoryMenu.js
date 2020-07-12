import React from 'react'
import {View, Text, StyleSheet, Button, Platform} from 'react-native'
import {CATEGORIES} from './dummy-data'
import Colors from './Colors'
import CategoryScreen from './Category'
import Category from './ClassCategory'

const CategoryMenuScreen = (props) =>{

    const categoryId = props.navigation.getParam('categoryId');
    const selectedMeals = CATEGORIES.find(item => item.id === categoryId);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeals.title}</Text>
            <Button title="Go to Meals" onPress={()=>{
                props.navigation.navigate('MealsDetails');
            }} />
            <Button title="Go back !" onPress={() =>{
                props.navigation.pop();
            }}/>
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