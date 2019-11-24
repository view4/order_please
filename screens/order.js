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
import Dish from '../components/Dish';
import dishes from '../data/dishes';

const starters = Object.values(dishes.starters);
const mains = Object.values(dishes.mains);
const deserts = Object.values(dishes.deserts);

export default class Order extends React.Component {
  state={
    searchField:''
  }
  searchDish = (val) => {
	this.setState({searchField: val});
  }
  handleDishPress = (name) => {
	console.log('dish press');
	console.log(name)
  }
  render() {
	console.log(starters)
	const { searchField } = this.state;
	  return (
	    <View style={styles.container}>
		<View style={styles.nameContainer}>
			<Text> name here</Text>
		</View>
		<Input
		  inputValue={searchField}
		  onChangeText = {this.searchDish}
		 />
		<View style={styles.startersContainer}>
			<Text> Starters</Text>
			{starters.map( dish => (
			  <Dish 
			    dish={dish}
			    handleOnPress={(dish) => this.handleDishPress(dish)} />
			))}
		</View>
		<View style={styles.startersContainer}>
			<Text> Mains</Text>
			{mains.map( dish => (
			  <Dish 
			    dish={dish}
			    handleOnPress={(dish) => this.handleDishPress(dish)} />
			))}
		<View style={styles.startersContainer}>
			<Text> Deserts</Text>
			{starters.map( dish => (
			  <Dish 
			    dish={dish}
			    handleOnPress={(dish) => this.handleDishPress(dish)} />
			))}
		</View>
		</View>
	    </View>
	  );
  }

}


const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    alignItems: 'center'
  },
  nameContainer: {
    fontSize: 30
  },
  startersContainer: {
    fontSize: 30
  },
})
