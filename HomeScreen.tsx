import * as React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const description = [
  'Little Lemon is a charming neighborhood bistro\n that serves simple food\n and classic cocktails in a lively \nbut casual environment.\n We would love to hear more about \nyour experience with us!',
  //description of the Home Screen
];

//function of the Home Screen
export default function HomeScreen() {
  return (
    <View style={HomeStyle.View}>
      {/* Scroll view of the Home Screen */}
      <ScrollView indicatorStyle="white">
        <Text style={HomeStyle.TitleText}>Welcome to Little Lemon</Text>
        <Text style={HomeStyle.discription}>
          {description} {/*Description Array was passed */}
        </Text>
      </ScrollView>
    </View>
  );
}

{
  /* Style Added */
}
const HomeStyle = StyleSheet.create({
  View: {
    flex: 1,
  },

  TitleText: {
    padding: 40,
    fontSize: 50,
    color: '#EDEFEE',
    textAlign: 'center',
  },

  discription: {
    fontSize: 38,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
});
