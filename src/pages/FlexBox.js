import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FlexBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.powderblue} />
                <View style={styles.skyblue} />
                <View style={styles.steelblue} />
            </View>
        );
    }
}
const styles = StyleSheet.create({  
    container:{  
        flex: 1,  
        flexDirection: 'row',// set elements horizontally, try column.  ('row', 'row-reverse', 'column', 'column-reverse')
        justifyContent: 'center', // enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly')
        alignItems: 'stretch',// ('flex-start', 'flex-end', 'center', 'stretch', 'baseline')
    },  
    powderblue:{  
        width: '30%',  
        height: 60,  
        backgroundColor: 'powderblue',  
    },  
    skyblue:{  
        width: '30%',  
        height: 60,  
        backgroundColor: 'skyblue',  
    },  
    steelblue:{  
        width: '30%',  
        height: 60,  
        backgroundColor: 'steelblue',  
    }  
})  