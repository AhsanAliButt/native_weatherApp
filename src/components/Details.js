import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WeatherItem from './WeatherItem';
const Details = () => {
  return (
    <View style={styles.container}>
      <WeatherItem title="Humidity" value="79" unit="%" />
      <WeatherItem title="Pressure" value="1000" unit="hpa" />
      <WeatherItem title="Sunrise" value="6:00" unit="am" />
      <WeatherItem title="Sunset" value="6:30" unit="pm" />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    backgroundColor: '#18181b99',
    // width: '50%',
    padding: 10,
    // marginLeft: 5,
    borderRadius: 10,
    marginTop: 10,
  },
});
