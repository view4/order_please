import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import firebase  from '../firebase';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Input from '../components/Input';
import Dish from '../components/Dish';
import Button from '../components/button';
import dishes from '../data/dishes';

import { activeTableMember, addDishToTableMember, setActiveTableMember } from '../data/activeTableMember';
import { activeTable, getAllTableMembers, activeTableNumber, changeActiveTableValue } from '../data/activeTableData';
import { updateTableMember, tables } from '../data/tablesData';

//const starters = Object.values(dishes.starters);
//const mains = Object.values(dishes.mains);
//const deserts = Object.values(dishes.deserts);
//const allDishes = Object.values({
	//...dishes.starters,
	//...dishes.mains,
	//...dishes.deserts	
//});


export default class Order extends React.Component {
  state = {
    searchField:'',
    tableMember: {},
	tableMembers: [],
	starters:[],
	mains:[],
	desserts: [],
	allDishes: []
  };

  componentWillMount() {
	var tableMembers = Object.values(activeTable);
	for (var i = 0; i < tableMembers.length; i++){
		tableMembers[i] = tableMembers[i].name;
	};
	this.setState({
	  tableMember: activeTableMember,
	  tableMembers
	});
	let menuRef = firebase.database().ref('menu');
	menuRef.on('value', (snapshot) => {
		const menu = snapshot.val();
		console.log('firebase menu');
			console.log(menu)
		let starters = Object.values(menu.starters);
		let mains = Object.values(menu.mains);
		let desserts =  Object.values(menu.Desserts);
		let allDishes = [
			...starters,
			...mains,
			...desserts
		];
		console.log(allDishes)
		this.setState({
			starters, 
			mains,
			desserts,
			allDishes
		})
		});
  };

  searchDish = (val) => {
	this.setState({searchField: val});
  };

  handleDishPress = (dish) => {
	addDishToTableMember(dish);
	this.updateTableData()
	//console.log(activeTableMember); // This shows functionality is working.
  };
  updateTableData = () => {
	updateTableMember(activeTableNumber, activeTableMember);
	changeActiveTableValue(tables[activeTableNumber])
  }
  handlePersonSwitch = (indexDiff) => {
	var {tableMember, tableMembers} = this.state;
	var currentIndex = tableMembers.indexOf(tableMember.name);
	var futureIndex = currentIndex + indexDiff;
	if(futureIndex >= tableMembers.length) {
		futureIndex = 0;
	} else if(futureIndex < 0 ) {
		futureIndex = tableMembers.length - 1;
	};

	var newActiveTableMemberName = tableMembers[futureIndex];
	var newActiveTableMember = activeTable[newActiveTableMemberName];
	setActiveTableMember(newActiveTableMember);
	this.setState({tableMember: newActiveTableMember});
  };

  displaySearchResults = () => {
	var { searchField, allDishes } = this.state;
	
    var searchResults = [];
    for (var i = 0; i < allDishes.length; i++) {
		if(allDishes[i].name.toLowerCase().includes(searchField.toLowerCase())) {
		searchResults.push(allDishes[i]);
		};
	};
	
    const results = searchResults.map( dish => (
		<Dish 
			dish={dish}
			handleOnPress={() => this.handleDishPress(dish)}
		/>
    ))	
    return results
  };

  render() {
	const { searchField, tableMember, starters, mains, desserts } = this.state;

	  return (
	    <View style={styles.container}>
		<View style={styles.nameContainer}>
			  <AntDesign name="leftcircleo" 
			    size={32} 
			    color="black" 
			    onPress={()=>this.handlePersonSwitch(-1)} 
			   />
			<Button text={tableMember.name || 'For the Table'} />
			  <AntDesign name="rightcircleo" 
			    size={32} 
			    color="black" 
			    onPress={() => this.handlePersonSwitch(1)}
			   />
		</View>
		<Input
		  inputValue={searchField}
		  onChangeText = {this.searchDish}
		 />
		{searchField ? this.displaySearchResults() : (
			<View style={styles.allDishes}>
				<View style={styles.scrollContainer}>
					<ScrollView>

						<View style={styles.startersContainer}>
							<Text style={styles.titles}> Starters</Text>
							{starters.map( dish => (
								<Dish 
									dish={dish}
									key={dish.price+dish.name}
									handleOnPress={() => this.handleDishPress(dish)}
									/>
							))}
						</View>
						<View style={styles.startersContainer}>
							<Text style={styles.titles}> Mains</Text>
							{mains.map( dish => (
								<Dish 
									dish={dish}
									key={dish.price+dish.name}
									handleOnPress={() => this.handleDishPress(dish)} 
									/>
							))}
						</View>
						<View style={styles.startersContainer}>
							<Text style={styles.titles}> Deserts</Text>
							{desserts.map( dish => (
								<Dish 
									dish={dish}
									key={dish.price+dish.name}
									handleOnPress={() => this.handleDishPress(dish)} 
									/>
							))}
						</View>
						</ScrollView>
					</View>
				</View>
			)}
	      </View>
	  );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
   },
   scrollContainer: {
	flex: 1
   },
  title: {
    fontSize: 36,
    alignItems: 'center'
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  startersContainer: {

  },
  allDishes: {
    height: 220,
	width: '90%',
  },
  titles: {
    fontWeight: '600',
    fontSize: 18,
    margin: 7
  },
})
