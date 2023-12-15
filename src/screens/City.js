import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Feather } from "@expo/vector-icons";
import IconText from "../components/IconText";

const City = () => {
  const {
    imageLayout,
    countryName,
    cityName,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText
  } = styles;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={imageLayout}
        source={require("../../assets/city-background.jpg")}
      >
        <Text style={[cityName, cityText]}>Bialystok</Text>
        <Text style={[countryName, cityText]}>Poland</Text>
        <View style={populationWrapper}>
          <IconText
            iconName="user"
            iconColor="red"
            bodyText="8000"
            bodyTextStyles={populationText}
          />
        </View>
        <View style={riseSetWrapper}>
          <IconText
            iconName="sunrise"
            iconColor="white"
            bodyText="10:46:58am"
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName="sunset"
            iconColor="white"
            bodyText="17:28:15pm"
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
    fontWeight: "bold",
    color: "white"
  },
  populationWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  populationText: {
    fontSize: 20,
    marginLeft: 7.5,
    color: "red"
  },
  riseSetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: "white"
  }
});

export default City;
