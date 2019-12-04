import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import Deck from './Deck';
import TouchableButton from './TouchableButton';
import ButtonText from './ButtonText';
import { gray } from '../utils/colors';

export class DeckDetail extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  static navigationOptions = {
    title: 'Deck Details'
  };
  render() {
    return (
        <View style={styles.container}>
          <Deck />
          <View>
            <TouchableButton
                btnStyle={{ backgroundColor: 'white' }}
                txtStyle={{ color: 'black' }}
                onPress={() => this.props.navigation.navigate('AddCard')}
            >
              Add Card
            </TouchableButton>
            <TouchableButton
                btnStyle={{ backgroundColor: 'black' }}
                txtStyle={{ color: 'white' }}
                onPress={() => this.props.navigation.navigate('Quiz')}
            >
              Start Quiz
            </TouchableButton>
            <ButtonText
                txtStyle={{ color: 'red' }}
                onPress={() => console.log('deck deleted')}
            >
              Delete Deck
            </ButtonText>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: gray
  }
});

export default DeckDetail;