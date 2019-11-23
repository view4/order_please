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

import BarcodeScanner from '../components/barcodeScanner';

export default class ScannerPage extends React.Component{
  render  () {
	return (
	  <TouchableOpacity onPress={ () => this.props.navigation.navigate('Thanks')}>
	    <View>
		<BarcodeScanner />
	    </View>
	  </TouchableOpacity>
)}}
/*
const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 34,
    color: 'orange',
    fontWeight: '500'
  }
});
*/
