import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';

// const time = '12:00 am';

const Time = ({current, lanlat, timezone}) => {
  const [time, setTime] = useState('');
  useEffect(() => {
    const time = new Date();
    const selectedTime = moment(time).format('h:mm a');
    setTime(selectedTime);
  }, []);

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
