import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { white, textGray } from '../utils/colors';

const Deck = () => {
  return (
      <View style={styles.deckContainer}>
        <View>
          <Text style={styles.deckText}>Deck 1</Text>
        </View>
        <View>
          <Text style={styles.cardText}>3 cards</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  deckContainer: {
    alignItems: 'center',
    flexBasis: 120,
    minHeight: 120,
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