import React, {Component} from 'react';
import { StyleSheet, Text, Image, TextInput, View, Alert, Button,TouchableNativeFeedback } from 'react-native';


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

        // for(var j = 0; j < 9; j++){
        //   cells.push(<View key ={"cell"+i} style ={styles.cell}>
        //             <TextInput></TextInput>
        //              </View>
        //             )
        // } 
    
 

    return (
     <View style={styles.wrapper}>
        <View style={styles.timer}>
       <BlinkingClass text= "blinkn" />
        </View>
       <Image style={styles.background} source={require('./assets/background1.png')}>
      <View style={styles.wrapper}>  
        <View style={styles.gridContainer}>
          {rows}
        </View>
        <View style={styles.userInputContainer}>
        {renderUserSelect}
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
   // backgroundColor: 'yellow',
    
  },

  rows:{
    flex:3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
   // backgroundColor: 'black',
  
  },

  cell:{
    width: 30,
    height: 30,
    backgroundColor: 'green',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    opacity: .5,
    borderRadius: 5,
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
    alignItems: 'flex-start',
    //backgroundColor: 'green',
  },

  userNumInputs:{   
    width: 35,
    height: 35, 
    backgroundColor: 'blue',
    opacity: .5,
    borderRadius: 6,
    marginTop: 5,
  },

  timer:{
    backgroundColor:'black',
    height:50,
  },

  

});


