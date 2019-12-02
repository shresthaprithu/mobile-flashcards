import React from 'react';
import { StyleSheet, View } from 'react-native';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import AddCard from './components/AddCard';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          {/* <DeckList /> */}
          {/* <AddDeck /> */}
          <AddCard />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
  }
});