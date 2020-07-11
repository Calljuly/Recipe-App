import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {CATEGORIES} from './dummy-data'
import Colors from './Colors'
import CategoryScreen from './Category'

const CategoryMenuScreen = (props) =>{

    const categoryId = props.navigation.getParams('categoryId');
    const selectedMeals = CATEGORIES.find(item => item.id === categoryId);

    return (
        <View styl={styles.screen}>
            <Text>Category Menu Screen :D</Text>
            <Button title="Go to Meals" onPress={()=>{
                props.navigation.navigate('MelasDetails');
            }} />
        </View>
    );
}

CategoryMenuScreen.navigationOptions ={
    headerTitle : 'Menu ',
    headerStyle ={

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