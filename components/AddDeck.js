import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

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
          
          <View style={styles.block}>
            <TextInput
                style={styles.input}
                value={this.state.value}
                onChangeText={this.handleChange}
            />
          </View>
          
          <View style={[styles.block, styles.btnContainer]}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Create Deck</Text>
            </TouchableOpacity>
          </View>
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
    borderColor: 'gray',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    height: 40
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: 'black',
    justifyContent: `center`,
    alignItems: `center`
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default AddDeck;