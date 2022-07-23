import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WeatherItem = ({title, value, unit}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>
        {value} {unit}
      </Text>
    </View>
  );
};

export default WeatherItem;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontFamily: 'Roboto-Light',
    color: '#fff',
    fontWeight: '100',
    marginTop: 6,
  },
  value: {
    fontSize: 14,
    fontFamily: 'Roboto-Light',
    color: '#fff',
    fontWeight: '100',
  },
});
