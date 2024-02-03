import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native'; //import the react-native components
import LittleLemonHeader from './components/LittleLemonHeader'; //import the function of the header
import LittleLemonFooter from './components/LittleLemonFooter'; //import the function of the footer
import HomeScreen from './HomeScreen';

//create the main function
export default function App() {
  return (
    <>
      <View
        style={styles.container}>
        {/* call the header component */}
        <LittleLemonHeader />
        {/* call the HomeScreen component */}
        <HomeScreen />
      </View>
      <View style={styles.footerContainer}>
        {/* call the footer component */}
        <LittleLemonFooter />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});
