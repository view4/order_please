import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Button = ({ text, handleButtonPress,customStyle, total }) => (
	<TouchableOpacity onPress={handleButtonPress}>
	  <View style={customStyle || styles.button}>
	    <Text>
	      {text}
	    </Text>
	  </View>
    <View>
      <Text> {total ? '₪' + total : null } </Text>
    </View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 72,
    minHeight: 54,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 18
  }
});

export default Button;
