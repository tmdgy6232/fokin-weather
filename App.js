import React from 'react';
import {Alert} from "react-native"
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from "axios";
import Weather from './Weather';

const API_KEY ="3d570f577f4a59080f622f3209659170";

export default class extends React.Component {
  state = {
    isLoading : true,
  };
    getWeather = async (latitude, longitude) => {
      const {
         data: {
          main : {temp},
          weather
      } } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
        this.setState({
          isLoading:false, 
          condition:weather[0].main, 
          temp
        });
  };
    getLocation = async () => {
      try {
        await Location.requestPermissionsAsync();
        const {
          coords:{latitude, longitude}
          } = await Location.getCurrentPositionAsync();
        // API로 전송해서 날씨 가져오기
        this.getWeather(latitude, longitude)
      } catch (error) {
        Alert.alert("Can't find you.", "So sad");
      }
  }
  componentDidMount(){
    this.getLocation();
  }
  render() {
    const { isLoading, condition, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition = {condition} />;
  }
}
