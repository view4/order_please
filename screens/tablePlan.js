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

export default class TablePlanPage extends React.Component {
  state={
    phoneNumber: ''
  }
  handleTablePress = () => {
	console.log('table press')
  }
  render() {

	  return (
	    <View style={styles.container}>
		<View style={styles.container}>
		  <Button text={'1'} handleButtonPress={this.handleTablePress} />
		  <Button text={'2'} handleButtonPress={this.handleTablePress} />
		  <Button text={'3'} handleButtonPress={this.handleTablePress} />
	   	</View>
	   	<View style={styles.container}>
		  <Button text={'4'} handleButtonPress={this.handleTablePress} />
		  <Button text={'5'} handleButtonPress={this.handleTablePress} />
		  <Button text={'6'} handleButtonPress={this.handleTablePress} />
	   	</View>
	    	<View style={styles.container}>
		  <Button text={'7'} handleButtonPress={this.handleTablePress} />
		  <Button text={'8'} handleButtonPress={this.handleTablePress} />
		  <Button text={'9'} handleButtonPress={this.handleTablePress} />
	   	</View>
	    	<View style={styles.container}>
		  <Button text={'10'} handleButtonPress={this.handleTablePress} />
		  <Button text={'11'} handleButtonPress={this.handleTablePress} />
		  <Button text={'12'} handleButtonPress={this.handleTablePress} />
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
