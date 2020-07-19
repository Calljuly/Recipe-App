import {MEALS} from '../components/dummy-data';
import {TOGGLE_FAVORITE, SET_FILTERS} from '../store/mealsAction';

const initialState = {
    meals: MEALS,
    favoriteMeals : [],
    filteredMeals: MEALS 
}

const mealsReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal =>{
                meal.id === action.id
            });
            if(existingIndex >= 0 ){
                const updatedFav = [...state.favoriteMeals];
                updatedFav.splice(existingIndex, 1);
                return {...state, favoriteMeals: updatedFav};
            } else{
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return {...state, favoriteMeals: state.favoriteMeals.concat(meal)};
            }
        
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const updatedFilteredMeals = state.meals.filter(meal =>{
                if(appliedFilters.glutenFree && !meal.isGlutenfree ){
                    return false;
                }
                if(appliedFilters.lactosFree && !meal.isLactoseFree ){
                    return false;
                }
                if(appliedFilters.vegan && !meal.isVegan ){
                    return false;
                }
                if(appliedFilters.vegitarian && !meal.IsVegetarian ){
                    return false;
                }
                return true;
            });
            return {
                ...state, filteredMeals: updatedFilteredMeals
            };
        default: return state;
    }
    return state; 
}
export default mealsReducer;