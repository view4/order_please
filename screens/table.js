import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native';
import * as SMS from 'expo-sms';
const { height, width } = Dimensions.get('window');

import Button from '../components/button';

import { customerPhoneNumbers } from '../data/customerDetails';
import { setActiveTableMember } from '../data/activeTableMember';
import { activeTable } from '../data/activeTableData';

export default class TablePage extends React.Component {
  state = {
    tableMembers: [], 
    hasBillBeenSent: false,
  };

  componentWillMount() {
    this.updateTableMembers()
  };
  componentDidMount() {
    //Updates values once returning to this screen from the 'ordering' screen
    this.willFocusSubscription = this.props.navigation.addListener('willFocus', () => this.updateTableMembers() )
  }
  updateTableMembers () {
    // Add table members from data to component. 
    this.setState({tableMembers: Object.values(activeTable)});
  };
  handlePersonPress = (person) => {
    // Sets active table member in the data, and then navigates to the next page. 
   setActiveTableMember(person)
   this.props.navigation.navigate('Menu');
  };

  sendBill = async () => {
    // Handles sending the message from the phone from expo package. 
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable && customerPhoneNumbers.length) {
      var billMessage = this.createMessageBill();
      const { result } = await SMS.sendSMSAsync(
        customerPhoneNumbers,
        billMessage
      );
    } else {
      console.log('sms is not currently available')
    };
	  this.setState({hasBillBeenSent: true});
  } ;

  createMessageBill () {
    // Constructs the content of the message. 
    var {tableMembers} = this.state;
    var message = 'The bill for your table is:';

    for (var i = 0; i< tableMembers.length; i++){
      if (tableMembers[i].total){
        // Adds bill for each customer. 
        message = message.concat(`\n${tableMembers[i].name}, ₪${tableMembers[i].total}.`);
      };
    };
    return message;
  };

  render() {
    var { tableMembers, hasBillBeenSent } = this.state;
	  return (
	    <View style={styles.container}>
	    	<View style={styles.tableMembersContainer}>
          {
            //Maps through all members of table and produces a responsive button for each.
          }
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
            //Button for sending the bill.
          }
          {
            hasBillBeenSent ? (<Text style={styles.emailMessage}> 
                The bill has been sent to members of the table
              </Text>) : (<Button 
                text={'Send Bill'}
                handleButtonPress={this.sendBill} 
              />
          )} 
	   	  </View>
	    </View>
	  );
  };
};

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
