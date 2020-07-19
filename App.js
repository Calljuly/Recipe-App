import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {enableScreens} from 'react-native-screens';

import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import {createStore, combineReducers} from 'redux'; 
import Navigator from './components/Navigator';
import mealsReducer from './store/meals';
import {Provider} from 'react-redux';
enableScreens();

const rootReducers= combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducers);

const fetchFonts = () =>{
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    return <AppLoading 
    startAsync={fetchFonts} 
    onFinish={() => setDataLoaded(true)}
    onError={(err) => console.log(err)} />
  }
  return (
    <Provider store={store}>
        <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
