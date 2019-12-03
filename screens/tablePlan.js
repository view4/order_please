import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Button from '../components/button';

import { tables } from '../data/tablesData';
import { changeActiveTableValue, setActiveTableNumber } from '../data/activeTableData';

export default class TablePlanPage extends React.Component {
  handleTablePress = (val) => {
   changeActiveTableValue(tables[val])
   setActiveTableNumber(val)
   this.props.navigation.navigate('Table');
  };

  render() {
	  return (
	    <View style={styles.container}>
	    	<Text style={styles.title}> Tables</Text>
        <View style={styles.rowContainer}>
          <Button  text={'1'} handleButtonPress={() => this.handleTablePress(1)} />
          <Button text={'2'} handleButtonPress={() => this.handleTablePress(2)} />
          <Button text={'3'} handleButtonPress={() => this.handleTablePress(3)} />
        </View>
        <View style={styles.rowContainer}>
          <Button text={'4'} handleButtonPress={() => this.handleTablePress(4)} />
          <Button text={'5'} handleButtonPress={() => this.handleTablePress(5)} />
          <Button text={'6'} handleButtonPress={() => this.handleTablePress(6)} />
        </View>
	    	<View style={styles.rowContainer}>
          <Button text={'7'} handleButtonPress={() => this.handleTablePress(7)} />
          <Button text={'8'} handleButtonPress={() => this.handleTablePress(8)} />
          <Button text={'9'} handleButtonPress={() => this.handleTablePress(9)} />
        </View>
        <View style={styles.rowContainer}>
          <Button text={'10'} handleButtonPress={() => this.handleTablePress(10)} />
          <Button text={'11'} handleButtonPress={() => this.handleTablePress(11)} />
          <Button text={'12'} handleButtonPress={() => this.handleTablePress(12)} />
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

  rowContainer: {
    flexDirection: 'row',
  }, 

  title: {
    fontSize: 18
  }

})
