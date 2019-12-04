import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import TouchableButton from './TouchableButton';
import { gray, green } from '../utils/colors';

export class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  };
  handleQuestionChange = question => {
    this.setState({ question });
  };
  handleAnswerChange = answer => {
    this.setState({ answer });
  };
  render() {
    return (
        <View style={styles.container}>
          <View>
            <View style={styles.block}>
              <Text style={styles.title}>Add a question</Text>
            </View>
            <View style={[styles.block]}>
              <TextInput
                  style={styles.input}
                  value={this.state.question}
                  onChangeText={this.handleQuestionChange}
                  placeholder="Question"
              />
            </View>
            <View style={[styles.block]}>
              <TextInput
                  style={styles.input}
                  value={this.state.answer}
                  onChangeText={this.handleAnswerChange}
                  placeholder="Answer"
              />
            </View>
          </View>
          <TouchableButton
              btnStyle={{ backgroundColor: green }}
              onPress={() => console.log('card added')}
          >
            Submit
          </TouchableButton>
        </View>
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
    justifyContent: 'space-around'
  },
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
  }
});

export default AddCard;