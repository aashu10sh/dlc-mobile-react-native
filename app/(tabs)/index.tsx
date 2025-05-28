import ClassCard from "@/components/cards/class/Class";
import ClassService from "@/lib/classService";
import { ClassEntity } from "@/lib/entities/classEntity";
import { Suspense, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [classes, setClasses] = useState<ClassEntity[]>([]);

  useEffect(() => {
    async function _setClasses() {
      const classService = new ClassService();
      const classes = await classService.fetchClasses();
      setClasses(classes);
      console.log("classes have been set");
    }
    _setClasses();
  }, []);

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={{ color: "white", padding: 10, fontSize: 20 }}>
        {" "}
        All Available Classes
      </Text>


      <Suspense fallback={<Text>Loading classes...</Text>}>
        {classes?.map((class_: ClassEntity) => (
          <View style={styles.cardWrapper} key={class_.id}>
            <TouchableOpacity>
            <ClassCard boxColor="21" classNumber={Number(class_.grades)} />
          </TouchableOpacity>
          </View>
        ))}
      </Suspense>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 30,
    alignItems: "center",
  },
  cardWrapper: {
    width: "48%",
    marginBottom: 10,
  },
});
