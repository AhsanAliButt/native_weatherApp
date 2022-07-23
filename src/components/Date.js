import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const date = 'Monday, June 7';
const Date = () => {
  return (
    <View>
      <Text style={styles.header}>{date}</Text>
    </View>
  );
};

export default Date;

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontFamily: 'Roboto-Light',
    color: '#fff',
    padding: 5,
  },
});
