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

import Button from '../components/button';

import tables from '../data/tablesData'; 
import { activeTableMember, setActiveTableMember } from '../data/activeTableMember';
import {activeTable, changeActiveTableValue} from '../data/activeTableData';

changeActiveTableValue(tables[1])


export default class TablePage extends React.Component {
  state={
    phoneNumber: '',
    tableMembers: [], 
    hasBillBeenSent: false,
  }
  componentDidMount() {
	this.setState({tableMembers: Object.values(activeTable)});
  }
  handlePersonPress = (person) => {
   setActiveTableMember(person)
   this.props.navigation.navigate('Menu');
  }
  sendBill = () => {
	this.setState({hasBillBeenSent: true});
  } 
  render() {
	var { tableMembers, hasBillBeenSent } = this.state;
	console.log(tableMembers)
	  return (
	    <View style={styles.container}>
	    	<View style={styles.tableMembersContainer}>
		
		{
			tableMembers.map(person => (
				<Button 
				  text={person.name.substring(0,3).toUpperCase()}
				  handleButtonPress={() => this.handlePersonPress(person)}
				  key={person.name}
				  customStyle={styles.button}
				/>

			))
		}
		  <Button text={'For the Table'} handleButtonPress={this.handlePersonPress} />
	   	</View>

	    	<View style={styles.SendBill}>
		 {
			hasBillBeenSent ? (<Text> 
			    The bill has been sent to the members of the table
			  </Text>) : (<Button 
			    text={'Send Bill'}
			    handleButtonPress={this.sendBill} 
			  />
		)} 
	   	</View>
	    </View>
	  );
  }

}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tableMembersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '30%',
    padding: 18
  },
  button: {
    width: '60',
    padding: 15,
    borderWidth: 1,
    borderColor: 'black',
    minHeight: '54px',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 7
  }
});
