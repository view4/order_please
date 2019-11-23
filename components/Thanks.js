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


export default class ThanksPage extends React.Component {
  state={
    phoneNumber: ''
  }

  render() {

	  return (
	    <View style={styles.container}>
		<Text style={styles.title}> Thank you  </Text>
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
