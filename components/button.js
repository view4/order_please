import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
//import { inputPlaceholder } from '../utils/Colors';
const Button = ({ text, handleButtonPress, }) => (
	<TouchableOpacity onPress={handleButtonPress}>
	  <View>
	    <Text>
	      {text}
	    </Text>
	  </View>
	</TouchableOpacity>
);
const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 34,
    color: 'orange',
    fontWeight: '500'
  }
});
export default Button;
