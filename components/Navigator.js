import React from 'react'
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import {Platform} from 'react-native';
import Colors from './Colors';
import Category from './Category';
import CategoryMenu from './CategoryMenu';
import Meals from './Meals';
import FavScreen from './FavoriteScreen'
import {Ionicons} from '@expo/vector-icons';

const MealsNavigation = createStackNavigator({
    Category: {
        screen:Category
    },
    CategoryMenu: {
        screen:CategoryMenu
    },
    MealsScreen : {
        screen: Meals
    }
},
    {
    mode: 'modal',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.Primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.Primary
    }
});
/*
const FavTab = createBottomTabNavigator({
    Meals: {
        screen:MealsNavigation,
        navigationOptions:{
            tapBarIcon: (tabInfo) =>{
                return <Ionicans
                name="ios-restaurant"
                size={25}
                color={tabInfo.tintColor} />
            }
        }
    },
    Favorite:{screen:FavScreen,
        navigationOptions:{
            tapBarIcon: (tabInfo) =>{
                return <Ionicans
                name="ios-star"
                size={25}
                color={tabInfo.tintColor} />
            }
        }}
},{
    tabBarOptions:{
        activeTintColor:Colors.Secondary
    }
}); */

export default createAppContainer(MealsNavigation);