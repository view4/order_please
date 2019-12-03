import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class ThanksPage extends React.Component {
  render() {
	  return (
	    <View style={styles.container}>
        <Text style={styles.header}> Thank you!  </Text>
        <Text style={styles.text}> Now you just have to wait for the waiter/waitress  </Text>
        <Text style={styles.text}> The bill will be sent to you at the end  </Text>
	    </View>
	  );
  }

};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    fontFamily: 'arial',
    textAlign: 'center'
  },
  header: {
    fontSize: 36,
    fontFamily: 'arial',
    marginBottom: 36,
    textAlign: 'center'
  },
  text: {
    fontSize: 18,
    fontFamily: 'arial',
    marginBottom: 18,
    textAlign: 'center'
  },
})
