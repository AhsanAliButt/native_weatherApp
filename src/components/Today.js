import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
const date = 'Monday, June 7';

const Today = ({current, lanlat, timezone}) => {
  const [date, setDate] = useState('');
  useEffect(() => {
    const time = new Date();
    const selectedDate = moment(time).format('dddd, MMMM Do');
    setDate(selectedDate);
  }, []);

  return (
    <View>
      <Text style={styles.header}>{date}</Text>
    </View>
  );
};

export default Today;

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontFamily: 'Roboto-Light',
    color: '#fff',
    padding: 5,
  },
});
