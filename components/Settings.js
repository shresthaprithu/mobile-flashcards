import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import { gray, white, red, textGray, green } from '../utils/colors';
import TouchableButton from './TouchableButton';
import { resetDecks } from '../utils/api.js';
import { connect } from 'react-redux';
import { resetStore } from '../actions/index';

export class Settings extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    resetStore: PropTypes.func.isRequired
  };
  handleResetDecks = () => {
    const { resetStore, navigation } = this.props;
  
    resetStore();
    resetDecks();
    navigation.goBack();
  };
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}> Settings </Text>
          <View style={styles.block}>
            <View style={styles.blockContainer}>
              <Text style={styles.blockText}>
                This will reset the data back to the original data set.
              </Text>
              <View style={{ height: 20 }} />
              <TouchableButton
                  btnStyle={{ backgroundColor: red, borderColor: white }}
                  onPress={this.handleResetDecks}
              >
                Reset Data
              </TouchableButton>
            </View>
          </View>
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
    paddingBottom: 15
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 16,
    color: green
  },
  block: {
    marginBottom: 20
  },
  blockContainer: {
    backgroundColor: white,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20
  },
  blockText: {
    fontSize: 18,
    color: textGray
  }
});

export default connect(
    null,
    { resetStore }
)(Settings);