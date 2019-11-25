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
import Button from '../components/button';
import dishes from '../data/dishes';
import { activeTableMember, addDishToTableMember } from '../data/activeTableMember';

const starters = Object.values(dishes.starters);
const mains = Object.values(dishes.mains);
const deserts = Object.values(dishes.deserts);

export default class Order extends React.Component {
  state={
    searchField:'',
    tableMember: {}
  }
  componentWillMount() {
	this.setState({tableMember: activeTableMember})
  }
  searchDish = (val) => {
	this.setState({searchField: val});
  }
  handleDishPress = (dish) => {
	addDishToTableMember(dish);
	console.log(activeTableMember);

  }
  render() {
	const { searchField, tableMember } = this.state;
	  return (
	    <View style={styles.container}>
		<View style={styles.nameContainer}>
			<Button text={tableMember.name} />
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
			    handleOnPress={() => this.handleDishPress(dish)} />
			))}
		</View>
		<View style={styles.startersContainer}>
			<Text> Mains</Text>
			{mains.map( dish => (
			  <Dish 
			    dish={dish}
			    handleOnPress={() => this.handleDishPress(dish)} />
			))}
		<View style={styles.startersContainer}>
			<Text> Deserts</Text>
			{deserts.map( dish => (
			  <Dish 
			    dish={dish}
			    handleOnPress={() => this.handleDishPress(dish)} />
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
