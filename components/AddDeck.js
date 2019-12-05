import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import TouchableButton from './TouchableButton';
import { gray, green, white, textGray } from '../utils/colors';
import { connect } from 'react-redux';
import { addDeck } from '../actions/index';
import { saveDeckTitleAsync } from '../utils/api';

export class AddDeck extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    addDeck: PropTypes.func.isRequired
  };
  state = {
    text: ''
  };
  handleChange = text => {
    this.setState({ text });
  };
  handleSubmit = () => {
    const { addDeck, navigation } = this.props;
  
    const { text } = this.state;
  
    addDeck(text);
    saveDeckTitleAsync(text);
    
    this.setState(() => ({ text: '' }));
    navigation.goBack();
  };
  render() {
    return (
        <View>
          <View style={styles.block}>
            <Text style={styles.title}>What is the title of your new deck?</Text>
          </View>
          <View style={[styles.block]}>
            <TextInput
                style={styles.input}
                value={this.state.text}
                onChangeText={this.handleChange}
                placeholder="Deck Name"
                autoFocus={true}
                returnKeyType="done"
                onSubmitEditing={this.handleSubmit}
            />
          </View>
          <TouchableButton
              btnStyle={{ backgroundColor: green, borderColor: white }}
              onPress={this.handleSubmit}
              disabled={this.state.text === ''}
          >
            Create Deck
          </TouchableButton>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    marginBottom: 20,
    padding: 30
  },
  title: {
    textAlign: 'center',
    fontSize: 32
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    height: 40
  }
});

export default connect(
    null,
    { addDeck }
)(AddDeck);