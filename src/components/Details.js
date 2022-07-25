import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WeatherItem from './WeatherItem';
import moment from 'moment';
const Details = ({sunrise, sunset, humidity, pressure, wind, timezone}) => {
  console.log('Timezone', timezone);
  return (
    <View style={styles.container}>
      <WeatherItem title="Humidity" value={humidity ? humidity : ''} unit="%" />
      <WeatherItem
        title="Pressure"
        value={pressure ? pressure : ''}
        unit="hpa"
      />
      <WeatherItem
        title="Sunrise"
        value={sunrise ? moment.unix(sunrise, timezone).format('h:mm a') : ''}
      />
      <WeatherItem
        title="Sunset"
        value={sunset ? moment.unix(sunset).format('h:mm a') : ''}
      />
      <WeatherItem title="Wind" value={wind ? wind : ''} unit="" />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    backgroundColor: '#18181b99',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
});

// convert sunset time into am/pm using momemnt.tz
// moment.tz(sunset, timezone).format('h:mm a')
// moment library shows sunset in am
// moment.tz(sunset, timezone).format('h:mm a')
