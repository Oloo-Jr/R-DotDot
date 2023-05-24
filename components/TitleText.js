import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = props => (

  <Text allowFontScaling={false} style={{ ...styles.title, ...props.style }}>{props.children}</Text>

);

const styles = StyleSheet.create({

  title: {
    
    fontSize: 20
  }

});

export default TitleText;
