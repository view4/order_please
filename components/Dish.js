import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


const Dish = ({ dish, handleOnPress }) => (
	<TouchableOpacity onPress={handleOnPress}>
	  <View style={styles.dishContainer}>
	    <Text style={styles.price}>
        ₪ {dish.price}
	    </Text>
	    <Text style={styles.name}>
	      {dish.name}
	    </Text>
	  </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  dishContainer: {
    flexDirection: 'row',
    marginBottom: 3
  },
  price: {
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 10,
    padding: 7,
    fontSize: 10,
    color: 'white',
    backgroundColor: 'black',
    width: 52,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'arial',
    textAlign:'center'
  },
  name: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    height: 45,
    width: 180,
    fontSize: 12,
    color: 'white',
    backgroundColor: 'black',
    fontFamily: 'arial',
  }
})

export default Dish;
