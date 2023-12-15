import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8 </Text>
          <Text style={styles.highLow}>Low: 6 </Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's sunny</Text>
        <Text style={styles.message}>It's perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  wrapper: {
    backgroundColor: "orange",
    paddingTop: 40,
    padding: 20,
    flex: 1,
    textAlign: "center"
  },
  feels: {
    textAlign: "center"
  },
  highLow: {
    textAlign: "center",
    color: "black",
    fontSize: 20
  },
  temp: {
    textAlign: "center",
    color: "black",
    fontSize: 48
  },
  highLowWrapper: {
    flexDirection: "row",
    justifyContent: "center"
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 20
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
});

export default CurrentWeather;
