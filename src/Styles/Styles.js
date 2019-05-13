import React, { Component } from 'react'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    center: {
        textAlign: 'center'
    },
    buttonContainer: {
        margin: 20
    },
    multiButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    containerList: {
        flex: 1,
        flexDirection: 'row',// set elements horizontally, try column.  ('row', 'row-reverse', 'column', 'column-reverse')
        justifyContent: 'center', // enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly')
        alignItems: 'stretch',// ('flex-start', 'flex-end', 'center', 'stretch', 'baseline')
    }
});

export default styles 