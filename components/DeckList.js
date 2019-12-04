import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Deck from './Deck';
import { gray, green } from '../utils/colors';

export class DeckList extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  render() {
    return (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Mobile Flashcards</Text>
          <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DeckDetail')}
          >
            <Deck />
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DeckDetail')}
          >
            <Deck />
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DeckDetail')}
          >
            <Deck />
          </TouchableOpacity>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 16,
    color: green
  }
});

export default DeckList;