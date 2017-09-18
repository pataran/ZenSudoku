import React, {Component} from 'react';
import { StyleSheet, Text, Image, TextInput, View, Alert, Button,TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Zen Sudoku',
  };
  render() {
    const {navigate} = this.props.navigation; 
    return (
      <View style={styles.container}>
        <Button
          style = {styles.playButton}
          onPress={() => navigate('Difficulty')}
          title="Play"
        />  
      </View>);
  }
}

class DifficultyScreen extends React.Component{
  static navigationOptions = {
    title: 'Difficulty',
  };
  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
        <Button
          style = { styles.playButton }          
          onPress={() => navigate('Game')}
          title="EASY"
          color="pink"
        />
        <Button
          style = {styles.playButton}
          onPress={() => navigate('Game')}
          title="MEDIUM"
          color="orange"
        />
        <Button
          style = {styles.playButton}          
          onPress={() => navigate('Game')}
          title="HARD"
          color="red"
        />
        <Button
          style = {styles.playButton}          
          onPress={() => navigate('Game')}
          title="XTREME"
          color="purple"
          //disabled={true}
        />
      </View>
    );
  }
}

class GameScreen extends React.Component {
  static navigationOptions = {
    title: 'Game',
  };
  render() {
    return <App />;
  }
}

const MainNavigation = StackNavigator({
  Home: { screen: HomeScreen },
  Difficulty: {screen: DifficultyScreen} ,
  Game: { screen: GameScreen },
});

export default MainNavigation;



export default class App extends React.Component {
  
  constructor (){
    super();
    this.state = {gameStarted:false}
  }

  focusTextInput(){
    this.focusTextInput.focus();
  }

  startGame(){
    this.setState({gameStarted:true})
  }

  render() {
   const {gameStarted} = this.state

   var rows = [];
   var cells = [];
   var renderUserSelect = [];
 
   function getId(cells){
     console.log(cells);
   }

   function userNumSelection(){

    for(var i = 1; i < 10; i++){

      renderUserSelect.push(
      <TouchableNativeFeedback 
          key={"userNumSelection"+i}
          onPress={this._onPressButton}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.userNumInputs}>
              <Text style={{margin: 5,color:"white",fontSize:16, opacity:1}}>{i}</Text>
          </View>
      </TouchableNativeFeedback> 
      ) 
    }
   }

   userNumSelection();
  
   for(var i = 0; i < 9; i++){
     rows.push(<View key={"row"+i}style={styles.rows}>  
                   
                   <View key ={"cell"+((1*9^i)+i)} style ={styles.cell}/>
                   <View key ={"cell"+((2*9^i)+i)} style ={styles.cell}/>
                   <View key ={"cell"+((3*9^i)+i)} style ={styles.cell}/>
                   
                   <View key ={"cell"+((4*9^i)+i)} style ={styles.cell}/>
                   <View key ={"cell"+((5*9^i)+i)} style ={styles.cell}/>
                   <View key ={"cell"+((6*9^i)+i)} style ={styles.cell}/>
                   
                   <View key ={"cell"+((7*9^i)+i)} style ={styles.cell}/>
                   <View key ={"cell"+((8*9^i)+i)} style ={styles.cell}/>
                   <View key ={"cell"+((9*9^i)+i)} style ={styles.cell}/>
                 
                </View> 
          )
    }

   // console.log(rows.toString());

  //  var celldom = rows.map(function(cell) {
  //   console.log(cell.toString());
  //   for(var key in cell){
  //       for(var x in key){
  //         console.log(x);
  //      }
  //    console.log(key.toString());
  //    }
  // });

// var values = Array.prototype.map.call(rows, function(obj) {
//   return obj.value;
// });
// console.log(values);

    return (
     <View style={styles.wrapper}>
        <View style={styles.timer}>
       <BlinkingClass text= "00.00" />
        </View>
       <Image style={styles.background} source={require('./assets/background1.png')}>
      <View style={styles.wrapper}>  
        <View style={styles.gridContainer}>
          {rows}
        </View>
      <View style={styles.userInputContainer}>
        {renderUserSelect}
        <Text style={[styles.userNumInputs, styles.textUp]}> TAG </Text>
        </View>
      </View> 
      </Image>
    </View>
   
     
    );
  }
}

class Cell extends React.Component {
  render() {
    return (
      <Text>{this.props.value}</Text>
    );
  }
}

class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }


  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

class BlinkingClass extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Change the state every second or the time given by User.
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 
    // Define any blinking time.
    1000);
  }  
   render() {
    
      let display = this.state.showText ? this.props.text : ' ';
      return (
        <Text style = {{ textAlign: 'center', marginTop : 10,color:'white',fontSize:32 }}>{display}</Text>
      );
    }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 4,
    flexDirection: 'column',
  },

  gridContainer: {
    flex:3,
    marginTop:20,
   // backgroundColor: 'yellow',
    
  },

  rows:{
    flex:3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
   // backgroundColor: 'black',
  
  },

  cellsLine:{
    borderWidth:2,
    borderColor:"black",
    backgroundColor:"black",
    width:1,
    opacity: .5,
    height:50,
   },

  cell:{
    width: 32,
    height: 32,
    backgroundColor: 'green',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    opacity: .5,
   },

   background:{
     flex:1,
     width: '100%',
     height:'100%',
    // resizeMode: 'contain',
   },

  

  userInputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
   // backgroundColor: 'green',
  },

  userInputContainerInner:{
    flexDirection:'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  //  backgroundColor: 'black',
  },

  userNumInputs:{   
    width: 35,
    height: 35, 
    backgroundColor: 'blue',
    opacity: .8,
    borderRadius: 6,
    marginTop: 5,
  },

  timer:{
    backgroundColor:'black',
    height:50,
  },

  textUp:{
    flexDirection: 'column',
    color:'white',
  },
  
  ///Navigation and Screens
  container: {
    flex: 2,
    alignSelf: 'center',
    //justifyContent: 'center',
    marginTop: 20,
  },

  playButton: {

  },

});


