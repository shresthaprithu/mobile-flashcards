import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AddDeck from './components/AddDeck';
// import APITest from './components/APITest';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <AddDeck />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30
  }
});