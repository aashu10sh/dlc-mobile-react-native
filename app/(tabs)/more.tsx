import MoreCard from "@/components/ui/cards/more/MoreCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ComponentType } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

interface ItemEntity {
  Icon: ComponentType<IconProps>;
  iconName: string;
  text: string;
}

const items: ItemEntity[] = [
  {
    Icon: MaterialIcons,
    iconName: "class",
    text: "Flipped Class",
  },
  {
    Icon: FontAwesome5,
    iconName: "chalkboard-teacher",
    text: "Instructors",
  },
  {
    Icon: FontAwesome5,
    iconName: "newspaper",
    text: "Press Release",
  },
  {
    Icon: AntDesign,
    iconName: "copy1",
    text: "Terms of Use",
  },
  {
    Icon: MaterialIcons,
    iconName: "privacy-tip",
    text: "Privacy Policy",
  },
  {
    Icon: AntDesign,
    iconName: "infocirlce",
    text: "About Us",
  },
  {
    Icon: AntDesign,
    iconName: "warning",
    text: "Disclaimer",
  },
];

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>More</Text>
      <ScrollView>
        {items.map((item, index) => (
          <Pressable
            key={index}
            style={{ marginBottom: 30 }}
            onPress={() => {
              // redirect to relevant route
              alert(`You Pressed ${item.text}`);
            }}
          >
            <MoreCard
              Icon={item.Icon}
              iconName={item.iconName}
              text={item.text}
            />
          </Pressable>
        ))}
      </ScrollView>
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
    fontSize: 30,
  },
});
