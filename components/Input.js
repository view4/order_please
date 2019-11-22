import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
//import { inputPlaceholder } from '../utils/Colors';
const Input = ({ inputValue, onChangeText, onDoneAddItem, label }) => (
	<View>
	  <Text>
	    {label}
	  </Text>
	  <TextInput
	    style={styles.input}
	    value={inputValue}
	    onChangeText={onChangeText}
	    placeholder="Type here to add note."
	    placeholderTextColor={'orange'}
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
    fontSize: 34,
    color: 'orange',
    fontWeight: '500'
  }
});
export default Input;
