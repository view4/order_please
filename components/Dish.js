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
	<TouchableOpacity onPress={handleOnPress}>
	  <View style={styles.dishContainer}>
	   <Text style={styles.price}>
	     {dish.price}
	   </Text>
	    <Text style={styles.name}>
	      {dish.name}
	    </Text>
	  </View>
        </TouchableOpacity>

);

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    alignItems: 'center'
  },
  dishContainer: {
    flexDirection: 'row',
    marginBottom: 3
  },
  price: {
    //borderRadius: '50%',
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 10,
    padding: 7,
    fontSize: 10,
    color: 'white',
    backgroundColor: 'black',
    width: 38,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamil: 'arial'
  },
  name: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    height: 30,
    width: 180,
    fontSize: 12,
    color: 'white',
    backgroundColor: 'black',
    fontFamily: 'arial'

  }
})

export default Dish;
