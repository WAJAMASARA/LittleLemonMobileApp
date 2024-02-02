import * as React from 'react';
import {View, Text} from 'react-native'; //import the react-native components
import LittleLemonHeader from './components/LittleLemonHeader'; //import the function of the header
import LittleLemonFooter from './components/LittleLemonFooter'; //import the function of the footer
import HomeScreen from './HomeScreen';

//create the main function
export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        {/* call the header component */}
        <LittleLemonHeader />
        {/* call the HomeScreen component */}
        <HomeScreen />
      </View>
      <View style={{backgroundColor: '#495E57'}}>
        {/* call the footer component */}
        <LittleLemonFooter />
      </View>
    </>
  );
}
