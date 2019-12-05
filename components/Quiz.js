import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Constants from 'expo-constants';
import QuizAndroid from './QuizAndroid';
import QuizIos from './QuizIos';
import { setLocalNotification, clearLocalNotification } from '../utils/helpers';

export class Quiz extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('title', '');
    return {
      title: `${title} Quiz`
    };
  };
  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title', '');
    
    if (Constants.platform.android) {
      return <QuizAndroid title={title} />;
    }
    return <QuizIos title={title} />;
  }
}

export default Quiz;