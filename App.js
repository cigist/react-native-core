/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Alert,
  ActivityIndicator
} from 'react-native';
import { WebView } from "react-native-webview";
import styles from './src/Styles/Styles'
import Child from './src/pages/child';
import ChildConst from './src/pages/ChildConts'
import FlexBox from './src/pages/FlexBox'
import MyFlatList from './src/pages/FlatList'
import MyListView from './src/pages/ListView'
import Drawer from './src/pages/Drawer'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
export default class App extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      password: '',
      isPasswordVisible: true,
      toggleText: 'Show',
      childName: 'This from external js file not class'
    }
  }

  handleToogle = () => {
    const { isPasswordVisible } = this.state;
    if (isPasswordVisible) {
      this.setState({ isPasswordVisible: false });
      this.setState({ toggleText: 'Hide' });
    } else {
      this.setState({ isPasswordVisible: true });
      this.setState({ toggleText: 'Show' });
    }
  }

  onPressButton = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Drawer />
        <TextInput
          maxLength={6}
          autoFocus={false}
          autoCorrect={true}
          keyboardType={'numeric'}
          placeholder="Password"
          secureTextEntry={this.state.isPasswordVisible}
          style={{ flex: 1, flexDirection: "row", width: '90%', backgroundColor: '#a7a6a9', color: 'white', fontSize: 20, marginLeft: 10, marginRight: 10, marginTop: 10 }}
        />
        <TouchableOpacity onPress={this.handleToogle}>
          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.toggleText}</Text>
        </TouchableOpacity>
        <Child name='cigist' />
        <ChildConst myState={this.state.childName} />
        <Text style={[{ fontSize: 25, margin: 5 }, styles.center]}>Layout and Flexbox</Text>
        <FlexBox style={{ margin: 0 }} />
        <View style={styles.multiButtonContainer}>
          <Button
            onPress={this.onPressButton}
            title="Show Alert"
            disabled={true}
          />
          <Button
            onPress={this.onPressButton}
            title="Show Alert"
            color="#009933"
          />
        </View>
        <View style={styles.containerList}>
          <MyFlatList style={{ width: '100%', backgroundColor: 'powderblue', }} />
          <MyListView style={{ width: '100%', backgroundColor: 'skyblue', }} />
        </View>
        <Text style={[{ fontSize: 25, margin: 5 }, styles.center]}>Indicator</Text>
        <ActivityIndicator animating={true} size="large" color="#ff0000" />
        <Text style={[{ fontSize: 25, margin: 5 }, styles.center]}>Webview</Text>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <WebView
            source={{ uri: 'https://exaq.id' }}
            style={{ marginTop: 20 }}
          />
        </View>

      </ScrollView>
    );
  }
}

