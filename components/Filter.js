import React , {useState, useParams, useEffect, useCallback} from 'react'
import {View, Text, StyleSheet, Switch, Platform} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from './HeaderButton';
import Colors from './Colors';
import {useDispatch} from 'react-redux';
import {setFilters} from '../store/mealsAction';

const FiltersScreen = (props) => {
    const {navigation} = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setVegan] = useState(false);
    const [isVegetarian, setVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree : isGlutenFree,
            lactoseFree : isLactoseFree,
            vegan : isVegan,
            vegetarian: isVegetarian
        }
        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(()=>{
        navigation.setParams({
            save: saveFilters
        });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Avaliable Filters/ Restrictions</Text>
            <View style={styles.filtersContainer}>
                <Text>Gluten-Free</Text>
                <Switch 
                value={isGlutenFree} 
                onValueChange={newValue => setIsGlutenFree(newValue)} 
                trackColor={{true: Colors.Primary}}
                thumbColor={Platform.OS === 'android' ? Colors.Primary : '' } />
            </View>
            <View style={styles.filtersContainer}>
                <Text>Lactose-Free</Text>
                <Switch 
                value={isLactoseFree} 
                onValueChange={newValue => setIsLactoseFree(newValue)} 
                trackColor={{true: Colors.Primary}}
                thumbColor={Platform.OS === 'android' ? Colors.Primary : '' } />
            </View>
            <View style={styles.filtersContainer}>
                <Text>Vegan</Text>
                <Switch 
                value={isVegan} 
                onValueChange={newValue => setVegan(newValue)} 
                trackColor={{true: Colors.Primary}}
                thumbColor={Platform.OS === 'android' ? Colors.Primary : '' } />
            </View>
            <View style={styles.filtersContainer}>
                <Text>Vegetarian</Text>
                <Switch 
                value={isVegetarian} 
                onValueChange={newValue => setVegetarian(newValue)} 
                trackColor={{true: Colors.Primary}}
                thumbColor={Platform.OS === 'android' ? Colors.Primary : '' } />
            </View>
        </View>
    );
}
FiltersScreen.navigationOptions =(data) => {
    return { 
        headerTitle: 'Filter Meals',
        
            headerLeft : () =>{
                return (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Menu" iconName="ios-menu" onPress={() => {
                        data.navigation.toggleDrawer();
                    }} />
                </HeaderButtons>);
            },
            headerRight: () =>{
                return (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Save" iconName="ios-save" onPress={() => {
                        data.navigation.getParam('save')();
                    }} />
                </HeaderButtons>);
            }
        }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        alignItems: 'center'
    },
    filtersContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        marginVertical: 10
    },
    title:{
        fontFamily: 'open-sans',
        fontSize: 22,
        margin:20,
        textAlign: 'center'
    }
});
export default FiltersScreen;