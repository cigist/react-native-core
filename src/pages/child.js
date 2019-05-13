import React, { Component } from 'react';  
import { StyleSheet, Text, View } from 'react-native';  
  
export default class Child extends Component {  
constructor(props){
    super(props);
    this.state={
        name:props.name
    }
}

onText =(_name)=>{
    console.log(_name)
}
render() {  
    return (  
        <View style={{alignItems: 'center'}}>  
          <Text style={styles.welcome} onPress={this.onText('Alfa')}>Hello {this.state.name}!</Text>  
        </View>  
    );  
  }  
}  

const styles = StyleSheet.create({  
    welcome: {  
     fontSize: 30,  
   }  
 });  