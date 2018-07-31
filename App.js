import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

/*export default class FlexDirection extends Component{
  render(){
    return(
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{width: 30, height: 30, backgroundColor: 'blue'}}/>
        <View style={{width: 70, height: 70, backgroundColor: 'red'}}/>
        <View style={{width: 100, height: 100, backgroundColor: 'green'}}/>
      </View>
    );
  }
};
AppRegistry.registerComponent('AwesomeProject', () => 'FlexDirection')*/

export default class JustifyContent extends Component{
  render(){
    return(
    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
      <View style={{width: 30,height: 30,backgroundColor: 'black'}}/>
      <View style={{width: 30,height: 30,backgroundColor: 'yellow'}}/>
      <View style={{width: 30,height: 30,backgroundColor: 'grey'}}/>
    </View>
    );
  }
};
AppRegistry.registerComponent('AwesomeProject', () => JustifyContent)

