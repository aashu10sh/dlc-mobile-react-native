import { StyleSheet, Text, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>More</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    margin: 30,
  },
  headerText: {
    color: "white",
    // padding:20
    fontSize: 30,
  },
});
