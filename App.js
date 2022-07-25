import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  useWindowDimensions,
  SafeAreaView,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Time from './src/components/Time';
import City from './src/components/City';
import Details from './src/components/Details';
import WeatherDays from './src/components/WeatherDays';
import Today from './src/components/Today';
import Geolocation from 'react-native-geolocation-service';

// console.log(Geolocation);

const img = require('./src/assets/Background.jpg');
const API_KEY = 'a77ce0cdbc8a7ab33d5ba6e407ed3106';
const App = () => {
  const [data, setData] = useState('');

  console.log('data', data.lat);

  const lat = data.lat;
  const lon = data.lon;
  const humidity = data.current.humidity;
  const pressure = data.current.pressure;
  const wind = data.current.wind_speed;
  const sunrise = data.current.sunrise;
  const sunset = data.current.sunset;

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        getWeather(latitude, longitude);
      },
      error => getWeather(31.4228, 73.0843),
    );
  }, []);

  const getWeather = async (latitude, longitude) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`,
    );
    const responseData = await response.json();

    console.log(responseData);

    console.log('Latitude', responseData.lat);
    console.log('Longitude', responseData.lon);

    setData(responseData);
  };

  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return (
    <>
      <StatusBar
        style="auto"
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={{flex: 1}}>
        <ImageBackground
          source={img}
          style={{
            // width: windowWidth,
            // height: windowHeight,
            flex: 1.5,
            paddingTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Time
                current={data.sys}
                lanLat={data.coords}
                timezone={data.timezone}
              />
              <Today
                current={data.sys}
                lanlat={data.coords}
                timezone={data.timezone}
              />
            </View>
            <View>
              <City lat={lat} lon={lon} timezone={data.timezone} />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 10,
              width: '60%',
            }}>
            <Details
              humidity={humidity}
              sunrise={sunrise}
              sunset={sunset}
              pressure={pressure}
              wind={wind}
              timezone={data.timezone}
            />
          </View>
          <WeatherDays />
        </ImageBackground>
      </View>
    </>
  );
};
export default App;

const styles = StyleSheet.create({});
