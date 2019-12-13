import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner'; // Bar code scanner component from expo.
import { customerName } from '../data/customerDetails';
import { addCustomerToTable } from '../data/tablesData';


export default class ScannerPage extends React.Component {
  handleCodeScan = ({type, data}) => {
    var table = parseInt(data); //converts data from qr code and converts to number.
    if(table == 8){ // If it matches one of the tables then adds the user to this table.
      addCustomerToTable(8, customerName)
    };
    this.props.navigation.navigate('Thanks')
  };
  
  render() {
    return(
      <View style={styles.background}>
        <TouchableOpacity 
          style={styles.container} 
          onPress={() => this.props.navigation.navigate('Thanks')}
          >
          <BarCodeScanner 
           style={StyleSheet.absoluteFillObject} 
            onBarCodeScanned={this.handleCodeScan} 
          />
        </TouchableOpacity>
      </View>
    )
  };
};

const styles = StyleSheet.create({
  container:{
    height: 300,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
