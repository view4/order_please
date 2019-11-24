import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
//import { inputPlaceholder } from '../utils/Colors';
const Input = ({ inputValue, onChangeText, onDoneAddItem, label }) => (
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
	    onSubmitEditing={onDoneAddItem}
	  />
	</View>
);
const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    borderWidth: 1,
    borderColor: 'black',
    width: '100',
    marginBottom: '36px'

  },
  label: {
    fontFamily: 'arial',
    letterSpacing: '1'
  }
});
export default Input;
