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

import { activeTableMember, addDishToTableMember, setActiveTableMember } from '../data/activeTableMember';
import { activeTable, activeTableNumber, changeActiveTableValue } from '../data/activeTableData';
import { updateTableMember, tables } from '../data/tablesData';


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
	  // Stores individuals on the table to the component. 
	var tableMembers = Object.values(activeTable);

	for (var i = 0; i < tableMembers.length; i++){
		tableMembers[i] = tableMembers[i].name;
	};

	this.setState({
	  tableMember: activeTableMember,
	  tableMembers
	});
	// Connects with firebase database to access menu.
	let menuRef = firebase.database().ref('menu');
	menuRef.on('value', (snapshot) => {
		const menu = snapshot.val();

		let starters = Object.values(menu.starters);
		let mains = Object.values(menu.mains);
		let desserts =  Object.values(menu.Desserts);
		let allDishes = [
			...starters,
			...mains,
			...desserts
		];
		// Stores menu in component data
		this.setState({
			starters, 
			mains,
			desserts,
			allDishes
		});

		});
  };

  searchDish = (val) => {
	  // updates search field upon search. 
	this.setState({searchField: val});
  };

  handleDishPress = (dish) => {
	  //Adds dish to the individuals order in app data. 
	addDishToTableMember(dish);
	this.updateTableData()
  };

  updateTableData = () => {
	  // Updates data for the table members and.
	updateTableMember(activeTableNumber, activeTableMember);
	changeActiveTableValue(tables[activeTableNumber])
  };

  handlePersonSwitch = (indexDiff) => {
	// Handles person switching upon clicking the arrows next to name. 
	var {tableMember, tableMembers} = this.state;

	var currentIndex = tableMembers.indexOf(tableMember.name);
	var futureIndex = currentIndex + indexDiff;
	// Resets index if out of range.
	if (futureIndex >= tableMembers.length) {
		futureIndex = 0;
	} else if (futureIndex < 0 ) {
		futureIndex = tableMembers.length - 1;
	};

	var newActiveTableMemberName = tableMembers[futureIndex];
	var newActiveTableMember = activeTable[newActiveTableMemberName];
	// Updates the active table member accordingly.
	setActiveTableMember(newActiveTableMember);
	this.setState({tableMember: newActiveTableMember});
  };

  displaySearchResults = () => {
	var { searchField, allDishes } = this.state;
	
    var searchResults = [];
    for (var i = 0; i < allDishes.length; i++) {
			// Checks for search through each dish in the menu.
		if(allDishes[i].name.toLowerCase().includes(searchField.toLowerCase())) {
		searchResults.push(allDishes[i]);
		};
	};
	// Maps through array of results to return components which represent the dish.
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
			{
				// Name of customer and arrows 
			}
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
			{
				// If There is a search fieldd return those results, otherwise show all other dishes. 
			}
			{searchField ? this.displaySearchResults() : (
				<View style={styles.allDishes}>
					<View style={styles.scrollContainer}>
						<ScrollView>
							<View style={styles.startersContainer}>
								{
									//MAps through starters
								}
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
								{
									//Map through main dishes
								}
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
								{
									//Map through dessert dishes
								}
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
  };
};

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
