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
	  <TouchableOpacity style={styles.container} onPress={ () => this.props.navigation.navigate('Thanks')}>
	    <View>
		<BarcodeScanner />
	    </View>
	  </TouchableOpacity>
)}}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    color: 'black',
    fontWeight: '500'
  }
});

