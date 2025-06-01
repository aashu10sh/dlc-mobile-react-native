import { useFocusEffect, useNavigation } from "expo-router";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
  text: string;
}

export default function InfoGeneral(props: Props) {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        title: props.title,
      });
    }, [navigation, props.title]),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    flex: 1,
    flexDirection: "column",
    gap: 20,
  },
  title: {
    fontSize: 41,
    color: "white",
  },
  text: {
    fontSize: 17,
    color: "white",
    lineHeight: 25,
    textAlign: "justify",
  },
});
