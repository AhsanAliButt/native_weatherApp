import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FutureForecastItem = () => {
  const img = {
    uri: 'http://openweathermap.org/img/wn/10d@2x.png',
  };
  return (
    <View style={styles.futureForecastItemContainer}>
      <Text style={styles.day}> Mon</Text>
      <Image source={img} style={styles.img} />
      <Text style={styles.temp}>Night - 26&#176;C </Text>
      <Text style={styles.temp}>Day - 36&#176;C</Text>
    </View>
  );
};

const FutureForecast = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <FutureForecastItem />
      <FutureForecastItem />
      <FutureForecastItem />
    </View>
  );
};

export default FutureForecast;

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
  },
  futureForecastItemContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000033',
    borderRadius: 10,
    padding: 20,
    marginLeft: 10,
    borderColor: '#fff',
    borderWidth: 1,
  },
  day: {
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#3c3c44',
    padding: 10,
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: '200',
    marginBottom: 15,
  },
  temp: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Roboto-Light',
    fontWeight: '100',
    textAlign: 'center',
  },
});
