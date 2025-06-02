import { TeacherEntity } from "./entities/teacherEntity";

const API_ENDPOINT = "https://dlc.dwit.edu.np";

export default class TeacherService {
  async fetchAllTeachers(): Promise<TeacherEntity[]> {
    const response = await fetch(`${API_ENDPOINT}/api/instructor`);
    const jsonData = await response.json();
    return jsonData.data satisfies TeacherEntity[];
  }
}
