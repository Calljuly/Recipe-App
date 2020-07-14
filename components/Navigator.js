import {createStackNavigator, createBottomTabNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Platform} from 'react-native';
import Colors from './Colors';
import Category from './Category';
import CategoryMenu from './CategoryMenu';
import Meals from './Meals';
import FavScreen from './FavoriteScreen'


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

/*const FavTab = createBottomTabNavigator({
    Meals: MealsNavigation,
    Favorite: FavScreen
}); */

export default createAppContainer(MealsNavigation);