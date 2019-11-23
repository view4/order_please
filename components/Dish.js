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


const Dish = ({ dish, handleOnPress }) => (
	<View>
	  <TouchableOpacity onPress={handleOnPress}>
	    <Text>
	      {dish.name}
	    </Text>
          </TouchableOpacity>
	</View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    alignItems: 'center'
  }
})

export default Dish;
