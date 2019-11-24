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
import {activeTable, changeActiveTableValue} from '../data/activeTableData';

export default class TablePlanPage extends React.Component {
  state={
    phoneNumber: ''
  }
  handleTablePress = (val) => {
   changeActiveTableValue(tables[val])
   this.props.navigation.navigate('Table');

  }
  render() {

	  return (
	    <View style={styles.container}>
		<View style={styles.container}>
		  <Button  text={'1'} handleButtonPress={() => this.handleTablePress(1)} />
		  <Button text={'2'} handleButtonPress={() => this.handleTablePress(2)} />
		  <Button text={'3'} handleButtonPress={() => this.handleTablePress(3)} />
	   	</View>
	   	<View style={styles.container}>
		  <Button text={'4'} handleButtonPress={() => this.handleTablePress(4)} />
		  <Button text={'5'} handleButtonPress={() => this.handleTablePress(5)} />
		  <Button text={'6'} handleButtonPress={() => this.handleTablePress(6)} />
	   	</View>
	    	<View style={styles.container}>
		  <Button text={'7'} handleButtonPress={() => this.handleTablePress(7)} />
		  <Button text={'8'} handleButtonPress={() => this.handleTablePress(8)} />
		  <Button text={'9'} handleButtonPress={() => this.handleTablePress(9)} />
	   	</View>
	    	<View style={styles.container}>
		  <Button text={'10'} handleButtonPress={() => this.handleTablePress(10)} />
		  <Button text={'11'} handleButtonPress={() => this.handleTablePress(11)} />
		  <Button text={'12'} handleButtonPress={() => this.handleTablePress(12)} />
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
  table: {
    width: '30px'
  }
})

// Truth is I thinkt he width of each button can be set to be something anyway and I think it is fine. I do not know why these one's are taking up the whole width, and so I think some other styling changes could be done anyways. 
