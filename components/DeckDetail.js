import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Deck from './Deck';
import TouchableButton from './TouchableButton';
import ButtonText from './ButtonText';
import { gray, textGray, green, white, red } from '../utils/colors';
import { connect } from 'react-redux';
import { removeDeck } from '../actions/index';

export class DeckDetail extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    removeDeck: PropTypes.func.isRequired,
    decks: PropTypes.object.isRequired
  };
  handleDelete = id => {
    this.props.removeDeck(id);
    this.props.navigation.goBack();
  };
  render() {
    const { navigation, decks } = this.props;
    const title = navigation.getParam('title', 'Undefined title');
    const deck = decks[title];
    
    return (
        <View style={styles.container}>
          <Deck id={deck.title} />
          <View>
            <TouchableButton
                btnStyle={{ backgroundColor: white, borderColor: textGray }}
                txtStyle={{ color: textGray }}
                onPress={() => this.props.navigation.navigate('AddCard', { title: deck.title })}
            >
              Add Card
            </TouchableButton>
            <TouchableButton
                btnStyle={{ backgroundColor: green, borderColor: white }}
                txtStyle={{ color: white }}
                onPress={() => this.props.navigation.navigate('Quiz')}
            >
              Start Quiz
            </TouchableButton>
          </View>
          <ButtonText
              txtStyle={{ color: red }}
              onPress={() => this.handleDelete(deck.title)}
          >
            Delete Deck
          </ButtonText>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15
  }
});

const mapStateToProps = decks => ({ decks });

export default connect(
    mapStateToProps,
    { removeDeck }
)(DeckDetail);