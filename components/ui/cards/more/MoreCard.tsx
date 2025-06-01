import { StyleSheet, Text, View } from "react-native";

import { ComponentType } from "react";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

interface Props {
  Icon: ComponentType<IconProps>;
  iconName: string;
  text: string;
  redirectTo: string;
}

export default function MoreCard(props: Props) {
  return (
    <View style={styles.container}>
      <props.Icon name={props.iconName} color="white" size={50} />
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderWidth: 3,
    borderColor: "white",
    padding: 35,
    width: "100%",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});
