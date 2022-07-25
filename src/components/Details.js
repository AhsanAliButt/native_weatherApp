import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WeatherItem from './WeatherItem';
import moment from 'moment-timezone';
const Details = ({
  current,
  sunrise,
  sunset,
  humidity,
  pressure,
  wind,
  timezone,
}) => {
  // console.log('Sunrise', current.sunrise);
  return (
    <View style={styles.container}>
      <WeatherItem
        title="Humidity"
        value={current ? current.humidity : ''}
        unit="%"
      />
      <WeatherItem
        title="Pressure"
        value={current ? current.pressure : ''}
        unit="hpa"
      />
      <WeatherItem
        title="Sunrise"
        value={
          current
            ? moment.tz(current.sunrise * 1000, timezone).format('h:mm a')
            : ''
        }
      />
      <WeatherItem
        title="Sunset"
        value={
          current
            ? moment.tz(current.sunset * 1000, timezone).format('h:mm a')
            : ''
        }
      />
      <WeatherItem
        title="Wind"
        value={current ? current.wind_speed : ''}
        unit=""
      />
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
