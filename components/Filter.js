import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from './HeaderButton';

const FiltersScreen = () =>{
    return (
        <View style={styles.screen}>
        
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
            }
        }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default FiltersScreen;