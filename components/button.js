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
    borderWidth: 1,
    borderColor: 'black',
    minWidth: '72px',
    minHeight: '54px',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 18
  }
});
export default Button;
