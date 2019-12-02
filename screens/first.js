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
import Input from '../components/Input';
import Button from '../components/button';


export default class HowMuch extends React.Component {
  state={
    phoneNumber: '',
    Name: ''
  }
  receivePhoneNumber = (val) => {
	  this.setState({phoneNumber:val});
  }
  handleSubmit = () => {
   this.props.navigation.navigate('Scanner');
  }
  receiveName = (val) => {
	  this.setState({Name: val});
  }
  render() {
	  const { phoneNumber, Name } = this.state;

	  return (
      <View style={styles.container}>
        <Text style={styles.title}> How Much </Text>
        <View>
            <Input 
              inputValue={phoneNumber}
              label={'Phone Number'}
              onChangeText={this.receivePhoneNumber}
            />
            <Input 
              inputValue={Name}
              label={'First Name or Nickname'}
              onChangeText={this.receiveName}
            />
          </View>
        <Button text={'START'} handleButtonPress={this.handleSubmit} />
      </View>
	  );
  }

}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    alignItems: 'center',
    fontFamily: 'arial'
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    padding: 36
  }
})
