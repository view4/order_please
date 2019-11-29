import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

const Input = ({ inputValue, onChangeText, label }) => (
	<View>
	  <Text style={styles.label}>
	    {label}
	  </Text>
	  <TextInput
	    style={styles.input}
	    value={inputValue}
	    onChangeText={onChangeText}
	    placeholder="Type here..."
	    placeholderTextColor={'grey'}
	    multiline={true}
	    autoCapitalize="sentences"
	    underlineColorAndroid="transparent"
	    selectionColor={'white'}
	    maxLength={30}
	    returnKeyType="done"
	    autoCorrect={false}
	    blurOnSubmit={true}
	  />
	</View>
);

const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 18,
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    width: '90%',
    marginBottom: 36
  },
  label: {
    fontFamily: 'arial',
  }
});

export default Input;
