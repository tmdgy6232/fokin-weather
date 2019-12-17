import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "집밖에 나가기 시러어"
  },
  Thunderstorm: {
    iconName: "weather-hail",
    gradient: ["#373b44", "#4286f4"],
    title: "Thunderstorm",
    subtitle: "번개친다 ㅈㄴ무섭네"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "어떤날씨니"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6EB", "#005BEA"],
    title: "Rain",
    subtitle: "아야 비온다 파전ㄱ?"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Snow",
    subtitle: "아야 눈온다 장사접쟈"
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Atmosphere",
    subtitle: "날씨가 왜 이따구여 ㅋ"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#ff7300", "#fef253"],
    title: "Clear",
    subtitle: "아따 날씨 조쿠만"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Mist",
    subtitle: "자연산 미스트여 ㅋ"
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Dust",
    subtitle: "먼지난다 집밖에 나가지마라"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#d7d2cc", "#304352"],
    title: "Clouds",
    subtitle: "구름많다 축구하기 좋은날씨네"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfcontainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}o</Text>
      </View>
      <View style={{...styles.halfcontainer, ...styles.textContainer}} >
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Mist",
    "Haze",
    "Dust",
    "Clouds"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title:{
    color:'white',
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle:{
    fontWeight:"600",
    color:'white',
    fontSize: 24
  },
  textContainer: {
      paddingHorizontal: 20,
      alignItems: "flex-start"
  }
});
