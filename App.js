/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {counterIncrement, counterDecrement, counterClear, counterSet, helloAction} from './src/actions';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});





class App extends Component{
  constructor(props){
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
  }

  componentDidMount(){
    console.log(this.props)
  }

 onChangeText(number){
   const count = parseInt(number);
   this.props.counterSet(count);
 }
  render() {
    console.log(this.props);
    const {container, welcome, countViewStyle, button, clear} = styles;
    const {helloText, pressedButton} = this.props.hello;
    return (
      <View style={container}>
         <TextInput          
            style={{width: 40, height: 40, borderWidth: 1, marginBottom: 10}}
            onChangeText={this.onChangeText}
            value={this.props.count.toString()}
           />
          <View style={countViewStyle}>
            <Button title="+" onPress={this.props.counterIncrement} style={button}/>
            <Text style={welcome}>{this.props.count}</Text>
            <Button title="-" onPress={this.props.counterDecrement} style={button}/>
          </View> 
          <Button title="Clear" onPress={this.props.counterClear} style={clear}/>
          <Text>{helloText}</Text>
          <Text>Did you press the button ? {pressedButton.toString()}</Text>
          <Button onPress={this.props.helloAction} title="Show me the magic."/>
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
  button: {
    marginBottom: 10,
    padding: 0

  },
  clear: {
    marginTop: 10
  }

});

function mapStateToProps(state){
  return {
    count: state.counter,
    hello: state.hello
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({counterIncrement,counterDecrement, counterClear, counterSet, helloAction}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);