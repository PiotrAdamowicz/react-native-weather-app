import City from "./src/screens/City";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import { View, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <UpcomingWeather /> */}
      <City />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
