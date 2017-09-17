import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';

export default class CreateCell extends React.Component {
  

  render(){

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }

  return(
    <View style={styles.cell}/>
  );

  }

}

const styles = StyleSheet.create({  
     cell:{
      width: 30,
      height: 30,
      backgroundColor: 'green',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderBottomWidth: 2,
      borderLeftWidth: 2,
     },
  });