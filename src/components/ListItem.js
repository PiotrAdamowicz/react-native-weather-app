import { Feather } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

const ListItem = (props) => {
  const { dt_text, min, max, condition } = props;
  const { listItem, date, temp } = styles;
  return (
    <View style={listItem}>
      <Feather name="sun" size={50} color="white" />
      <Text style={date}>{dt_text}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 4,
    backgroundColor: "pink"
  },
  temp: {
    color: "white",
    fontSize: 20
  },
  date: {
    color: "white",
    fotnSize: 15
  }
});

export default ListItem;
