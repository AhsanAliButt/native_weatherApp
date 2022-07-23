import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const time = '12:00 am';

const Time = () => {
  return (
    <View>
      <Text style={styles.header}>{time}</Text>
    </View>
  );
};

export default Time;

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontFamily: 'Roboto-Light',
    color: '#fff',
  },
});
