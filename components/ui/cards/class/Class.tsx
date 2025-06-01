import { StyleSheet, Text, View } from "react-native";

export default function ClassCard({ classNumber }: { classNumber: number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{classNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 21,
  },
  text: {
    color: "white",
    fontSize: 60,
  },
});
