import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Deck = props => {
  const { deck } = props;
  return (
      <View style={styles.deckContainer}>
        <View>
          <Text style={styles.deckText}>{deck.title}</Text>
        </View>
        <View>
          <Text style={styles.cardText}>{deck.questions.length} cards</Text>
        </View>
      </View>
  );
};
Deck.propTypes = {
  deck: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  deckContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: 120,
    minHeight: 120,
    marginBottom: 10
  },
  deckText: {
    fontSize: 28
  },
  cardText: {
    fontSize: 18,
    color: 'black'
  }
});

export default Deck;