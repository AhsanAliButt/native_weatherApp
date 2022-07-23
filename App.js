import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Date from './src/components/Date';
import Time from './src/components/Time';
import City from './src/components/City';
import Details from './src/components/Details';
import WeatherDays from './src/components/WeatherDays';

const img = require('./src/assets/Background.jpg');
const App = () => {
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return (
    <>
      <StatusBar style="auto" barStyle="light-content" />
      <View style={{flex: 1}}>
        <ImageBackground
          source={img}
          style={{
            // width: windowWidth,
            // height: windowHeight,
            flex: 1.5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Time />
              <Date />
            </View>
            <View>
              <City />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 10,
              width: '60%',
            }}>
            <Details />
          </View>
          <WeatherDays />
        </ImageBackground>
      </View>
    </>
  );
};
export default App;

const styles = StyleSheet.create({});
