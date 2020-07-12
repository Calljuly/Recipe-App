import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Platform} from 'react-native';
import Colors from './Colors';

import Category from './Category';
import CategoryMenu from './CategoryMenu';
import Meals from './Meals';


const MealsNavigation = createStackNavigator({
    Category: {
        screen:Category
    },
    CategoryMenu: {
        screen:CategoryMenu
    },
    MealsDetails : {
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

export default createAppContainer(MealsNavigation);