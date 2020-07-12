import React from 'react'
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform} from 'react-native'
import {CATEGORIES} from './dummy-data'
import Colors from './Colors'


const CategoryScreen = (props) =>{

    const renderGrid = (itemData) => {
        return (
            <TouchableOpacity
            style={styles.gridItem}
            onPress={() =>{
                props.navigation.navigate({
                    routeName: 'CategoryMenu',
                    params:{
                        categoryId : itemData.item.id
                    }
                });
            }}>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
            );
    }
    return (
        <FlatList data={CATEGORIES} 
        renderItem={renderGrid}
        keyExtractor={(item, index) => item.id}
        numColumns={2}/> 
    );
}
CategoryScreen.navigationOptions={
    headerTitle: 'Meals category'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    gridItem:{
        flex:1,
        margin: 15,
        height: 10
    }

});
export default CategoryScreen;