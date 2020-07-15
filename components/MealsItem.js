import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

const MealsItem = (props) =>{

    return (
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.click}>
            <View>
                <View style={{...styles.mealRow, ...styles.mealHeader}}>
                    <ImageBackground 
                    source={{uri:props.image}}
                    style={styles.bgImage}>
                        <View style={styles.titleContainer}>
                        <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                        </View>
                    </ImageBackground>
                    
                </View>
                <View style={{...styles.mealRow, ...styles.mealDetails}}>
                    <Text style={{fontFamily: 'open-sans'}}>{props.duration}m</Text>
                    <Text style={{fontFamily: 'open-sans'}}>{props.complexity.toUpperCase()}</Text>
                    <Text style={{fontFamily: 'open-sans'}}>{props.affordability.toUpperCase()}</Text>
                </View>
            </View>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealRow:{
        flexDirection: 'row'
    },
    mealItem:{
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        overflow: 'hidden',
        borderRadius: 10
    },
    mealHeader:{
        height: '85%',

    },
    mealDetails:{
       paddingHorizontal: 10,
       justifyContent: 'space-between',
       alignItems: 'center',
       height: '15%'
    },
    bgImage:{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingHorizontal: 12,
        paddingVertical: 10,
        textAlign: 'center'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingVertical: 5,
        paddingHorizontal: 12
    }
});

export default MealsItem;