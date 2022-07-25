import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const City = ({lon, lat, city, country, timezone}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Text style={styles.header}>{timezone}</Text>
      <Text style={styles.subHeader}>
        {lat}N {lon}E
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
