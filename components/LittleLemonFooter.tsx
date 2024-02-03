import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//Footer function was initialized
export default function LittleLemonFooter() {
  return (
    <View style={FooterStyle.view}>
      <Text style={FooterStyle.FooterText}>
        All rights reserved by Little Lemon, 2024{' '}
      </Text>
    </View>
  );
}

//footer styles
const FooterStyle = StyleSheet.create({
  view: {
    backgroundColor: '#EE9972',
    marginBottom: 10,
  },
  FooterText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
});
