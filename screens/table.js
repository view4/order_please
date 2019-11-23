import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';

import Button from '../components/button';

export default class TablePage extends React.Component {
  state={
    phoneNumber: ''
  }
  handlePersonPress = () => {
	console.log('table press')
  }
  sendBill = () => {
	consle.log('handle send bill press.')
  } 
  render() {

	  return (
	    <View style={styles.container}>
	    	<View style={styles.container}>
		  <Button text={'person one'} handleButtonPress={this.handlePersonPress} />
		  <Button text={'person two'} handleButtonPress={this.handlePersonPress} />
		  <Button text={'person 3'} handleButtonPress={this.handlePersonPress} />

		  <Button text={'person 4'} handleButtonPress={this.handlePersonPress} />
		  <Button text={'person 5'} handleButtonPress={this.handlePersonPress} />
		  <Button text={'person 6'} handleButtonPress={this.handlePersonPress} />
	   	</View>
	    	<View style={styles.container}>
		  <Button text={'For the Table'} handleButtonPress={this.handlePersonPress} />
	   	</View>
	    	<View style={styles.container}>
		  <Button text={'Send Bill'} handleButtonPress={this.sendBill} />
	   	</View>
	    </View>
	  );
  }

}


const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    alignItems: 'center'
  }
})
