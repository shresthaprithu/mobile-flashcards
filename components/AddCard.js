import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import TouchableButton from './TouchableButton';
import { gray, green } from '../utils/colors';
import { connect } from 'react-redux';
import { addCardToDeck } from '../actions/index';
import { addCardToDeckAsync } from '../utils/api';

export class AddCard extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    addCardToDeck: PropTypes.func.isRequired
  };
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
  handleSubmit = () => {
    const { addCardToDeck, title, navigation } = this.props;
    const card = {
      question: this.state.question,
      answer: this.state.answer
    };
    
    addCardToDeck(title, card);
    addCardToDeckAsync(title, card);
    this.setState({ question: '', answer: '' });
    navigation.goBack();
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
                  autoFocus={true}
                  returnKeyType="next"
                  onSubmitEditing={() => this.answerTextInput.focus()}
                  blurOnSubmit={false}
              />
            </View>
            <View style={[styles.block]}>
              <TextInput
                  style={styles.input}
                  value={this.state.answer}
                  onChangeText={this.handleAnswerChange}
                  placeholder="Answer"
                  ref={input => {
                    this.answerTextInput = input;
                  }}
                  returnKeyType="done"
                  onSubmitEditing={this.handleSubmit}
              />
            </View>
            <TouchableButton
                btnStyle={{ backgroundColor: green, borderColor: '#fff' }}
                onPress={this.handleSubmit}
                disabled={this.state.question === '' || this.state.answer === ''}
            >
              Submit
            </TouchableButton>
          </View>
          <View style={{ height: '30%' }} />
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

const mapStateToProps = (state, { navigation }) => {
  const title = navigation.getParam('title', 'undefined');
  
  return {
    title
  };
};

export default connect(
    mapStateToProps,
    { addCardToDeck }
)(AddCard);