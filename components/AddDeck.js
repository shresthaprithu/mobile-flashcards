import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import TouchableButton from './TouchableButton';

export class AddDeck extends Component {
  state = {
    text: ''
  };
  handleChange = text => {
    this.setState({ text });
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
                value={this.state.value}
                onChangeText={this.handleChange}
            />
          </View>
          <TouchableButton
              onPress={() => console.log('deck added - console test')}
          >
            Create Deck
          </TouchableButton>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    marginBottom: 20
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

export default AddDeck;