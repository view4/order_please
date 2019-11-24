import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
//import { inputPlaceholder } from '../utils/Colors';
const Button = ({ text, handleButtonPress,customStyle }) => (
	<TouchableOpacity onPress={handleButtonPress}>
	  <View style={customStyle || styles.button}>
	    <Text>
	      {text}
	    </Text>
	  </View>
	</TouchableOpacity>
);
const styles = StyleSheet.create({
  button: {
    padding: 15,
    fontSize: 18,
    color: 'dark-gray',
    fontWeight: '500',
    borderWidth: 1,
    borderColor: 'black',
    fontFamil: 'arial'
  }
});
export default Button;
