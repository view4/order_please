import React from 'react';
import { View, TouchableOpacity, StyleSheet} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class ScannerPage extends React.Component {
  render() {
    return(
      <View style={styles.background}>
        <TouchableOpacity 
          style={styles.container} 
          onPress={() => this.props.navigation.navigate('Thanks')}
          >
          <BarCodeScanner 
           style={StyleSheet.absoluteFillObject} 
            onBarCodeScanned={() => this.props.navigation.navigate('Thanks')} 
          />
        </TouchableOpacity>
      </View>
    )
  };
};

const styles = StyleSheet.create({
  container:{
    height: '50%',
    width: '50%',
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
