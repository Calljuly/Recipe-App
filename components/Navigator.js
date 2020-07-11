import {createStackNavigator, createAppContainer} from 'react-navigation';
import Category from './Category'
import CategoryMenu from './CategoryMenu'
import Meals from './Meals'


const MelasNavigator = createStackNavigator({
    Category: Category,
    CategoryMenu: CategoryMenu,
    MealsDetails : Meals
});

export default createAppContainer(MelasNavigation);