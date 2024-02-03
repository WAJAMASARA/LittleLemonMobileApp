import {View, Text, StyleSheet} from 'react-native';

//Header function was initialized
export default function LittleLemonHeader() {
  return (
    <View style={HeaderStyle.viewhead}>
      <Text style={HeaderStyle.HeaderText}>Little Lemon</Text>
    </View>
  );
}

const HeaderStyle = StyleSheet.create({
  viewhead: {
    backgroundColor: '#EE9972',
  },
  HeaderText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
