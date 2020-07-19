import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MealsItem from './MealsItem';
import List from './List';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from './HeaderButton';
import {useSelector} from 'react-redux';

const FavoritesScreen = (props) =>{
    const favMeals = useSelector(state =>{
        return state.meals.favoriteMeals
    });
    if(favMeals.length === 0 || !favMeals){
        return (
            <View style={styles.content}>
                <Text>No favorites to display</Text>
            </View>);
    }
    return (
        <List  
        styles={{width: '100%'}}
        data={favMeals}
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
    },
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
export default FavoritesScreen;