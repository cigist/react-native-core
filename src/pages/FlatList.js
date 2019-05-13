import React, { Component } from 'react'
import { StyleSheet, Text, FlatList, View } from 'react-native' 

export default class MyFlatList extends Component {
    state ={
        data:[  
            {key: 'Android'},{key: 'iOS'},
            {key: 'Java'},{key: 'Swift'}
        ],
    }
    renderSeparator = () => {  
        return (  
            <View  
                style={{  
                    height: 1,  
                    width: "100%",  
                    backgroundColor: "#000",  
                }}  
            />  
        );  
    };  
    render() {
        return (
            <View style={styles.container}>
                <Text style={[{ fontSize: 25, margin: 5 }, styles.center]}>Flat List</Text>
                <FlatList 
                    data={this.state.data}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    },  
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,  
    },  
}) 