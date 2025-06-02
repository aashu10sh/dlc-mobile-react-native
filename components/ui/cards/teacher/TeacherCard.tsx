import { TeacherEntity } from "@/lib/entities/teacherEntity";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

const IMAGE_BASE_URL = "https://dlc.dwit.edu.np/storage/images/instructors/";

interface Props {
  teacher: TeacherEntity;
}

export default function TeacherCard(props: Props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: `${IMAGE_BASE_URL}/${props.teacher.image_url}` }}
      />
      <View style={styles.textContainer}>
        <View>
            <Text style={styles.text}> {props.teacher.name}</Text>
        </View>
        <Link href={`mailto:${props.teacher.email}`}>
          <Fontisto name="email" color={"white"} size={20} />
        </Link>
        <Link href={`tel:+977${props.teacher.contact}`}>
          <AntDesign name="phone" color="white" size={20} />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "column",
    borderWidth: 2,
    // borderColor: 'red',
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    gap:10
    // width: '60%'
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});
