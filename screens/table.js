import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native';

import * as SMS from 'expo-sms';
//import { Dimensions } from 'Dimensions';

import Button from '../components/button';

import {  setActiveTableMember } from '../data/activeTableMember';
import {activeTable} from '../data/activeTableData';
const { height, width } = Dimensions.get('window');

var customerPhoneNumber = '07826930019'

export default class TablePage extends React.Component {
  state = {
    phoneNumber: '',
    tableMembers: [], 
    hasBillBeenSent: false,
  };

  componentWillMount() {
    //console.log(activeTable)
    this.updateTableMembers()
  };
  componentDidMount() {
    this.willFocusSubscription = this.props.navigation.addListener('willFocus', () => this.updateTableMembers() )
  }
  updateTableMembers () {
    this.setState({tableMembers: Object.values(activeTable)});
  };
  handlePersonPress = (person) => {
   setActiveTableMember(person)
   this.props.navigation.navigate('Menu');
  };

  sendBill = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable && customerPhoneNumber) {
      const { result } = await SMS.sendSMSAsync(
        customerPhoneNumber,
        'sample text message'
      );

    } else {
      console.log('sms is not currently available')
    }
	  this.setState({hasBillBeenSent: true});
  } ;

  render() {
    var { tableMembers, hasBillBeenSent } = this.state;
	  return (
	    <View style={styles.container}>

	    	<View style={styles.tableMembersContainer}>
		
      {
        tableMembers.map(person => (
          <Button 
            text={person.name}
            handleButtonPress={() => this.handlePersonPress(person)}
            key={person.name}
            customStyle={styles.button}
            total={person.total}
          />
        ))
      }
	   	  </View>
         <Button text={'For the Table'} handleButtonPress={this.handlePersonPress} customStyle={styles.button}/>
	    	<View style={styles.SendBill}>
      {
        hasBillBeenSent ? (<Text style={styles.emailMessage}> 
            The bill has been emailed to members of the table
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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tableMembersContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    padding: 10,
    marginTop: '7%',
    height: (height / 2)  - 18
  },
  button: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'black',
    minHeight: 36,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 7,
    width: (width / 3) + 7
  },
  emailMessage:{
    color: 'blue'
  },
  sendBill: {
    alignSelf: 'flex-end',
    marginBottom: 18
  }
});
