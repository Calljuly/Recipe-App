import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {CATEGORIES} from './dummy-data'
import Colors from './Colors'
import CategoryScreen from './Category'

const CategoryMenuScreen = (props) =>{

    const categoryId = props.navigation.getParam('categoryId');
    const selectedMeals = CATEGORIES.find(item => item.id === categoryId);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeals.title}</Text>
            <Button title="Go to Meals" onPress={()=>{
                props.navigation.navigate('MealsDetails');
            }} />
        </View>
    );
}

CategoryMenuScreen.navigationOptions ={
    headerTitle : 'Menu ',
    headerStyle :{
        color: 'black'
    },
    headerTintTitle : 'white'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }

});
export default CategoryMenuScreen;