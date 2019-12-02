import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ButtonText from './ButtonText';
import TouchableButton from './TouchableButton';

const screen = {
  QUESTION: 'question',
  ANSWER: 'answer',
  RESULT: 'result'
};

export class Quiz extends Component {
  state = {
    screen: screen.QUESTION
    //screen: screen.RESULT
  };
  render() {
    switch (this.state.screen) {
      case screen.QUESTION:
        return (
            <View style={styles.container}>
              <View style={styles.block}>
                <Text style={styles.count}>2 / 2</Text>
              </View>
              <View style={styles.block}>
                <Text style={styles.title}>
                  Does React Native work with Android?
                </Text>
              </View>
              <ButtonText
                  onPress={() => this.setState({ screen: screen.ANSWER })}
              >
                Answer
              </ButtonText>
              <View>
                <TouchableButton
                    btnStyle={{ backgroundColor: 'green' }}
                    onPress={() => console.log('answer correct')}
                >
                  Correct
                </TouchableButton>
                <TouchableButton
                    btnStyle={{ backgroundColor: 'red' }}
                    onPress={() => console.log('answer incorrect')}
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
              <View style={styles.block}>
                <Text style={styles.title}>
                  Yes! React Native works with Android, iOS, Windows, & Web.
                </Text>
              </View>
              <ButtonText
                  onPress={() => this.setState({ screen: screen.QUESTION })}
              >
                Question
              </ButtonText>
              <View>
                <TouchableButton
                    btnStyle={{ backgroundColor: 'green' }}
                    onPress={() => console.log('answer correct')}
                >
                  Correct
                </TouchableButton>
                <TouchableButton
                    btnStyle={{ backgroundColor: 'red' }}
                    onPress={() => console.log('answer incorrect')}
                >
                  Incorrect
                </TouchableButton>
              </View>
            </View>
        );
      case screen.RESULT:
        return (
            <View style={[styles.container, { justifyContent: 'center' }]}>
              <View style={styles.block}>
                <Text style={styles.title}>Quiz Complete!</Text>
              </View>
              <View style={styles.block}>
                <Text style={[styles.count, { textAlign: 'center' }]}>
                  Percentage correct
                </Text>
              </View>
              <View style={styles.block}>
                <Text style={{ fontSize: 46, textAlign: 'center' }}>
                  87%
                </Text>
              </View>
            </View>
        );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
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
  }
});

export default Quiz;