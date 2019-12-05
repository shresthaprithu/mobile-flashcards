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
    deck: PropTypes.object
  };
  shouldComponentUpdate(nextProps) {
    return nextProps.deck !== undefined;
  }
  handleDelete = id => {
    this.props.removeDeck(id);
    this.props.navigation.goBack();
  };
  render() {
    const { deck } = this.props;
    
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

const mapStateToProps = (state, { navigation }) => {
  const title = navigation.getParam('title', 'undefined');
  const deck = state[title];
  
  return {
    deck
  };
};

export default connect(
    mapStateToProps,
    { removeDeck }
)(DeckDetail);