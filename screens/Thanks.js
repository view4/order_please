import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';


export default class ThanksPage extends React.Component {
  state={
    phoneNumber: ''
  }

  render() {

	  return (
	    <View style={styles.container}>
		<Text style={styles.header}> Thank you!  </Text>
		<Text style={styles.text}> Now you just have to wait for the waiter/waitress  </Text>
		<Text style={styles.text}> The bill will be sent to you at the end  </Text>
            
	    </View>
	  );
  }

}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    color: 'black',
    fontWeight: '500',
    fontFamily: 'arial'
  },
  header: {
    fontSize: 36,
    fontFamily: 'arial',
    marginBottom: '36px'
  },
  text: {
    fontSize: 18,
    fontFamily: 'arial',
    marginBottom: '18px'
  },
})
