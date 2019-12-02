import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function TextButton({ children, onPress, txtStyle = {} }) {
  return (
      <View>
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.btnText, txtStyle]}>{children}</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  btnText: {
    fontSize: 20
  }
});

TextButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  txtStyle: PropTypes.object
};