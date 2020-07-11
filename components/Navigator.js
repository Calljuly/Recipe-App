import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import Category from './Category'
import CategoryMenu from './CategoryMenu'
import Meals from './Meals'


const MealsNavigation = createStackNavigator({
    Category: Category,
    CategoryMenu: CategoryMenu,
    MealsDetails : Meals
});

export default createAppContainer(MealsNavigation);