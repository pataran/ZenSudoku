import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert, Button, TextInput } from 'react-native';
import CreateCell from './cell';

export default class CreateBoard extends React.Component {
  
  render() {
    
    // const rows = [];
    // const cells = [];

    //     for(var i = 0; i < 9; i++ ){ 
    //         rows.push(
    //         <View key={i} style= {styles.rows}>
    //             <Text> yo </Text>
    //         </View>
    //         );      
    //     };
    //         console.log(rows.toString());
    var form = ['First Name', 'Last Name', 'Phone', 'Email'];
    var textInputComponents = form.map((type) =><TextInput placeholder={type} />)
    {textInputComponents}
    return (
         < View> <Text> {textInputComponents}</Text></View>
           
    );
  }
}

const styles = StyleSheet.create({
 
   rows:{
     flex:3,
     flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'center',
     backgroundColor: 'black',
   
   },
 
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