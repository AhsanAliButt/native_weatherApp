import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const city = 'Asia/Faisalabad';
const lat = '4.22N';
const lon = '50E';

const City = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Text style={styles.header}> {city}</Text>
      <Text style={styles.subHeader}>
        {lat} {lon}
      </Text>
    </View>
  );
};

export default City;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontFamily: 'Roboto-Light',
    color: '#fff',
    padding: 5,
    paddingTop: 10,
  },
  subHeader: {
    fontSize: 15,
    fontFamily: 'Roboto-Light',
    color: '#fff',
    padding: 5,
    alignSelf: 'flex-end',
  },
});
