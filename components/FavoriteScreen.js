import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const FavoritesScreen = () =>{
    return (
        <View style={styles.screen}>
            <Text>Works, welcome to Favorites!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }

});
export default FavoritesScreen;