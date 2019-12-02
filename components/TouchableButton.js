import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function TouchableButton({
  children,
  onPress,
  btnStyle = {},
  txtStyle = {}
}) {
  return (
      <View style={styles.btnContainer}>
        <TouchableOpacity style={[styles.btn, btnStyle]} onPress={onPress}>
          <Text style={[styles.btnText, txtStyle]}>{children}</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    marginBottom: 20
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

TouchableButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  btnStyle: PropTypes.object,
  txtStyle: PropTypes.object
};