import React, { Component } from 'react'
import { StyleSheet, Text, ListView, View } from 'react-native'


export default class MylistView extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([{key: 'Android'},{key: 'iOS'},
            {key: 'Java'},{key: 'Swift'}]),
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={[{ fontSize: 25, margin: 5 }, styles.center]}>List View</Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={
                        (rowData) =><Text style={styles.item}>{rowData.key}</Text>
                    }
                    renderSeparator={(sectionId, rowId) =><View key={rowId} style={styles.separator} />}//adding separation  
                />
            </View>
        )
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
    separator:{
        height: 1,  
        width: "100%",  
        backgroundColor: "#000",  
    }
}) 