
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class Calc extends Component{
  constructor(props){
    super(props);
    this.state={
      count: 0,
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onPressIncrement = this.onPressIncrement.bind(this);
    this.onPressDecrement = this.onPressDecrement.bind(this);
    this.onPressClear = this.onPressClear.bind(this);
  }

  onPressIncrement(){
    this.setState({count: this.state.count + 1});
  }

  onPressDecrement(){
    this.setState({count: this.state.count -  1});
  }
  onPressClear(){
    this.setState({count : 0});
  }
 onChangeText(number){
   const count = parseInt(number);
   this.setState({count});
 }
  render() {
    const {container, welcome, countViewStyle, button, clear} = styles;
    return (
      <View style={container}>
         <TextInput          
            style={{width: 40, height: 40, borderWidth: 1, marginBottom: 10}}
            onChangeText={this.onChangeText}
            value={this.state.count.toString()}
           />
          <View style={countViewStyle}>
            <Button title="+" onPress={this.onPressIncrement} style={button}/>
            <Text style={welcome}>{this.state.count}</Text>
            <Button title="-" onPress={this.onPressDecrement} style={button}/>
          </View> 
          <Button title="Clear" onPress={this.onPressClear} style={clear}/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  countViewStyle: {
    flexDirection: "row",
    marginBottom: 10
  },
 

});
