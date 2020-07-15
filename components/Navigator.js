import React from 'react'
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {Platform, Text} from 'react-native';
import Colors from './Colors';
import Category from './Category';
import CategoryMenu from './CategoryMenu';
import Meals from './Meals';
import FavScreen from './FavoriteScreen'
import FilterScreen from './Filter'
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

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
        headerTitleStyle:{
            fontFamily:'open-sans'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.Primary
    }
});

const FavoriteNavigator = createStackNavigator({
    Favorite : {screen :FavScreen},
    MealsScreen : Meals
}, 
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.Primary : ''
        },
        headerTitleStyle:{
            fontFamily:'open-sans'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.Primary
    }
});

const info = {
    Meals: {
    screen:MealsNavigation,
    navigationOptions:{
        tabBarIcon: (tabInfo) =>{
            return <Ionicons
            name='ios-restaurant'
            size={25}
            color={tabInfo.tintColor} />
        },
        tabBarColor: Colors.Primary,
        tabBarLabel : Platform.OS === 'android' ? <Text style={{fontFamily:'open-sans'}}>Meals</Text> : 'Meals'
    }
},
Favorite:{
    screen: FavoriteNavigator,
    navigationOptions:{
        tabBarIcon: (tabInfo) =>{
            return <Ionicons
            name='ios-star'
            size={25}
            color={tabInfo.tintColor} />
        },
        tabBarColor: Colors.Secondary,
        tabBarLabel : Platform.OS === 'android' ? <Text style={{fontFamily:'open-sans'}}>Meals</Text> : 'Meals'
    }}}

const FavTab = Platform.OS === 'android' ? createMaterialBottomTabNavigator(info, {
    ativeTintColor: Colors.Primary,
    shifting : true,
    barStyle:{ //Om Shifting är false måste denna finnas för att färgen ska gå att ändra
        backgroundColor: Colors.Primary
    }
}) : createBottomTabNavigator(info,{
    tabBarOptions:{
        labelStye: {fontFamily:'open-sans-bold'},
        activeTintColor:'white'
    }
}); 

const FilterNavigator = createStackNavigator({
    Filters : FilterScreen
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.Primary : ''
        },
         headerTitleStyle:{
            fontFamily:'open-sans-bold'
        },
        headerBackTitleStyle:{
            fontFamily: 'open-sans'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.Primary
    }
});
const MainNavigator = createDrawerNavigator({
    MealsScreen : {
        screen:FavTab, 
        navigationOptions: {drawerLabel: 'Menu'}
    },
    Filters: FilterNavigator
}, {
    contentOptions:{
        activeTintColor: Colors.Secondary,
        labelStyle:{
            fontFamily : 'open-sans'
        }
    }
});

export default createAppContainer(MainNavigator);