import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import ButtonText from './ButtonText';
import TouchableButton from './TouchableButton';
import { gray, green, red, textGray, darkGray, white } from '../utils/colors';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

const screen = {
  QUESTION: 'question',
  ANSWER: 'answer',
  RESULT: 'result'
};
const answer = {
  CORRECT: 'correct',
  INCORRECT: 'incorrect'
};
const SCREEN_WIDTH = Dimensions.get('window').width;

class QuizIos extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    deck: PropTypes.object.isRequired
  };
  state = {
    show: screen.QUESTION,
    correct: 0,
    incorrect: 0,
    questionCount: this.props.deck.questions.length,
    answered: Array(this.props.deck.questions.length).fill(0)
  };
  handleScroll = () => {
    this.setState({
      show: screen.QUESTION
    });
  };
  handleAnswer = (response, page) => {
    if (response === answer.CORRECT) {
      this.setState(prevState => ({ correct: prevState.correct + 1 }));
    } else {
      this.setState(prevState => ({ incorrect: prevState.incorrect + 1 }));
    }
    this.setState(
        prevState => ({
          answered: prevState.answered.map((val, idx) => (page === idx ? 1 : val))
        }),
        () => {
          const { correct, incorrect, questionCount } = this.state;
          
          if (questionCount === correct + incorrect) {
            this.setState({ show: screen.RESULT });
          } else {
            this.scrollView.scrollTo({ x: (page + 1) * SCREEN_WIDTH });
            this.setState(prevState => ({
              show: screen.QUESTION
            }));
          }
        }
    );
  };
  handleReset = () => {
    this.setState(prevState => ({
      show: screen.QUESTION,
      correct: 0,
      incorrect: 0,
      answered: Array(prevState.questionCount).fill(0)
    }));
  };
  render() {
    const { questions } = this.props.deck;
    const { show } = this.state;
  
    if (questions.length === 0) {
      return (
          <View style={styles.pageStyle}>
            <View style={styles.block}>
              <Text style={[styles.count, { textAlign: 'center' }]}>
                There are no cards in the deck. Please add atleast one card or more and try again.
              </Text>
            </View>
          </View>
      );
    }
    
    if (this.state.show === screen.RESULT) {
      const { correct, questionCount } = this.state;
      const percent = ((correct / questionCount) * 100).toFixed(0);
      const resultStyle =
          percent >= 70 ? styles.resultTextGood : styles.resultTextBad;
      
      return (
          <View style={styles.pageStyle}>
            <View style={styles.block}>
              <Text style={[styles.count, { textAlign: 'center' }]}>
                Quiz Complete!
              </Text>
              <Text style={resultStyle}>
                {correct} / {questionCount} correct
              </Text>
            </View>
            <View style={styles.block}>
              <Text style={[styles.count, { textAlign: 'center' }]}>
                Percentage correct
              </Text>
              <Text style={resultStyle}>{percent}%</Text>
            </View>
            <View>
              <TouchableButton
                  btnStyle={{ backgroundColor: green, borderColor: white }}
                  onPress={this.handleReset}
              >
                Restart Quiz
              </TouchableButton>
              <TouchableButton
                  btnStyle={{ backgroundColor: gray, borderColor: textGray }}
                  txtStyle={{ color: textGray }}
                  onPress={() => {
                    this.handleReset();
                    this.props.navigation.goBack();
                  }}
              >
                Back To Deck
              </TouchableButton>
              <TouchableButton
                  btnStyle={{ backgroundColor: gray, borderColor: textGray }}
                  txtStyle={{ color: textGray }}
                  onPress={() => {
                    this.handleReset();
                    this.props.navigation.navigate('Home');
                  }}
              >
                Home
              </TouchableButton>
            </View>
          </View>
      );
    }
    
    return (
        <ScrollView
            style={styles.container}
            pagingEnabled={true}
            horizontal={true}
            onMomentumScrollBegin={this.handleScroll}
            ref={scrollView => {
              this.scrollView = scrollView;
            }}
        >
          {questions.map((question, idx) => (
              <View style={styles.pageStyle} key={idx}>
                <View style={styles.block}>
                  <Text style={styles.count}>
                    {idx + 1} / {questions.length}
                  </Text>
                </View>
                <View style={[styles.block, styles.questionContainer]}>
                  <Text style={styles.questionText}>
                    {show === screen.QUESTION ? 'Question' : 'Answer'}
                  </Text>
                  <View style={styles.questionWrapper}>
                    <Text style={styles.title}>
                      {show === screen.QUESTION
                          ? question.question
                          : question.answer}
                    </Text>
                  </View>
                </View>
                {show === screen.QUESTION ? (
                    <ButtonText
                        txtStyle={{ color: red }}
                        onPress={() => this.setState({ show: screen.ANSWER })}
                    >
                      Answer
                    </ButtonText>
                ) : (
                    <ButtonText
                        txtStyle={{ color: red }}
                        onPress={() => this.setState({ show: screen.QUESTION })}
                    >
                      Question
                    </ButtonText>
                )}
                <View>
                  <TouchableButton
                      btnStyle={{ backgroundColor: green, borderColor: white }}
                      onPress={() => this.handleAnswer(answer.CORRECT, idx)}
                      disabled={this.state.answered[idx] === 1}
                  >
                    Correct
                  </TouchableButton>
                  <TouchableButton
                      btnStyle={{ backgroundColor: red, borderColor: white }}
                      onPress={() => this.handleAnswer(answer.INCORRECT, idx)}
                      disabled={this.state.answered[idx] === 1}
                  >
                    Incorrect
                  </TouchableButton>
                </View>
              </View>
          ))}
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pageStyle: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    justifyContent: 'space-around',
    width: SCREEN_WIDTH
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
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    flexGrow: 1
  },
  questionWrapper: {
    flex: 1,
    justifyContent: 'center'
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

const mapStateToProps = (state, { title }) => {
  const deck = state[title];
  
  return {
    deck
  };
};

export default withNavigation(connect(mapStateToProps)(QuizIos));