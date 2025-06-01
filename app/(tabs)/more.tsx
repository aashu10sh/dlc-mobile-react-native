import MoreCard from "@/components/ui/cards/more/MoreCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
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
  redirectTo: string;
}

const items: ItemEntity[] = [
  {
    Icon: MaterialIcons,
    iconName: "class",
    text: "Flipped Class",
    redirectTo: "/more/flipped-class",
  },
  {
    Icon: FontAwesome5,
    iconName: "chalkboard-teacher",
    text: "Instructors",
    redirectTo: "/more/instructors",
  },
  {
    Icon: FontAwesome5,
    iconName: "newspaper",
    text: "Press Release",
    redirectTo: "/more/press-release",
  },
  {
    Icon: AntDesign,
    iconName: "copy1",
    text: "Terms of Use",
    redirectTo: "/more/terms-of-use",
  },
  {
    Icon: MaterialIcons,
    iconName: "privacy-tip",
    text: "Privacy Policy",
    redirectTo: "/more/privary-policy",
  },
  {
    Icon: AntDesign,
    iconName: "infocirlce",
    text: "About Us",
    redirectTo: "/more/about-us",
  },
  {
    Icon: AntDesign,
    iconName: "warning",
    text: "Disclaimer",
    redirectTo: "/more/disclaimer",
  },
];

export default function MoreScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>More</Text>
      <ScrollView>
        {items.map((item, index) => (
          <Pressable
            key={index}
            style={{ marginBottom: 30 }}
            // @ts-ignore
            onPress={() => router.push(item.redirectTo)}
          >
            <MoreCard
              Icon={item.Icon}
              iconName={item.iconName}
              text={item.text}
              redirectTo={item.redirectTo}
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
