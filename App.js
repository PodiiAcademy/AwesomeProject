import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>Hello World Im red!</Text>
        <Text style={styles.blue}>Hello World Im blue!</Text>
        <Text style={[styles.red, styles.blue]}>Hello World I am.. BLUE AGAIN!</Text>
        <Text style={[styles.blue, styles.yellow]}>Hello World Im yellow!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blue: {
    color: 'blue',
    fontSize: 25,
  },
  red: {
    color: 'red',
    fontWeight: 'bold',
  },
  yellow: {
   color: 'yellow',
  fontSize: 10,
  },
});
