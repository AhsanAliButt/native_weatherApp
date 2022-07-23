import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import FutureForecast from './FutureForecast';

const img = {
  uri: 'http://openweathermap.org/img/wn/10d@2x.png',
};

const CurrentTempElement = (temp, unit) => {
  return (
    <View style={styles.currentTempContainer}>
      <Image source={img} style={styles.image} />
      <View style={styles.otherContainer}>
        <Text style={styles.day}> Sunday </Text>
        <Text style={styles.temp}> Night - 28C </Text>
        <Text style={styles.temp}> Day - 35C </Text>
      </View>
    </View>
  );
};

const WeatherDays = () => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <CurrentTempElement />
      <FutureForecast />
    </ScrollView>
  );
};

export default WeatherDays;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  Text: {
    fontSize: 20,
    fontFamily: 'Roboto-Light',
    color: '#fff',
    padding: 5,
    paddingTop: 10,
  },
  scrollView: {
    flex: 0.4,
    padding: 30,
    backgroundColor: '#18181bcc',
  },
  currentTempContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    backgroundColor: '#18181bcc',
    borderRadius: 10,
  },
  day: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Roboto-Light',
    textAlign: 'center',
    borderRadius: 50,
    marginBottom: 15,
    fontWeight: '200',
    backgroundColor: '#3c3c44',
  },
  temp: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Roboto-Light',
    fontWeight: '100',
    textAlign: 'center',
  },
  otherContainer: {
    paddingRight: 60,
    marginLeft: 20,
  },
});
