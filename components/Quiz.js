import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import ButtonText from './ButtonText';
import TouchableButton from './TouchableButton';
import { gray, green, red, textGray, darkGray, white } from '../utils/colors';

const screen = {
  QUESTION: 'question',
  ANSWER: 'answer',
  RESULT: 'result'
};

export class Quiz extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  state = {
    screen: screen.QUESTION
  };
  render() {
    switch (this.state.screen) {
      case screen.QUESTION:
        return (
            <View style={styles.container}>
              <View style={styles.block}>
                <Text style={styles.count}>2 / 2</Text>
              </View>
              <View style={[styles.block, styles.questionContainer]}>
                <Text style={styles.questionText}>Question</Text>
                <Text style={styles.title}>
                  Does React Native work with Android?
                </Text>
              </View>
              <ButtonText
                  txtStyle={{ color: red }}
                  onPress={() => this.setState({ screen: screen.ANSWER })}
              >
                Answer
              </ButtonText>
              <View>
                <TouchableButton
                    btnStyle={{ backgroundColor: green, borderColor: white }}
                    onPress={() => this.setState({ screen: screen.RESULT })}
                >
                  Correct
                </TouchableButton>
                <TouchableButton
                    btnStyle={{ backgroundColor: red, borderColor: white }}
                    onPress={() => this.setState({ screen: screen.RESULT })}
                >
                  Incorrect
                </TouchableButton>
              </View>
            </View>
        );
      case screen.ANSWER:
        return (
            <View style={styles.container}>
              <View style={styles.block}>
                <Text style={styles.count}>2 / 2</Text>
              </View>
              <View style={[styles.block, styles.questionContainer]}>
                <Text style={styles.questionText}>Answer</Text>
                <Text style={styles.title}>
                  Yes! React Native works with Android, iOS, Windows, & Web.
                </Text>
              </View>
              <ButtonText
                  txtStyle={{ color: red }}
                  onPress={() => this.setState({ screen: screen.QUESTION })}
              >
                Question
              </ButtonText>
              <View>
                <TouchableButton
                    btnStyle={{ backgroundColor: green, borderColor: white }}
                    onPress={() => this.setState({ screen: screen.RESULT })}
                >
                  Correct
                </TouchableButton>
                <TouchableButton
                    btnStyle={{ backgroundColor: red, borderColor: white }}
                    onPress={() => this.setState({ screen: screen.RESULT })}
                >
                  Incorrect
                </TouchableButton>
              </View>
            </View>
        );
      case screen.RESULT:
        return (
            <View style={styles.container}>
              <View style={styles.block}>
                <Text style={styles.count}>Done</Text>
              </View>
              <View style={styles.block}>
                <Text style={[styles.count, { textAlign: 'center' }]}>
                  Quiz Complete!
                </Text>
                <Text style={styles.resultTextGood}>3 / 4 correct</Text>
              </View>
              <View style={styles.block}>
                <Text style={[styles.count, { textAlign: 'center' }]}>
                  Percentage correct
                </Text>
                <Text style={styles.resultTextGood}>75%</Text>
              </View>
              <View>
                <TouchableButton
                    btnStyle={{ backgroundColor: green, borderColor: white }}
                    onPress={() => this.setState({ screen: screen.QUESTION })}
                >
                  Restart Quiz
                </TouchableButton>
                <TouchableButton
                    btnStyle={{ backgroundColor: gray, borderColor: textGray }}
                    txtStyle={{ color: textGray }}
                    onPress={() => this.props.navigation.goBack()}
                >
                  Back to Deck
                </TouchableButton>
              </View>
            </View>
        );
    }
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
  count: {
    fontSize: 24
  },
  title: {
    fontSize: 32,
    textAlign: 'center'
  },
  questionContainer: {
    backgroundColor: white,
    paddingTop: 20,
    paddingBottom: 20
  },
  questionText: {
    textAlign: 'center',
    fontSize: 20
  },
  resultTextGood: {
    color: green,
    fontSize: 46,
    textAlign: 'center'
  },
  resultTextBad: {
    color: red,
    fontSize: 46,
    textAlign: 'center'
  }
});

export default Quiz;