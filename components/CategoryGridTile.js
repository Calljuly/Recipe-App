import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback } from "react-native";

const CategoryGridTile  = (props) =>{
    let TouchableComponent = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21){
        TouchableComponent = TouchableNativeFeedback;
    }
   return ( 
       <View style={styles.gridItem}>
        <TouchableComponent
            onPress={props.click}>
                <View style={{...styles.container, ...{ backgroundColor: props.color}}}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
        </TouchableComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Verson >= 21 ? 'hidden' : 'visible',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius:10,
        elevation: 3
    },
    container: {
        flex: 1,
        borderRadius: 10,
        padding: 15,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'right'
    }
});

export default CategoryGridTile;