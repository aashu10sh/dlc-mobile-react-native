import TeacherCard from "@/components/ui/cards/teacher/TeacherCard";
import { MorePageInformation } from "@/constants/text";
import { TeacherEntity } from "@/lib/entities/teacherEntity";
import TeacherService from "@/lib/teacherService";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import InfoGeneral from "../pages/InfoGeneral";

export default function InstructorsPage() {
  const [teachers, setTeachers] = useState<TeacherEntity[]>([]);

  useEffect(() => {
    async function _getAllTeachers() {
      const teacherService = new TeacherService();
      const teachers = await teacherService.fetchAllTeachers();
      console.log("got teachers!");
      setTeachers(teachers);
    }
    _getAllTeachers();
  }, []);

  return (
    <ScrollView>
      <InfoGeneral
        text={MorePageInformation.INSTRUCTORS.content}
        title={MorePageInformation.INSTRUCTORS.title}
      />
      <View style={styles.cardsContainer}>
        {teachers.length === 0 ? (
          <Text style={{ color: "white" }}>Loading Teachers </Text>
        ) : (
          teachers.map((teacher, index) => (
            <TeacherCard teacher={teacher} key={index} />
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    gap: 2,
    flexDirection: "column",
  },
});
