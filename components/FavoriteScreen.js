import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import {MEALS} from './dummy-data'
import MealsItem from './MealsItem'
import List from './List'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from './HeaderButton';

const FavoritesScreen = (props) =>{

    const display = MEALS.filter(meal => meal.id === 'm1'|| meal.id === 'm2' );
    
    return (
        <List  
        styles={{width: '100%'}}
        data={display}
        navigation={props.navigation} />
    );
}
FavoritesScreen.navigationOptions=(data) =>{
    return {    
        headerTitle: 'Favorite',
        headerLeft : () =>{
            return (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={() => {
                    console.log('Works!');
                    data.navigation.toggleDrawer();
                }} />
            </HeaderButtons>);
        }
}};

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }

});
export default FavoritesScreen;