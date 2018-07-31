import React, { Component } from 'react';
import { AppRegistry, Alert, Button, StyleSheet, Text, View } from 'react-native';

export default class ButtonBasics extends React.Component {
    _onPressButton(){
      Alert.alert('You Tapped the Button!')
    }
  render(){
    return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <button onPress={this._onPressButton} title = "Press Me!" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={this._onPressButton} title="Press Me" color="#841584" />
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button onPress={this._onPressButton} title="This looks great!" />
        <Button onPress={this._onPressButton} title="OK!" color="#841584" />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
  flex: 1,
    justifyContent: 'center',

},
  buttonContainer: {
    margin: 20

  },
  alternativeLayoutButtonContainer: {
    margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'

  },
})
AppRegistry.registerComponent('AwesomeProject',() => ButtonBasics);
