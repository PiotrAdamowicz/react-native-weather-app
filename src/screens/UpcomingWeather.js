import {
  View,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground
} from "react-native";
import ListItem from "../components/ListItem";

const DATA = [
  {
    dt_txt: "2023-02-18 12:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: "Clear"
      }
    ]
  },
  {
    dt_txt: "2023-02-18 15:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: "Clouds"
      }
    ]
  },
  {
    dt_txt: "2023-02-18 18:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: "Rain"
      }
    ]
  }
];

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      conditio={item.weather[0].main}
      dt_text={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      keyExtractor={(item) => item.dt_txt}
    />
  );
  const { container, image } = styles;
  return (
    <View style={container}>
      <ImageBackground
        source={require("../../assets/upcoming-background.jpg")}
        style={image}
      >
        <Text>Upcoming weather</Text>
        <FlatList data={DATA} renderItem={renderItem} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "royalblue"
  },
  image: {
    flex: 1
  }
});

export default UpcomingWeather;
