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
import Input from '../components/Input'

export default class HowMuch extends React.Component {
  state={
    phoneNumber: ''
  }
  receivePhoneNumber = (val) => {
	this.setState({phoneNumber:val})
  }
  render() {
	  const { phoneNumber } = this.state;
	  return (
	    <View style={styles.container}>
		<Text style={styles.title}> How Much </Text>
		<View>
			<Input 
			  inputValue={phoneNumber}
			  label={'Phone Number'}
			  onChangeText={this.receivePhoneNumber}
			/>
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
