import React, {Component} from 'react';
import { StyleSheet, Text, Image, TextInput, View, Alert, Button } from 'react-native';
require('./assets/treebackground.png');

export default class BackgroundImage extends Component {
  render() {
    const resizeMode = 'center';
    const text = 'I am some centered text';
    const remote ='https://github.com/pataran/Sudoku-Game/blob/master/assets/background1.png';
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            style={{
              flex: 1,
              resizeMode,
            }}
            source={{ uri: remote }}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
            }}
          >
            {text}
          </Text>
        </View>
      </View>
    );
  }
}