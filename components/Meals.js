import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const MealsDetails = (props) =>{
    return (
        <View style={styles.screen}>
            <Text>Melas </Text>
            <Button title="Go back to top " on Press={() =>{
                props.navigation.popToTop();
            }}/>
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
export default MealsDetails;