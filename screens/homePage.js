import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Input from '../components/Input';
import Button from '../components/button';

import { addPhoneNumber, setCustomerName } from '../data/customerDetails';

export default class HomePage extends React.Component {
  state={
    phoneNumber: '',
    name: ''
  }
  receivePhoneNumber = (val) => {
    // Stores client phone number
	  this.setState({phoneNumber:val});
  }
  handleSubmit = () => {
    //Stores client phone number in app data and navigates to next page.
    addPhoneNumber(this.state.phoneNumber);
    setCustomerName(this.state.name);
   this.props.navigation.navigate('Scanner');
  }
  receiveName = (val) => {
    // Stores client name
	  this.setState({name: val});
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
